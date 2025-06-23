import axios from "axios";
import { useEffect, useState } from "react";
import SInglePost from "./SInglePost";


const AllPosts = () => {
      const[posts, setPosts]=useState([])
    // console.log(posts);

    useEffect(()=>{
        getData()
    }, [])

    const getData=async()=>{
        const {data}=await axios(`http://localhost:8000/organizationsPosts`, ) //get operations
        // console.log(data);
        setPosts(data)
        
    }
    

    return (
        <div className="mx-auto max-w-6xl">
            <p className="text-center text-2xl my-6">all postssss: {posts.length}</p>
            <div className="grid   md:grid-cols-2 lg:grid-cols-3 gap-7">
                {
                    posts.map(post=> <SInglePost key={post._id} post={post}></SInglePost>)
                }

            </div>
        </div>
    );
};

export default AllPosts;