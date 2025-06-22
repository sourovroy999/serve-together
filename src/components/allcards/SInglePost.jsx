import React from 'react';
import { Link } from 'react-router';

const SInglePost = ({post}) => {
    console.log(post);
    const{category,description,location, organizerEmail, organizerName, thumbnail,title,volunteernumber,  _id  }=post


    
    return (
        <Link to={`/details/${_id}`}  className='card hover:scale-105  mx-auto p-6 border-0 bg-base-300 rounded-xl w-xs max-w-md'>
            {/* <Link to={'/my-posts'}> */}
            <p className='text-xl '><span className='font-bold'>title</span>: {title}</p>
            <p><span className='font-bold'>Category:</span> {category}</p>
            <p><span className='font-bold'>Description</span>: {description}</p>
            <p><span className='font-bold'>Organier Name:</span> {organizerName}</p>
            <p><span className='font-bold'>Organier Email:</span>  {organizerEmail}</p>

            
            {/* </Link> */}
        </Link>
    );
};

export default SInglePost;