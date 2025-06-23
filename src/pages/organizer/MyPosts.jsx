import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import UseAuth from "../../hooks/UseAuth";

const MyPosts = () => {

  const axiosSecure=UseAxiosSecure()
  const{user}=UseAuth()

    const[posts, setPosts]=useState([])
    const[volunteers, setVolunteers]=useState([])
    // console.log(posts);
    console.log(volunteers);
    


    

    useEffect(()=>{
        getData()
        getVolunteersData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])


    //volunteer needed related (by the organizer)
    
    const getData=async()=>{
        // const email='sourov@gmail.com'

        const {data}=await axiosSecure(`http://localhost:8000/organization/${user.email}`)
        // console.log(data);
        setPosts(data)
        
    }

    const handlePostDelete=async(id)=>{
     

         const result= await  Swal.fire ({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, Delete My Request!"
})

if (result.isConfirmed) {

    try {
        const{data}=await axiosSecure.delete(`http://localhost:8000/delete-post/${id}`) 
          const remaining=posts.filter(post=> post._id !==id)
         setVolunteers(remaining)
         getData()

          Swal.fire({
      title: "Deleted!",
      text: "Your Post has been deleted.",
      icon: "success"
    });
    

    } catch (error) {
        console.log(error);
          Swal.fire("Something went wrong. Try again.");
    }

 
  }


      

    }


    


// volunteers request related
    const getVolunteersData=async()=>{
        
        const {data}=await axiosSecure(`http://localhost:8000/volunteer/${user?.email}`)
        console.log(data);
        setVolunteers(data)
        
    }

    const handleVolunteerCancel=async(id)=>{
        console.log(id);
        
    const result= await  Swal.fire ({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, Delete My Request!"
})



if (result.isConfirmed) {

    try {
         const{data}= await axiosSecure.delete(`http://localhost:8000/volunteerdelete/${id}`)
         const updatedVolunteers=volunteers.filter(volunteer => volunteer._id !== id)
         setVolunteers(updatedVolunteers)
         getData()

          Swal.fire({
      title: "Deleted!",
      text: "Your Request has been deleted.",
      icon: "success"
    });
    

    } catch (error) {
        console.log(error);
          Swal.fire("Something went wrong. Try again.");
    }

 
  }


    }
    

    return (
            <div className='pb-40'>

                {/* my Volunteer Need post */}
            <h1 className='text-center font-bold text-3xl mt-3'>My volunteer need post</h1>

             <div className="mt-9 ">
                           <div className="overflow-x-auto max-w-5xl mx-auto">
              <table className="table ">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Posted By</th>
                    <th>Title</th>
                    <th>Location</th>
            
                    <th>Deadline</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}

                  {
                    posts.map((post,index)=> <tr key={post._id || index}>
                        <th>{index+1}</th>
                        <td>{post.organizerEmail}</td>
                        <td>{post.title}</td>
                        <td>{post.location}</td>
                        <td>{post.deadline}</td> 
                        <td className="flex">
                            <Link to={`/update/${post._id}`} className="btn">Update</Link>
                            <button onClick={()=>handlePostDelete(post._id)} className="btn">delete</button>
                        </td>
                    </tr>)
                  }
              
                </tbody>
              </table>
            </div>
              </div> 






            {/* My My Volunteer Request Post*/}
                
        <h1 className="font-bold text-3xl text-center my-10">My Volunteer Requests  </h1>

                     <div className="mt-9 ">
                           <div className="overflow-x-auto max-w-5xl mx-auto">
              <table className="table ">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Posted By</th>
                    <th>Title</th>
                    <th>Location</th>
            
                    <th>Deadline</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}

                  {
                    volunteers.map((volunteer,index)=> <tr key={volunteer._id || index}>
                        <th>{index+1}</th>
                        <td>{volunteer.Volunteer_Email}</td>
                        <td>{volunteer.title}</td>
                        <td>{volunteer.location}</td>
                        <td>{volunteer.deadline}</td> 
                        <td className="flex">
                            
                            <button onClick={()=>handleVolunteerCancel(volunteer._id)}  className="btn">Cancel</button>
                        </td>
                    </tr>)
                  }
            
              </tbody>
              </table>
            </div>
              </div> 




                    


        </div>
    );
};

export default MyPosts;