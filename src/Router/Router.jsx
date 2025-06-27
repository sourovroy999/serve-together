import { createBrowserRouter } from "react-router";
import MainLayOut from "../layout/MainLayOut";
import Home from "../pages/Home";
import ErrorPage from "../errorpage/ErrorPage";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";
import AddVolunteer from "../pages/organizer/AddVolunteer";
import MyPosts from "../pages/organizer/MyPosts";
import PostDetails from "../pages/details/PostDetails";
import BeAVolunteer from "../pages/volunteer/BeAVolunteer";
import AllPosts from "../components/allcards/AllPosts";
import UpdatePost from "../pages/organizer/UpdatePost";
import PrivateRoute from "./PrivateRoute";

const router=createBrowserRouter([
    {
        path:'/',
        element:<MainLayOut/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:'/login',
                element:<Login/>

            },
            {
                path:'/register',
                element:<Register/>
            },
            {
                path:'/add-volunteer-needed-post',
                element: <PrivateRoute>

                 <AddVolunteer/>
                 </PrivateRoute>
            },
            {
                path:'/my-posts',
                element:<PrivateRoute>
                             <MyPosts/>
                </PrivateRoute>  
            },
            {
                path:'/details/:id',
                element: <PrivateRoute>
                    <PostDetails/>
                </PrivateRoute>,
                loader:({params})=>fetch(`https://servetogether-server.vercel.app/post/${params.id}`)
            },
            {
                path:'/be-a-volunteer/:id',
                element:<PrivateRoute>
                    <BeAVolunteer/>
                </PrivateRoute>,
                loader:({params})=>fetch(`https://servetogether-server.vercel.app/post/${params.id}`)
            },
            {
                path:'/all-posts',
                element:<AllPosts/>
            },
            {
                path:'update/:id',
                element:<PrivateRoute>
                    <UpdatePost/>
                </PrivateRoute>,
                loader:({params})=>fetch(`https://servetogether-server.vercel.app/post/${params.id}`)

            }

        ]
    }
])

export default router