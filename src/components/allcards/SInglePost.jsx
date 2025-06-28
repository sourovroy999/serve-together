import React from 'react';
import { Link } from 'react-router';
import UseDateFormattery from '../../hooks/UseDateFormattery';
import UseAuth from '../../hooks/UseAuth';
import { FaArrowRightLong } from "react-icons/fa6";

const SInglePost = ({post}) => {
    const{category,description, thumbnail,title,volunteernumber, deadline,  _id  }=post






    const newDead=UseDateFormattery(deadline)

    
    
    


    
    return (
       


<div className="flex group flex-col h-full  rounded-lg shadow-sm   transition-all duration-500 ease-in-out  hover:scale-[1.01] hover:shadow-xl hover:-translate-y-1 text-base-content">

  {/* Image */}
  <div className="h-48 w-full  overflow-hidden rounded-t-lg">
    <img className="h-full w-full trans group-hover:scale-105 transition-transform duration-300 ease-in-out object-cover" src={thumbnail} alt="no image" />
  </div>

  {/* Content */}
  <div className="flex flex-col flex-grow p-5">

    {/* Top Row */}
    <div className="flex justify-between mb-2">
      <div className="badge text-white badge-info">{category}</div>
      
    </div>
    <div className="text-sm mb-2 dark:text-gray-400">Deadline: {newDead}</div>

    {/* Title */}
    <h5 className="text-xl font-bold mb-2">{title}</h5>

    {/* Description */}
    <p className="text-sm text-base-content mb-3 line-clamp-3">{description}</p>

    {/* Volunteer Number */}
    <p className="text-sm text-base-content dark:text-gray-400 mb-4">Volunteer Needed: {volunteernumber}</p>

    {/* Spacer pushes button to bottom */}
    <div className="mt-auto">
      <Link
        to={`/details/${_id}`}
        className="inline-flex  w-full items-center text-white  py-2 text-sm font-medium bg-blue-400 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  "
      >
        <div className='mx-auto'>
            details
        </div>

        
        {/* <FaArrowRightLong className="ml-2" /> */}
      </Link>
    </div>
  </div>
</div>





    );
};

export default SInglePost;