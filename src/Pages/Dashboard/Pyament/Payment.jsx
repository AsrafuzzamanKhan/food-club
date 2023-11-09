import { Elements } from '@stripe/react-stripe-js';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';

import useCart from '../../../hooks/useCart';
const stripePromise = loadStripe(import.meta.env.VITE_Paymanet_gateway_pk);

const Payment = () => {

    const [cart, refetch] = useCart()
    const total = cart.reduce((sum, item) => item.price + sum, 0)
    const price = parseFloat(total.toFixed(2))

    return (
        <div className='w-full'>
            <SectionTitle subHeading='please provide' heading='Payment'></SectionTitle>

            <Elements stripe={stripePromise}>
                <CheckoutForm cart={cart} refetch={refetch} price={price} />
            </Elements>
        </div>
    );
};

export default Payment;