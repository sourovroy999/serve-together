import React from 'react';
import { Link } from 'react-router';
import UseDateFormattery from '../../hooks/UseDateFormattery';
import imageone from '../../assets/banners/volunteer-one.jpg'
import UseAuth from '../../hooks/UseAuth';
import { FaArrowRightLong } from "react-icons/fa6";

const SInglePost = ({post}) => {
    // console.log(post);
    const{category,description,location, organizerEmail, organizerName, thumbnail,title,volunteernumber, deadline,  _id  }=post





    // console.log(typeof(deadline));

    // const formatDeadline=(dateStr)=>{
    //     const [month, day, year]=dateStr.split("/");
    //     const date=new Date(`${year}-${month}-${day}`);

    //     return date.toLocaleDateString("en-GB",{
    //         day: "numeric",
    // month: "long",
    // year: "numeric",
    //     })
    // }
    // const newfr=formatDeadline(deadline)
    // console.log(newfr);

    const newDead=UseDateFormattery(deadline)
    // console.log(newDead);
    
    
    


    
    return (
       

        <Link to={`/details/${_id}`} className="text-base-content rounded-lg shadow-sm transform transition-all duration-300 hover:scale-101">
    
        <img className="rounded-t-lg" src={imageone} alt="" />
    

    <div className="p-5">
        <div className='flex flex-col md:flex-row justify-between'>

        <div className="badge text-white badge-info">{category}</div>
        <div className='text-base-content font-normal dark:text-gray-400'>Deadline:{newDead}</div>
        </div>
        <a href="#">
<h5 className="mb-2 text-2xl font-bold tracking-tight text-base-content">
  {title}
</h5>
        </a>
        <p className="mb-3 text-base-content font-normal  ">{description}</p>


        <p className="mb-3 font-normal text-base-content dark:text-gray-400">Volunteer Needed: {volunteernumber}</p>


        {/* details btn */}
        <Link to={`/details/${_id}`} className="inline-flex items-center text-white  px-3 py-2 text-sm font-medium text-center  bg-blue-400 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Details
             
            <p className='mt-1'>

            <FaArrowRightLong className='ml-2 ' />
            </p>
        </Link>
    </div>
</Link>




    );
};

export default SInglePost;