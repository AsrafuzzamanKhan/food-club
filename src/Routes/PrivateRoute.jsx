import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link, Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
        // <div className="flex flex-col items-center justify-center my-12 ">
        //     <span className="loading loading-spinner loading-lg"></span>
        //     <Link to='/login'>
        //         <button className="btn btn-primary p-4 mt-12">Login</button>
        //     </Link>
        // </div>
    }
    if (user) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;