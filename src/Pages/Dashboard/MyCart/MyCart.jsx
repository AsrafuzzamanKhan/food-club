import { Helmet } from "react-helmet-async";
import { AiFillDelete } from 'react-icons/ai';
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyCart = () => {
    const [cart, refetch] = useCart()
    const total = cart.reduce((sum, item) => item.price + sum, 0)
    const price = parseFloat(total.toFixed(2))

    // delete item 

    const handleDelete = (item) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://food-club-server-seven.vercel.app/carts/${item._id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your item has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })

    }
    return (
        <div className="w-full">
            <Helmet>
                <title> Food Club || My Cart</title>
            </Helmet>
            <div className="uppercase font-semibold h-20 flex justify-evenly items-center">
                <h3 className="text-3xl"> Total Items: {cart.length}</h3>
                <h3 className="text-3xl"> Total Price: {price}</h3>
                <Link to='/dashboard/payment'>       <button className="btn btn-warning btn-small">Pay</button></Link>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>#</th>
                            <th>Food</th>
                            <th>Item name</th>
                            <th>Pice</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, i) =>
                                <tr key={item._id}>
                                    <th>
                                        {i + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{item.name}</div>

                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.name}
                                        <br />

                                    </td>
                                    <td>$ {item.price}</td>
                                    <th>
                                        <button onClick={() => handleDelete(item)} className="btn bg-red-600 text-white"> <AiFillDelete className='text-2xl' /></button>
                                    </th>
                                </tr>)
                        }


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyCart;