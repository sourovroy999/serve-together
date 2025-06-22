import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


import bannerOne from '../../assets/banners/volunteer-one.jpg'
import bannerTwo from '../../assets/banners/volunteer-two.jpg'
import bannerThree from '../../assets/banners/volunteer-three.jpg'
import bannerFour from '../../assets/banners/volunteer-four.jpg'

const Banner = () => {


    return (
        <div >
            <Swiper
            spaceBetween={30}
           centeredSlides={true}
            autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
          navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
            >
                 <SwiperSlide>{bannerOne}</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>

            </Swiper>
            
        </div>
    );
};

export default Banner;