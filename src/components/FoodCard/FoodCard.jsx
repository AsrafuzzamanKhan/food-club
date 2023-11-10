import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
    const { image, name, price, recipe, _id } = item;
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const [, refetch] = useCart()
    const handleAddToCart = item => {
        console.log(item.name)

        if (user && user.email) {
            const cartItem = { menuItemId: _id, name, price, image, email: user.email }
            fetch('https://food-club-server-ten.vercel.app/carts', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch(); //refetch the cart to update the cart
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Added to the Cart',
                            showConfirmButton: false,
                            timer: 1500
                        })

                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please to login',

                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }
    return (
        <div className="card w-full bg-base-100 shadow-xl hover:scale-95 duration-300">
            <figure className="w-full h-[250px]   "><img className=" w-full h-full object-cover" src={image} alt="foods" /></figure>
            <p className="bg-slate-900 text-white absolute right-0 mt-4 mr-4 p-2 rounded-full">$ {price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button
                        onClick={() => handleAddToCart(item)}
                        className="btn btn-outline bg-slate-200 border-0 border-b-4 border-orange-300 text-black">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;