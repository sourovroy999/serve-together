import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router";
import LoadingSpinner from "../components/LoadingSpinner";


const PrivateRoute = ({children}) => {
    const{user,loading}=useContext(AuthContext)
    const location=useLocation()

    if(loading){
        return <LoadingSpinner/>

    }

    if(user) return children

    return <Navigate to={'/login'} state={location.pathname} replace={true}/>
};

export default PrivateRoute;