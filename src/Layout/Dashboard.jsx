import { Link, NavLink, Outlet } from "react-router-dom";
import { FaCalendarAlt, FaHome, FaShoppingCart, FaWallet } from 'react-icons/fa';
import MyCart from "../Pages/Dashboard/MyCart/MyCart";


const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li><Link to=''><FaHome /> User Home</Link></li>
                    <li><Link to=''> <FaCalendarAlt></FaCalendarAlt> Reservation </Link></li>
                    <li><Link to=''> <FaWallet></FaWallet>Payment </Link></li>
                    <li><Link to=''> <FaShoppingCart />cart </Link></li>

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