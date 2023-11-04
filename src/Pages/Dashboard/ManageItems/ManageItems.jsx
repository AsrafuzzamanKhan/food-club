import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";


const ManageItems = () => {
    const [menu] = useMenu()
    console.log(menu)
    return (
        <div className="w-full">
            <SectionTitle heading='Manage All Items' subHeading='Hurry UP'></SectionTitle>
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
                                        <img className="w-[100px] h-[100px] object-cover rounded-full" src={item.image} alt="" />
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>{item.price}</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">details</button>
                                    </th>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">details</button>
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
