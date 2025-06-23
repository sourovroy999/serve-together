import React from 'react';
import { Link } from 'react-router';
import UseDateFormattery from '../../hooks/UseDateFormattery';
import imageone from '../../assets/banners/volunteer-one.jpg'

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
       

        <div class=" bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg" src={imageone} alt="" />
    </a>

    <div class="p-5">
        <div className='flex flex-col md:flex-row justify-between'>

        <div className="badge badge-info">{category}</div>
        <div className=' font-normal text-gray-700 dark:text-gray-400'>Deadline:{newDead}</div>
        </div>
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Volunteer Needed: {volunteernumber}</p>


        {/* details btn */}
        <Link to={`/details/${_id}`} href="#" className="inline-flex items-center  px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Details
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </Link>
    </div>
</div>


    );
};

export default SInglePost;