import { useLoaderData } from 'react-router';
import axios from 'axios';
import toast from 'react-hot-toast';
import useAuth from '../../hooks/useAuth';
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';
import DatePicker from 'react-datepicker';


const BeAVolunteer = () => {
     const [startDate, setStartDate] = useState(new Date());
    
    const{user}=useAuth()


   
    
    

    const postData=useLoaderData()
    console.log(postData);
    const{category,description,location, organizerEmail, organizerName, deadline, thumbnail,title,volunteernumber,  _id  }=postData
    console.log(postData);
    

    const handleBeAVolunteer=async(e)=>{
        e.preventDefault()
        const form=e.target;
        const formData=new FormData(form)
        const newVounteerEntries= Object.fromEntries(formData.entries())
        console.log(newVounteerEntries);

         try {
        const{data}=await axios.post('http://localhost:8000/volunteers', newVounteerEntries)
                toast.success('Your request has been sent')
        } catch (err) {
        console.log(err);
        
        
    }
        

    }

    return (
           <div className="pb-20">
            <p className="text-2xl text-center my-6">Be A Volunteer</p>


<div className="max-w-xs mx-auto">
        <form onSubmit={handleBeAVolunteer} action="" className="flex justify-center flex-col gap-2">
          
                <label className="">Thumbnail URL</label> 
        <input readOnly  defaultValue={thumbnail} name="thumbnail" type="text" placeholder="Thumbnail URL"  className="border max-w-xs py-1 px-2 rounded-md"/>

                <label  className="">Post Title</label> 
        <input readOnly  defaultValue={title} name="title" type="text" placeholder="Post Title"  className="border max-w-xs py-1 px-2 rounded-md"/>

                <label className="">Description</label> 
          <textarea defaultValue={description} readOnly 
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
        <input readOnly defaultValue={location} name="location" type="text" placeholder="Location"  className="border max-w-xs py-1 px-2 rounded-md"/>

        <label className="">No Of Volunteer Needed</label> 
        <input readOnly defaultValue={volunteernumber} name="volunteernumber" type="number" placeholder="No Of Volunteer Needed"  className="border max-w-xs py-1 px-2 rounded-md"/>

        {/* deadline */}
        <label htmlFor="">Deadline</label>  
        <input readOnly defaultValue={deadline} name="deadline"  type="text" className="border text-white max-w-xs py-1 px-2 rounded-md"/>




         {/* <DatePicker  name="deadline" className="text-blue-400 border p-2 rounded-lg" selected={deadline} /> */}
        




        <label className="">Organizer Name</label> 
        <input readOnly defaultValue={organizerName} name="organizerName" type="text" placeholder="Organizer Name"  className="border max-w-xs py-1 px-2 rounded-md"/>

        <label className="">Organizer Email</label> 
        <input readOnly defaultValue={organizerEmail} name="organizerEmail" type="text" placeholder="Organizer Email"  className="border max-w-xs py-1 px-2 rounded-md"/>

        <label className="">Your Name</label> 
        <input required name="Volunteer_Name" type="text" placeholder="Volunteer Name"  className="border max-w-xs py-1 px-2 rounded-md"/>

        <label className="">Your Email</label> 
        <input required name="Volunteer_Email" type="email" placeholder="Volunteer Email"  className="border max-w-xs py-1 px-2 rounded-md"/>



        <button className="btn btn-info mt-4">Request</button>



               

            
        
        </form>
</div>
        
        </div>
    );
};

export default BeAVolunteer;