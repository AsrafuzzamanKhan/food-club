import { AiFillDelete } from "react-icons/ai";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const ManageItems = () => {
    const [menu, , refetch] = useMenu()
    const [axiosSecure] = useAxiosSecure()
    const handleDelete = item => {
        console.log(item)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            console.log(result)
            if (result.isConfirmed) {
                axiosSecure.delete(`/menu/${item._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
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
            <SectionTitle heading='Manage All Items' subHeading='Hurry UP'></SectionTitle>
            <div className="text-center text-2xl font-medium my-10 uppercase">
                Total Items: {menu.length}
            </div>
            <div className="overflow-x-auto">
                <table className="table">

                    {/* head */}
                    <thead>
                        <tr>

                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Edit</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            menu.map((item, index) =>
                                <tr key={item._id}>
                                    <td >
                                        {index + 1}
                                    </td>
                                    <td>
                                        <img className="w-[60px] h-[60px] object-cover rounded-full" src={item.image} alt="" />
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td className="text-right">{item.price}</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">details</button>
                                    </th>
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

export default ManageItems;
