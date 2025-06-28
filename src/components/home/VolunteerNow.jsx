import axios from 'axios';
import  { useEffect, useState } from 'react';
import SInglePost from '../allcards/SInglePost';
import { Link } from 'react-router';
import { Fade } from 'react-awesome-reveal';
import toast from 'react-hot-toast';

const VolunteerNow = () => {

      const[posts, setPosts]=useState([]);

      const [loading, setLoading]=useState(false)
    
        useEffect(()=>{
            getData()
        }, [])
    
        const getData=async()=>{
            try{
                setLoading(true)
                 const {data}=await axios(`https://servetogether-server.vercel.app/urgentPosts`, ) //get operations
            setPosts(data)
                
            } catch(err){
                console.error('error, fetching posts', err)
                toast.error('Enable Connection to see all posts')
            } finally{
                setLoading(false)
            }
    
        }

        if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        {/* <div className="w-10 h-10 border-4 border-dashed rounded-full animate-spin border-blue-600"></div> */}
        <span className="loading loading-spinner text-primary"></span>
      </div>
    );
  }


    return (
        <div>
            <Fade  >
            <p className='text-center font-semibold text-3xl my-10 text-green-500'> Urgent Posts {posts.length}</p>
            </Fade>

       <Fade triggerOnce>

             <div className="grid px-3  md:px-5 lg:px-10 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {
                    posts.map(post=> <SInglePost key={post._id} post={post}></SInglePost>)
                }

            </div>
</Fade>

       <Fade triggerOnce>
            <div className='flex justify-center my-10'>

            <Link to={'/all-posts'}  className="btn bg-blue-500 text-white hover:bg-blue-900">See All Posts</Link>
            </div>
            </Fade>



        </div>
    );
};

export default VolunteerNow;