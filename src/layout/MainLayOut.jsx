import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const MainLayOut = () => {
    return (
        <div className='max-w-7xl mx-auto '>
            <Navbar/>
            <div className='mx-auto'>

            <Outlet/>
              </div>
              <Footer/>
        </div>
    );
};

export default MainLayOut;