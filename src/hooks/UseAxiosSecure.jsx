import axios from "axios";
import UseAuth from "./UseAuth";
import { useNavigate } from "react-router";



const axiosSecure=axios.create({
    baseURL:'http://localhost:8000',
    withCredentials:true,

})


const UseAxiosSecure=()=>{
    const {logOut}=UseAuth()
    const navigate=useNavigate()

  
    //i can use useeffect here

    axiosSecure.interceptors.response.use(
        res=>{
            return res
        },
        async error=>{
            if(error.response.status===401 || error.response.status===403){
                await logOut()
                navigate('/login')
            }
            return Promise.reject(error)
        }
    )

    return axiosSecure
}

export default UseAxiosSecure