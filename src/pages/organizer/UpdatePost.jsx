import { useLoaderData } from 'react-router';
import axios from 'axios';
import toast from 'react-hot-toast';
import useAuth from '../../hooks/useAuth';

const UpdatePost = () => {

    const{user}=useAuth()  //eta use korte hbe **



   
    
    

    const postData=useLoaderData()
    // console.log(postData);
    const{category,description,location, organizerEmail, organizerName, thumbnail,title,volunteernumber,  _id  }=postData
    // console.log(postData);
    

    const handleUpdatePost=async(e)=>{
        console.log(e);
        
        e.preventDefault()
        const form=e.target;
        const formData=new FormData(form)
        const updatedVounteerEntries= Object.fromEntries(formData.entries())
        console.log(updatedVounteerEntries);

         try {
        const{data}=await axios.put(`http://localhost:8000/update-post/${_id}`, updatedVounteerEntries)
                toast.success('Updated successfully')
        } catch (err) {
        console.log(err);
        toast.error(err)
        
        
    }
        

    }

    

    return (
           <div className="pb-20">
            <p className="text-2xl text-center my-6">Update your Post</p>


<div className="max-w-xs mx-auto">

        <form onSubmit={handleUpdatePost} className="flex justify-center flex-col gap-2">
          
                <label className="">Thumbnail URL</label> 
        <input   defaultValue={thumbnail} name="thumbnail" type="text" placeholder="Thumbnail URL"  className="border max-w-xs py-1 px-2 rounded-md"/>

                <label  className="">Post Title</label> 
        <input   defaultValue={title} name="title" type="text" placeholder="Post Title"  className="border max-w-xs py-1 px-2 rounded-md"/>

                <label className="">Description</label> 
          <textarea defaultValue={description}  
              className='block w-full px-4 py-2 mt-2 
               border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              name='description'
              id='description'
              cols='30'
            ></textarea>



                <label className="">Category</label> 

        <select  defaultValue={category}  name="category" id="" className="border py-1 rounded-md bg-gray-500">
            <option  value="Healthcare">Healthcare</option>
            <option value="Education">Education</option>
            <option value="Social Service">Social Service</option>
            <option value="Animal Welfare">Animal Welfare</option>
        </select>

        <label className="">Location</label> 
        <input  defaultValue={location} name="location" type="text" placeholder="Location"  className="border max-w-xs py-1 px-2 rounded-md"/>

        <label className="">No Of Volunteer Needed</label> 
        <input  defaultValue={volunteernumber} name="volunteernumber" type="number" placeholder="No Of Volunteer Needed"  className="border max-w-xs py-1 px-2 rounded-md"/>

        {/* deadline */}
        <label htmlFor="">Deadline</label>


        {/* need to change later with user name */}
        <label className="">Organizer Name</label> 
        <input readOnly defaultValue={organizerName} name="organizerName" type="text" placeholder="Organizer Name"  className="border max-w-xs py-1 px-2 rounded-md"/>

        {/* need to change later with user email */}

        <label  className="">Organizer Email</label> 
        <input readOnly defaultValue={organizerEmail} name="organizerEmail" type="text" placeholder="Organizer Email"  className="border max-w-xs py-1 px-2 rounded-md"/>
       <button className="btn btn-info mt-4">Update</button>
      
        </form>
</div>
        
        </div>
    );
};

export default UpdatePost;