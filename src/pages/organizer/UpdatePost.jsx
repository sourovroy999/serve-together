import { useLoaderData, useNavigate } from 'react-router';
import toast from 'react-hot-toast';
import UseAuth from '../../hooks/UseAuth';
import UseAxiosSecure from '../../hooks/UseAxiosSecure';
import { useEffect, useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import { subDays } from 'date-fns';
import DatePicker from 'react-datepicker';


const UpdatePost = () => {
      const [startDate, setStartDate] = useState(new Date());


    const{user, logOut}=UseAuth()  //eta use korte hbe **
    const axiosSecure=UseAxiosSecure()

      useEffect(()=>{
          document.title='serveTogether | Update Your Post'
        }, [])

        const navigate=useNavigate()
  

    const postData=useLoaderData()
    const{category,description,location, organizerEmail, organizerName, thumbnail,title,volunteernumber,  _id  }=postData
    

    const handleUpdatePost=async(e)=>{
        
        e.preventDefault()
        const form=e.target;
        const email=e.target.organizerEmail.value;
        
        const formData=new FormData(form)
        const updatedVounteerEntries= Object.fromEntries(formData.entries())

        if(user.email !==email){
                toast.error('Actions Not Permitted')
                logOut()

                return 
                
                
            }    

         try {
            

       await axiosSecure.put(`/update-post/${_id}`, updatedVounteerEntries)
                toast.success('Updated successfully')
                navigate('/my-posts')

        } catch (err) {
        toast.error(err)
        
        
    }
        

    }

    

    return (
//            <div className="pb-20">
//             <p className="text-2xl text-center my-6">Update your Post</p>


// <div className="max-w-xs mx-auto">

//         <form onSubmit={handleUpdatePost} className="flex text-base-content justify-center flex-col gap-2">
          
//                 <label className="">Thumbnail URL</label> 
//         <input   defaultValue={thumbnail} name="thumbnail" type="text" placeholder="Thumbnail URL"  className="border   max-w-xs py-1 px-2 rounded-md"/>

//                 <label  className="">Post Title</label> 
//         <input   defaultValue={title} name="title" type="text" placeholder="Post Title"  className="border   max-w-xs py-1 px-2 rounded-md"/>

//                 <label className="">Description</label> 
//           <textarea defaultValue={description}  
//               className='block w-full px-4 py-2 mt-2 
//                border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
//               name='description'
//               id='description'
//               cols='30'
//             ></textarea>



//                 <label className="">Category</label> 

//         <select  defaultValue={category}  name="category" id="" className="border py-1 rounded-md ">
//             <option  value="Healthcare">Healthcare</option>
//             <option value="Education">Education</option>
//             <option value="Social Service">Social Service</option>
//             <option value="Animal Welfare">Animal Welfare</option>
//         </select>

//         <label className="">Location</label> 
//         <input  defaultValue={location} name="location" type="text" placeholder="Location"  className="border   max-w-xs py-1 px-2 rounded-md"/>

//         <label className="">No Of Volunteer Needed</label> 
//         <input  defaultValue={volunteernumber} name="volunteernumber" type="number" placeholder="No Of Volunteer Needed"  className="border   max-w-xs py-1 px-2 rounded-md"/>

//         {/* deadline */}
//         <label htmlFor="">Deadline</label>


//         {/* need to change later with user name */}
//         <label className="">Organizer Name</label> 
//         <input readOnly defaultValue={organizerName} name="organizerName" type="text" placeholder="Organizer Name"  className="border   max-w-xs py-1 px-2 rounded-md"/>

//         {/* need to change later with user email */}

//         <label  className="">Organizer Email</label> 
//         <input readOnly defaultValue={organizerEmail} name="organizerEmail" type="text" placeholder="Organizer Email"  className="border   max-w-xs py-1 px-2 rounded-md"/>
//        <button className="btn text-white btn-info mt-4">Update</button>
      
//         </form>
// </div>
        
//         </div>

<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 text-gray-800 py-12 px-4">
      <div className="w-full max-w-2xl p-10 bg- rounded-3xl shadow-xl transform transition-all duration-500 ">
        <h2 className="text-4xl font-extrabold text-center mb-10 text-purple-700">
          Update This Post
        </h2>

        <form onSubmit={handleUpdatePost} className="space-y-7">
          {/* Thumbnail URL */}
          <div>
            <label htmlFor="thumbnail" className="block mb-2 font-semibold text-gray-700 text-lg">
              Thumbnail URL
            </label>
            <input defaultValue={thumbnail}
              required
              name="thumbnail"
              type="text"
              id="thumbnail"
              placeholder="A captivating image for your post"
              className="input bg-white input-bordered w-full px-5 py-3 rounded-lg focus:ring-2 focus:ring-purple-500 transition-colors"
            />
          </div>

          {/* Post Title */}
          <div>
            <label htmlFor="title" className="block mb-2 font-semibold text-gray-700 text-lg">
              Post Title
            </label>
            <input 
            defaultValue={title}
              required
              name="title"
              type="text"
              id="title"
              placeholder="Give your post a clear and inviting title"
              className="input bg-white  input-bordered w-full px-5 py-3 rounded-lg focus:ring-2 focus:ring-purple-500 transition-colors"
            />
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block  mb-2 font-semibold text-gray-700 text-lg">
              Description
            </label>
            <textarea 
            defaultValue={description}
              required
              className="textarea bg-white  textarea-bordered w-full px-5 py-3 rounded-lg focus:ring-2 focus:ring-purple-500 transition-colors"
              name="description"
              id="description"
              rows="6"
              placeholder="Provide a compelling description of the volunteer work, its impact, and what's expected."
            ></textarea>
          </div>

          {/* Category - Default value set to Education */}
          <div>
            <label htmlFor="category" className="block mb-2 font-semibold text-gray-700 text-lg">
              Category
            </label>
            <select
            defaultValue={category}
              name="category"
              id="category"
              
              className="select select-bordered w-full px-5 bg-white rounded-lg focus:ring-2 focus:ring-purple-500 transition-colors"
            >
              <option value="Healthcare">Healthcare</option>
              <option value="Education">Education</option>
              <option value="Social Service">Social Service</option>
              <option value="Animal Welfare">Animal Welfare</option>
              <option value="Environmental">Environmental</option>
              <option value="Community Development">Community Development</option>
              <option value="Arts & Culture">Arts & Culture</option>
              <option value="Emergency Response">Emergency Response</option>
            </select>
          </div>

          {/* Location */}
          <div>
            <label htmlFor="location" className="block mb-2 font-semibold text-gray-700 text-lg">
              Location
            </label>
            <input
            defaultValue={location}
              required
              name="location"
              type="text"
              id="location"
              placeholder="Where will the volunteering take place?"
              className="input bg-white input-bordered w-full px-5 py-3 rounded-lg focus:ring-2 focus:ring-purple-500 transition-colors"
            />
          </div>

          {/* Number of Volunteers Needed */}
          <div>
            <label htmlFor="volunteernumber" className="block mb-2 font-semibold text-gray-700 text-lg">
              Volunteers Needed
            </label>
            <input
            defaultValue={volunteernumber}
              required
              name="volunteernumber"
              type="number"
              id="volunteernumber"
              min="1" // Ensure at least 1 volunteer
              placeholder="How many volunteers are you looking for?"
              className="input bg-white input-bordered w-full px-5 py-3 rounded-lg focus:ring-2 focus:ring-purple-500 transition-colors"
            />
          </div>

          {/* Deadline - Using native HTML date input */}
          <div>
            <label htmlFor="deadline" className="block mb-2 font-semibold text-gray-700 text-lg">
              Application Deadline
            </label>
                   <DatePicker name="deadline" className="text-black border p-2 rounded-lg" 
                     selected={startDate} 
                     minDate={subDays(new Date(), 0)}
                     onChange={(date)=> setStartDate(date)}/>
          </div>

          {/* Organizer Info - Read-only fields */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="organizerName" className="block mb-2 font-semibold text-gray-700 text-lg">
                Organizer Name
              </label>
              <input
                required
                readOnly
                name="organizerName"
                type="text"
                id="organizerName"
                defaultValue={organizerName}
                className="input bg-white input-bordered w-full cursor-not-allowed px-5 py-3 rounded-lg"
              />
            </div>
            <div>
              <label htmlFor="organizerEmail" className="block mb-2 font-semibold text-gray-700 text-lg">
                Organizer Email
              </label>
              <input
                required
                readOnly
                name="organizerEmail"
                type="text"
                id="organizerEmail"
                defaultValue={organizerEmail}
                className="input bg-white input-bordered w-full  cursor-not-allowed px-5 py-3 rounded-lg"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 rounded-lg text-xl hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
          >
            Update
          </button>
        </form>
      </div>
    </div>
    );
};

export default UpdatePost;