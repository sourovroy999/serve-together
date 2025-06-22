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
                element:<AddVolunteer/>
            },
            {
                path:'/my-posts',
                element:<MyPosts/>
            },
            {
                path:'/details/:id',
                element:<PostDetails/>,
                loader:({params})=>fetch(`http://localhost:8000/post/${params.id}`)
            },
            {
                path:'/be-a-volunteer/:id',
                element:<BeAVolunteer/>,
                loader:({params})=>fetch(`http://localhost:8000/post/${params.id}`)
            },
            {
                path:'/all-posts',
                element:<AllPosts/>
            },
            {
                path:'update/:id',
                element:<UpdatePost/>,
                loader:({params})=>fetch(`http://localhost:8000/post/${params.id}`)

            }

        ]
    }
])

export default router