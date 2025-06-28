import { useLoaderData, useNavigate } from 'react-router';
import axios from 'axios';
import toast from 'react-hot-toast';
import UseAuth from '../../hooks/UseAuth';
import "react-datepicker/dist/react-datepicker.css";
import { useEffect} from 'react';


const BeAVolunteer = () => {
     const navigate=useNavigate()
    
    const{user}=UseAuth()


   
    
    

    const postData=useLoaderData()
    const{category,description,location, organizerEmail, organizerName, deadline, thumbnail,title,volunteernumber,  _id  }=postData

      useEffect(()=>{
          document.title='serveTogether | Be A Volunteer'
        }, [])
    

    const handleBeAVolunteer=async(e)=>{
        e.preventDefault()
        const form=e.target;
        const formData=new FormData(form)
        const newVounteerEntries= Object.fromEntries(formData.entries())
        newVounteerEntries.postId= _id
        if(volunteernumber<1){
                toast.error('All positions have been filled. Please check other opportunities!')
                return
        }

         try {
        await axios.post('https://servetogether-server.vercel.app/volunteers', newVounteerEntries)
                navigate('/my-posts')
                toast.success('Your request has been sent')
        } catch (err) {
        toast.error(err)
        }
        

    }

    return (
      
<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-300 to-yellow-200 text-gray-800 py-12 px-4">

        
  <div className="w-full max-w-2xl p-10 rounded-3xl shadow-xl transform transition-all duration-500">
<h2 className="text-3xl font-extrabold text-center mb-10 text-purple-700">
         Request Form
        </h2>
        
    <form onSubmit={handleBeAVolunteer} className="space-y-7">


      {/* Post Title */}
      <div>
        <label htmlFor="title" className="block mb-2 font-semibold text-gray-600 text-lg">Post Title</label>
        <input readOnly defaultValue={title} required name="title" type="text" id="title"
          className="input bg-gradient-to-br from-cyan-100 to-yellow-50 text-gray-600 w-full px-5 py-3 rounded-lg focus:ring-2 focus:ring-purple-500 transition-colors"
        />
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" className="block mb-2 font-semibold text-gray-600 text-lg">Description</label>
        <textarea defaultValue={description} required readOnly name="description" id="description" rows="6"
          className="textarea bg-gradient-to-br from-cyan-100 to-yellow-50 text-gray-600 w-full px-5 py-3 rounded-lg focus:ring-2 focus:ring-purple-500 transition-colors"
        ></textarea>
      </div>

      {/* Category */}
      <div>
        <label htmlFor="category" className="block mb-2 font-semibold text-gray-600 text-lg">Category</label>
        <select defaultValue={category} name="category" id="category"
          className="select bg-gradient-to-br from-cyan-100 to-yellow-50 text-transparent bg-clip-text w-full px-5  rounded-lg focus:ring-2 focus:ring-purple-500 transition-colors"
        >
          <option value={category}>{category}</option>
        </select>
      </div>

      {/* Location */}
      <div>
        <label htmlFor="location" className="block mb-2 font-semibold text-gray-600 text-lg">Location</label>
        <input readOnly defaultValue={location} required name="location" type="text" id="location"
          className="input bg-gradient-to-br from-cyan-100 to-yellow-50 text-gray-600 w-full px-5 py-3 rounded-lg focus:ring-2 focus:ring-purple-500 transition-colors"
        />
      </div>

      {/* Volunteers Needed */}
      <div>
        <label htmlFor="volunteernumber" className="block mb-2 font-semibold text-gray-600 text-lg">Volunteers Needed</label>
        <input readOnly defaultValue={volunteernumber} required name="volunteernumber" type="number" id="volunteernumber" min="1"
          className="input bg-gradient-to-br from-cyan-100 to-yellow-50 text-gray-600 w-full px-5 py-3 rounded-lg focus:ring-2 focus:ring-purple-500 transition-colors"
        />
      </div>

      {/* Deadline */}
      <div>
        <label htmlFor="deadline" className="block mb-2 font-semibold text-gray-600 text-lg">Application Deadline</label>
        <input readOnly defaultValue={deadline} name="deadline" type="text" id="deadline"
          className="input bg-gradient-to-br from-cyan-100 to-yellow-50 text-gray-600 w-full px-5 py-3 rounded-lg focus:ring-2 focus:ring-purple-500 transition-colors"
        />
      </div>

      {/* Organizer Info */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="organizerName" className="block mb-2 font-semibold text-gray-600 text-lg">Organizer Name</label>
          <input readOnly required name="organizerName" type="text" id="organizerName" defaultValue={organizerName}
            className="input bg-gradient-to-br from-cyan-100 to-yellow-50 text-gray-600 w-full px-5 py-3 rounded-lg focus:ring-2 focus:ring-purple-500 transition-colors"
          />
        </div>
        <div>
          <label htmlFor="organizerEmail" className="block mb-2 font-semibold text-gray-600 text-lg">Organizer Email</label>
          <input readOnly required name="organizerEmail" type="text" id="organizerEmail" defaultValue={organizerEmail}
            className="input bg-gradient-to-br from-cyan-100 to-yellow-50 text-gray-600 w-full px-5 py-3 rounded-lg focus:ring-2 focus:ring-purple-500 transition-colors"
          />
        </div>
      </div>

      {/* User Info */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="volunteerName" className="block mb-2 font-semibold text-gray-600 text-lg">Your Name</label>
          <input readOnly required name="Volunteer_Name" defaultValue={user.displayName} type="text" id="volunteerName"
            className="input bg-gradient-to-br from-cyan-100 to-yellow-50 text-gray-600 w-full px-5 py-3 rounded-lg focus:ring-2 focus:ring-purple-500 transition-colors"
          />
        </div>
        <div>
          <label htmlFor="volunteerEmail" className="block mb-2 font-semibold text-gray-600 text-lg">Your Email</label>
          <input readOnly required name="Volunteer_Email" type="email" defaultValue={user?.email} id="volunteerEmail"
            className="input bg-gradient-to-br from-cyan-100 to-yellow-50 text-gray-600 w-full px-5 py-3 rounded-lg focus:ring-2 focus:ring-purple-500 transition-colors"
          />
        </div>
      </div>

      {/* Suggestion */}
      <div>
        <label htmlFor="suggestion" className="block mb-2 font-semibold text-gray-600 text-lg">Your Suggestion</label>
        <textarea name="suggestion" id="suggestion" rows="4"
          placeholder="If you have any suggestions, please let us know."
          className="textarea bg-gradient-to-br from-cyan-100 to-yellow-50 text-gray-600 w-full px-5 py-3 rounded-lg focus:ring-2 focus:ring-purple-500 transition-colors"
        ></textarea>
      </div>

      {/* Hidden Thumbnail Field */}
      <input type="hidden" name="thumbnail" value={thumbnail} />

      {/* Submit Button */}
      <button type="submit"
        className="btn w-full bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-bold py-3 rounded-lg text-xl hover:from-purple-700 hover:to-indigo-700 shadow-lg transition-all"
      >
        Request To Be A Volunteer
      </button>
    </form>
  </div>
</div>



    );
};

export default BeAVolunteer;