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
       

//         <div className=" text-base-content rounded-lg shadow-sm transform transition-all duration-300 hover: scale-[1.05] hover:shadow-xl">

// {/* image */}
//             <div className=' h-48 w-full overflow-hidden rounded-t-lg'>

    
//         <img className="h-full w-full object-cover" src={thumbnail } alt={'no image'} />

//             </div>
    
// {/* card content */}
//     <div className="p-5 ">

//         {/* category and deadline */}
//         <div className='flex flex-col md:flex-row justify-between mb-2'>

//         <div className="badge text-white badge-info">{category}</div>
       
//         </div>
//          <div className='text-base-content font-normal mt-2  dark:text-gray-400'>Deadline:{newDead}</div>
//         <div>
// <h5 className="my-2 text-xl font-bold tracking-tight text-base-content">
//   {title}
// </h5>
//         </div>
//         <p className="mb-3 text-base-content font-normal text-sm line-clamp-3 ">{description}</p>


//         <p className="mb-4 font-normal text-base-content dark:text-gray-400">Volunteer Needed: {volunteernumber}</p>


//         {/* details btn */}

//         <div className='mt-auto'>
//         <Link to={`/details/${_id}`} className="inline-flex items-center text-white  px-3 py-2 text-sm font-medium text-center  bg-blue-400 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//             Details
             
            

//             <FaArrowRightLong className='ml-2 ' />
            
//         </Link>
//         </div>
//     </div>
// </div>
<div className="flex  flex-col h-full  rounded-lg shadow-sm transition-transform duration-300 hover:scale-[1.01] hover:shadow-xl text-base-content">

  {/* Image */}
  <div className="h-48 w-full overflow-hidden rounded-t-lg">
    <img className="h-full w-full object-cover" src={thumbnail} alt="no image" />
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