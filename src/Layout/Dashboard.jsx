import { Link, NavLink, Outlet } from "react-router-dom";
import { FaCalendarAlt, FaHome, FaShoppingCart, FaWallet } from 'react-icons/fa';
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import useCart from "../hooks/useCart";


const Dashboard = () => {
    const [cart] = useCart()
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
                    <li><NavLink to='/dashboard/home'><FaHome /> User Home</NavLink></li>
                    <li><NavLink to='/dashboard/reservations'> <FaCalendarAlt></FaCalendarAlt> Reservation </NavLink></li>
                    <li><NavLink to='/dashboard/history'> <FaWallet></FaWallet>Payment </NavLink></li>
                    <li><NavLink to='/dashboard/mycart'> <FaShoppingCart />cart


                        <div className="badge badge-secondary">

                            +{cart?.length || 0}
                        </div>

                    </NavLink></li>

                    <div className="divider"></div>

                    <li><NavLink to='/'> <FaHome />Home</NavLink></li>
                    <li><NavLink to='/menu'>Menu</NavLink></li>
                    <li><NavLink to='/order/salad'>Order</NavLink></li>
                    <li><NavLink to='/secret'>Secret</NavLink></li>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;