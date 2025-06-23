import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UrgentPost from './UrgentPost';
import SInglePost from '../allcards/SInglePost';

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
            <p className='text-center text-3xl my-10'>volunteers needed now : {posts.length}</p>

             <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-7">
                {
                    posts.map(post=> <SInglePost key={post._id} post={post}></SInglePost>)
                }

            </div>



        </div>
    );
};

export default VolunteerNow;