import axios from 'axios';
import  { useEffect, useState } from 'react';
import SInglePost from '../allcards/SInglePost';
import { Link } from 'react-router';
import UseAuth from '../../hooks/UseAuth';
import { Fade } from 'react-awesome-reveal';

const VolunteerNow = () => {

      const[posts, setPosts]=useState([]);

      const{user}=UseAuth()
    
        useEffect(()=>{
            getData()
        }, [])
    
        const getData=async()=>{
            const {data}=await axios(`https://servetogether-server.vercel.app/urgentPosts`, ) //get operations
            setPosts(data)
            
        }


    return (
        <div>
            <Fade  >
            <p className='text-center font-semibold text-3xl my-10 text-orange-400'> Urgent Posts {posts.length}</p>
            </Fade>
            {/* {user.email} */}

<Fade triggerOnce>

             <div className="grid px-3  md:px-5 lg:px-10 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {
                    posts.map(post=> <SInglePost key={post._id} post={post}></SInglePost>)
                }

            </div>
</Fade>
            <div className='flex justify-center my-10'>

            <Link to={'/all-posts'}  className="btn bg-blue-500 text-white hover:bg-blue-900">See All Posts</Link>
            </div>



        </div>
    );
};

export default VolunteerNow;