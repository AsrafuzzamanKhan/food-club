import { NavLink, Outlet } from "react-router-dom";
import { FaBook, FaCalendarAlt, FaHome, FaShoppingCart, FaSitemap, FaUsers, FaUtensils, FaWallet } from 'react-icons/fa';

import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {
    const [cart] = useCart()
    // todo load data from server 
    // const isAdmin = true;
    const [isAdmin] = useAdmin()
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-[#D1A054] text-base-content">
                    {/* Sidebar content here */}

                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to='/dashboard/home'><FaHome /> Admin Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink> <FaUtensils></FaUtensils> Add item</NavLink>
                            </li>
                            <li>
                                <NavLink> <FaSitemap></FaSitemap>
                                    Manage Items
                                </NavLink>
                            </li>
                            <li>
                                <NavLink>
                                    <FaBook></FaBook> Manage Bookings
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/allusers'>
                                    <FaUsers></FaUsers> Manage All USers
                                </NavLink>
                            </li>

                        </> : <>
                            <li><NavLink to='/dashboard/home'><FaHome /> User Home</NavLink></li>
                            <li><NavLink to='/dashboard/reservations'> <FaCalendarAlt></FaCalendarAlt> Reservation </NavLink></li>
                            <li><NavLink to='/dashboard/history'> <FaWallet></FaWallet>Payment </NavLink></li>
                            <li><NavLink to='/dashboard/mycart'> <FaShoppingCart />Cart
                                <div className="badge badge-secondary">

                                    +{cart?.length || 0}
                                </div>

                            </NavLink></li>

                        </>
                    }


                    <div className="divider"></div>

                    <li><NavLink to='/'> <FaHome />Home</NavLink></li>
                    <li><NavLink to='/menu'>Menu</NavLink></li>
                    <li><NavLink to='/order/salad'>Order</NavLink></li>


                </ul>

            </div>
        </div>
    );
};

export default Dashboard;