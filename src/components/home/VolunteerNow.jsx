import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UrgentPost from './UrgentPost';
import SInglePost from '../allcards/SInglePost';
import { Link } from 'react-router';

const VolunteerNow = () => {

      const[posts, setPosts]=useState([])
        // console.log(posts);
    
        useEffect(()=>{
            getData()
        }, [])
    
        const getData=async()=>{
            const {data}=await axios(`http://localhost:8000/urgentPosts`, ) //get operations
            // console.log(data);
            setPosts(data)
            
        }


    return (
        <div>
            <p className='text-center font-semibold text-3xl my-10'> Urgent Posts {posts.length}</p>

             <div className="grid px-24 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {
                    posts.map(post=> <SInglePost key={post._id} post={post}></SInglePost>)
                }

            </div>

            <div className='flex justify-center my-10'>

            <Link to={'/all-posts'}  className="btn bg-blue-500 text-white hover:bg-blue-900">See All Posts</Link>
            </div>



        </div>
    );
};

export default VolunteerNow;