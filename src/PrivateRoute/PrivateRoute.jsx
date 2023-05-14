import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation() // 1. redirect target/clicked link/page after login
    
    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if(user?.email){
        return children
    }
    // 2. redirect target/clicked link/page after login [state={{from: location}}]
    // go to login 3
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;