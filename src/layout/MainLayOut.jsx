import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';

const MainLayOut = () => {
    return (
        <div className='max-w-6xl mx-auto '>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default MainLayOut;