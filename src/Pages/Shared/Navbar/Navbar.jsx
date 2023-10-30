import React from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaShoppingCart } from 'react-icons/fa';
import useCart from '../../../hooks/useCart';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart, refetch] = useCart()
    console.log(user)
    const handleLogOut = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                console.log(error)
                // An error happened.
            });
    }
    const menuItems = <React.Fragment>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/menu'>Menu</NavLink></li>
        <li><NavLink to='/order/salad'>Order</NavLink></li>
        <li><NavLink to='/secret'>Secret</NavLink></li>
        <li>
            <NavLink to='/dashboard/mycart'>
                <button className="btn">
                    <FaShoppingCart></FaShoppingCart>
                    <div className="badge badge-secondary">

                        {cart?.length || 0}
                    </div>
                </button>
            </NavLink>
        </li>
        {
            user ? <>

                <li> <button onClick={handleLogOut} className='btn btn-ghost'>Log out</button></li></> : <> <li>   <NavLink to='/login'>Login</NavLink></li></>
        }
    </React.Fragment>
    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Food Panda</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;