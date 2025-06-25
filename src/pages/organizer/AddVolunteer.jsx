import axios from "axios";
import { useState } from "react";
import DatePicker from "react-datepicker";
import toast from "react-hot-toast";
import "react-datepicker/dist/react-datepicker.css";
import { subDays } from "date-fns";
import UseAuth from "../../hooks/UseAuth";
import { useNavigate } from "react-router";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";


const AddVolunteer = () => {
    const axiosSecure=UseAxiosSecure()


    const {user}=UseAuth()
    const navigate=useNavigate()
              const [startDate, setStartDate] = useState(new Date());


    const handleAddVolunteer=async(e)=>{
        e.preventDefault()
        const form=e.target;
        const formData=new FormData(form)

        const newVolunteerEntries=Object.fromEntries(formData.entries())

        console.log(newVolunteerEntries);
        
        try {
            const {data}=await axiosSecure.post('http://localhost:8000/organizations', newVolunteerEntries)
            navigate('/my-posts')
            toast.success('Your Organizer data added successfully')
        } catch (err) {
            console.log(err);
          
        }


    }

    return (
        <div className="pb-20">
            <p className="text-2xl text-center my-6">Add Organization Details for volunteers</p>


<div className="max-w-xs mx-auto">
        <form onSubmit={handleAddVolunteer} action="" className="flex justify-center flex-col gap-2">
          
                <label className="">Thumbnail URL</label> 
        <input name="thumbnail" type="text" placeholder="Thumbnail URL"  className="border text-black  max-w-xs py-1 px-2 rounded-md"/>

                <label className="">Post Title</label> 
        <input name="title" type="text" placeholder="Post Title"  className="border text-black max-w-xs py-1 px-2 rounded-md"/>

                <label className="">Description</label> 
          <textarea 
              className='block w-full px-4 py-2 mt-2 
               border border-gray-200 text-black rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              name='description'
              id='description'
              cols='30'
            ></textarea>



                <label className="">Category</label> 

        <select name="category" id="" className="border text-black py-1 rounded-md bg-white">
            <option value="Healthcare">Healthcare</option>
            <option value="Education">Education</option>
            <option value="Social Service">Social Service</option>
            <option value="Animal Welfare">Animal Welfare</option>
        </select>

        <label className="">Location</label> 
        <input name="location" type="text" placeholder="Location"  className="border text-black max-w-xs py-1 px-2 rounded-md"/>

        <label className="">No Of Volunteer Needed</label> 
        <input name="volunteernumber" type="number" placeholder="No Of Volunteer Needed"  className="border text-black max-w-xs py-1 px-2 rounded-md"/>

        {/* deadline */}
        <label className="">Deadline</label> 

        
                     <DatePicker name="deadline" className="text-blue-400 border p-2 rounded-lg" 
                     selected={startDate} 
                     minDate={subDays(new Date(), 0)}
                     onChange={(date)=> setStartDate(date)}/>
        
                
        
        <div>
          
        </div>
        


        <label className="">Organizer Name</label> 
        <input readOnly name="organizerName" type="text" defaultValue={user?.displayName}  className="border text-black max-w-xs py-1 px-2 rounded-md"/>

        <label className="">Organizer Email</label> 
        <input readOnly name="organizerEmail" type="text" defaultValue={user?.email}  className="border text-black max-w-xs py-1 px-2 rounded-md"/>

        <button className="btn btn-info mt-4">Post</button>



               

            
        
        </form>
</div>
        
        </div>
    );
};

export default AddVolunteer;