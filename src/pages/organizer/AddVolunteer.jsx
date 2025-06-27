// import axios from "axios";
// import { useState } from "react";
// import DatePicker from "react-datepicker";
// import toast from "react-hot-toast";
// import "react-datepicker/dist/react-datepicker.css";
// import { subDays } from "date-fns";
// import UseAuth from "../../hooks/UseAuth";
// import { useNavigate } from "react-router";
// import UseAxiosSecure from "../../hooks/UseAxiosSecure";


// const AddVolunteer = () => {
//     const axiosSecure=UseAxiosSecure()


//     const {user}=UseAuth()
//     const navigate=useNavigate()
//               const [startDate, setStartDate] = useState(new Date());


//     const handleAddVolunteer=async(e)=>{
//         e.preventDefault()
//         const form=e.target;
//         const formData=new FormData(form)

//         const newVolunteerEntries=Object.fromEntries(formData.entries())

//         console.log(newVolunteerEntries);
        
//         try {
//             const {data}=await axiosSecure.post('/organizations', newVolunteerEntries)
//             navigate('/my-posts')
//             toast.success('Your Organizer data added successfully')
//         } catch (err) {
//             console.log(err);
          
//         }


//     }

//     return (
//         <div className="pb-20 text-base-content">
//             <p className="text-2xl text-center my-6">Add Organization Details for volunteers</p>


// <div className="max-w-xs mx-auto">
//         <form onSubmit={handleAddVolunteer} action="" className="flex justify-center flex-col gap-2">
          
//                 <label className="">Thumbnail URL</label> 
//         < input required name="thumbnail" type="text" placeholder="Thumbnail URL"  className="border    max-w-xs py-1 px-2 rounded-md"/>

//                 <label className="">Post Title</label> 
//         < input required name="title" type="text" placeholder="Post Title"  className="border   max-w-xs py-1 px-2 rounded-md"/>

//                 <label className="">Description</label> 
//           <textarea required 
//               className='block w-full px-4 py-2 mt-2 
//                border border-gray-200   rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
//               name='description'
//               id='description'
//               cols='30'
//             ></textarea>



//                 <label className="">Category</label> 

//         <select name="category" id="" className="border   py-1 rounded-md ">
//             <option value="Healthcare">Healthcare</option>
//             <option value="Education">Education</option>
//             <option value="Social Service">Social Service</option>
//             <option value="Animal Welfare">Animal Welfare</option>
//         </select>

//         <label className="">Location</label> 
//         < input required name="location" type="text" placeholder="Location"  className="border   max-w-xs py-1 px-2 rounded-md"/>

//         <label className="">No Of Volunteer Needed</label> 
//         < input required name="volunteernumber" type="number" placeholder="No Of Volunteer Needed"  className="border   max-w-xs py-1 px-2 rounded-md"/>

//         {/* deadline */}
//         <label className="">Deadline</label> 

        
//                      <DatePicker name="deadline" className="text-blue-400 border p-2 rounded-lg" 
//                      selected={startDate} 
//                      minDate={subDays(new Date(), 0)}
//                      onChange={(date)=> setStartDate(date)}/>
        
                
        
//         <div>
          
//         </div>
        


//         <label className="">Organizer Name</label> 
//         < input required readOnly name="organizerName" type="text" defaultValue={user?.displayName}  className="border   max-w-xs py-1 px-2 rounded-md"/>

//         <label className="">Organizer Email</label> 
//         < input required readOnly name="organizerEmail" type="text" defaultValue={user?.email}  className="border   max-w-xs py-1 px-2 rounded-md"/>

//         <button className="btn btn-info mt-4">Post</button>



               

            
        
//         </form>
// </div>
        
//         </div>
//     );
// };

// export default AddVolunteer;



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
  const axiosSecure = UseAxiosSecure();
  const { user } = UseAuth();
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());

  const handleAddVolunteer = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newVolunteerEntries = Object.fromEntries(formData.entries());

    const title=e.target.title.value
    console.log(title);
    

    console.log(newVolunteerEntries);

    try {
      const { data } = await axiosSecure.post('/organizations', newVolunteerEntries);
      navigate('/my-posts');
      toast.success('Your Organizer data added successfully');
    } catch (err) {
      console.log(err);
    }
  };

  return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 text-gray-800 py-12 px-4">
      <div className="w-full max-w-2xl p-10 bg-white rounded-3xl shadow-xl transform transition-all duration-500 ">
        <h2 className="text-4xl font-extrabold text-center mb-10 text-purple-700">
          Share Your Volunteer Opportunity
        </h2>

        <form onSubmit={handleAddVolunteer} className="space-y-7">
          {/* Thumbnail URL */}
          <div>
            <label htmlFor="thumbnail" className="block mb-2 font-semibold text-gray-700 text-lg">
              Thumbnail URL
            </label>
            <input
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
                   <DatePicker name="deadline" className="text-blue-400 border p-2 rounded-lg" 
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
                defaultValue={user?.displayName || "N/A"}
                className="input bg-white input-bordered w-full bg-gray-100 cursor-not-allowed px-5 py-3 rounded-lg"
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
                defaultValue={user?.email || "N/A"}
                className="input bg-white input-bordered w-full bg-gray-100 cursor-not-allowed px-5 py-3 rounded-lg"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 rounded-lg text-xl hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
          >
            Post Opportunity
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddVolunteer;
