import React from 'react';
import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaShoppingCart } from 'react-icons/fa';
import useCart from '../../../hooks/useCart';
import useAdmin from '../../../hooks/useAdmin';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart()
    const [isAdmin] = useAdmin()
    const navigate = useNavigate()
    // console.log(user)

    const handleLogOut = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
                navigate('/')
                console.log(navigate)
            }).catch((error) => {
                console.log(error)
                // An error happened.
            });
    }
    const menuItems = <React.Fragment>
        <li className=' m-2 uppercase font-semibold hover:bg-gray-600 hover:text-white hover:rounded-xl'><NavLink to='/'>Home</NavLink></li>
        <li className=' m-2 uppercase font-semibold hover:bg-gray-600 hover:text-white hover:rounded-xl'><NavLink to='/menu'>Menu</NavLink></li>
        <li className=' m-2 uppercase font-semibold hover:bg-gray-600 hover:text-white hover:rounded-xl'><NavLink to='/order/salad'>Order</NavLink></li>
        <li className=' m-2 uppercase font-semibold hover:bg-gray-600 hover:text-white hover:rounded-xl'><NavLink to={isAdmin ? '/dashboard/adminhome' : '/dashboard/userhome'}>Dashboard</NavLink></li>
        <li className=' m-2 uppercase hover:scale-95 duration-300'>
            <NavLink to='/dashboard/mycart'>
                <button className="btn">
                    <FaShoppingCart></FaShoppingCart>
                    <div className="badge badge-secondary">

                        {cart?.length || 0}
                    </div>
                </button>
            </NavLink>
        </li>

    </React.Fragment>
    return (
        <div className=''>
            <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white lg:px-10 h-20">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black  rounded-box w-60">
                            {menuItems}
                        </ul>
                    </div>
                    <NavLink to='/' className=' text-xl font-bold uppercase'>Food club</NavLink>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex items-center justify-center">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?

                            <>  <button onClick={handleLogOut} className='btn bg-black text-white border-none hover:bg-gray-600 duration-300'>Logout</button></>
                            :
                            <><button className='btn bg-black text-white border-none hover:bg-gray-600 duration-300'> <Link to='/login'>Login</Link></button>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;