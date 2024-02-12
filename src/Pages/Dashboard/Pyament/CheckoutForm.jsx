import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';


const CheckoutForm = ({ price, cart, refetch }) => {
    const { user } = useAuth()
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    // const [cardReset, setCardReset] = useState('')

    const [axiosSecure] = useAxiosSecure()
    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    // console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret)
                })
        }

    }, [price, axiosSecure])

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        console.log('card', card)
        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setCardError(error)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setCardError('')

        }

        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymas'
                    },
                },
            },
        );
        if (confirmError) {
            setCardError(confirmError)
            console.log(confirmError)
        }
        console.log('payment intent', paymentIntent);
        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id)

            // Save payment information in server 
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                quantity: cart.length,
                status: 'service pending',
                menuItems: cart.map(item => item.
                    menuItemId),
                cartItems: cart.map(item => item._id),
                itemNames: cart.map(item => item.name)
            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertResult.insertedId) {
                        refetch()
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "payment done",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })

        }
    };


    return (
        <div className='w-1/2 h-1/2 border mx-auto shadow-xl rounded-xl'>
            {price}
            <div className='p-10'>
                <form onSubmit={handleSubmit}>
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                    />
                    <div className='mt-4 text-red-600'>
                        {cardError && <p>{cardError.message}</p>}
                    </div>
                    <div className='mt-4 text-red-600'>
                        {transactionId && <p>TRansection ID: {transactionId}</p>}
                    </div>
                    <button type="submit" disabled={!stripe || !clientSecret || processing} className='btn btn-primary mt-4'>
                        Pay
                    </button>
                </form>

            </div>
        </div>


    );
};

export default CheckoutForm;