import axios from "axios";
import { useEffect, useState } from "react";
import SInglePost from "./SInglePost";
import toast from "react-hot-toast";


const AllPosts = () => {
      const[posts, setPosts]=useState([])
      const[search,setsearch]=useState('')
      const[searchText,setSearchText]=useState('')
    const[loading,setLoading]=useState(false)

      useEffect(()=>{
          document.title='serveTogether | All Posts'
        }, [])
        

    useEffect(()=>{
       getData()
    }, [search])

       const getData=async()=>{

            try{
                setLoading(true)
                const {data}=await axios(`https://servetogether-server.vercel.app/organizationsPosts?search=${search}`, ) //get operations
        setPosts(data)

            }catch(err){
                console.log(err);
                
                toast.error('Enable Your Internet Connection to see all Posts')
                

            }finally{
                setLoading(false)

            }
   
    }

    if (loading) {
    return (
      <div className="flex justify-center items-center h-80 ">
        {/* <div className="w-10 h-10 border-4 border-dashed rounded-full animate-spin border-blue-600"></div> */}
        <span className="loading loading-spinner text-primary"></span>
      </div>
    );
  }

 

    const handleSearch=(e)=>{
        e.preventDefault()
        
        setsearch(searchText)

    }
    const handleReset=()=>{
        
        setsearch('')
        setSearchText('')
    }

      
    

    return (
        <div  className="mx-auto text-base-content pb-32  max-w-6xl">
                
            <form className={`flex flex-col justify-center mt-10 mb-10 mx-2 md:mx-0 items-center md:flex-row ${loading && 'hidden'}`} onSubmit={handleSearch}>
                <input className="   w-[260px] input border h-10 rounded-md " type="text" 
                onChange={(e)=>setSearchText(e.target.value)}
                name="search"
                value={searchText}
                placeholder="Enter Post Title"
                aria-label="enter post title"
                />

                <div className="mt-2 md:mt-0 gap-3 flex md:ml-4">

                <button type="submit" className="btn   bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Search</button>
            
            <button type="button" onClick={handleReset} className="btn  bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded">Reset</button>
            </div>
            </form>


            


            <div className="grid px-3   md:grid-cols-2 md:px-5 lg:px-10 lg:grid-cols-3 gap-7">
                {
                    posts.map(post=> <SInglePost key={post._id} post={post}></SInglePost>)
                }

            </div>
        </div>
    );
};

export default AllPosts;