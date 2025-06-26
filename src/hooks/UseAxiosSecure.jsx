
import axios from "axios";
import UseAuth from "./UseAuth";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:8000',
    withCredentials: true,
});

// Flag to prevent multiple logout calls
let isLoggingOut = false;

const UseAxiosSecure = () => {
    const { logOut } = UseAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const responseInterceptor = axiosSecure.interceptors.response.use(
            res => res,
            async error => {
                if ((error.response?.status === 401 || error.response?.status === 403) && !isLoggingOut) {
                    isLoggingOut = true;
                    
                    try {
                        await logOut();
                        navigate('/login');
                    } catch (err) {
                        console.log('Logout error:', err);
                    }
                    
                    // Reset flag after 2 seconds
                    setTimeout(() => {
                        isLoggingOut = false;
                    }, 2000);
                }
                return Promise.reject(error);
            }
        );

        // Cleanup on unmount
        return () => {
            axiosSecure.interceptors.response.eject(responseInterceptor);
        };
    }, [logOut, navigate]);

    return axiosSecure;
};

export default UseAxiosSecure