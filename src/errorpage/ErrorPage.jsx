import React from 'react';
import errorPageImg from '../assets/ErrorPage/errorPageEarth.png'
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='flex  flex-col justify-center items-center min-h-screen bg-black '>
            <img className='max-w-[300px]' src={errorPageImg} alt="" />

            <p className='font-bold mb-3 '>Page Not Found</p>

            <Link to={'/'} className="btn bg-green-500">Go Home</Link>
        </div>
    );
};

export default ErrorPage;