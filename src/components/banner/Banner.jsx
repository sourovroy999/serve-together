import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../style.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


import bannerOne from '../../assets/banners/volunteer-one.jpg'
import bannerTwo from '../../assets/banners/volunteer-two.jpg'
import bannerThree from '../../assets/banners/bannerImageThree.jpg'
import { Fade } from 'react-awesome-reveal';
// import bannerFour from '../../assets/banners/volunteer-four.jpg'

const Banner = () => {


    return (
        <div className='max-w-7xl mx-auto'>
            <Swiper
            spaceBetween={30}
           centeredSlides={true}
            autoplay={{
            
          delay: 900000000,
          disableOnInteraction: true,
        }}
          navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
            >
                 <SwiperSlide>
                  
                  <img src={bannerOne} alt="" />
                  <div className='absolute inset-0 bg-[#00000097]'></div>
                  <div className="absolute inset-0 flex items-center mx-2 md:ml-32  ">

                  <div className='pl-5 md:pl-0'>
                    <Fade delay={100} damping={0.2} cascade>
                  <p className='text-5xl md:text-7xl text-white font-bold mb-6'>Join The <br /> Movement</p>
                  
          <p className="text-white text-xl md:text-2xl lg:text-3xl font-bold max-w-xl">Don’t wait for change—be the change. Step up, take action, and lead the way towards a better tomorrow

            </p>
         </Fade>
                  </div>
        
                  </div>


                 </SwiperSlide>
                 <SwiperSlide>
                  <img src={bannerTwo} alt="" />
                  <div className='absolute inset-0 bg-[#00000097]'></div>
                  <div className="absolute inset-0 flex items-center mx-2 md:ml-32  ">

                  <div className='pl-5 md:pl-0'>
                <Fade delay={100} cascade damping={0.2}>
                  <p className='text-5xl lg:text-6xl font-bold text-white mb-6'>Need  Volunteers? <br /> Post Your Opportunity</p>

          <p className="text-white text-xl md:text-xl lg:text-3xl font-bold max-w-xl">Don’t wait for change—be the change. Step up, take action, and lead the way towards a better tomorrow

</p>
              </Fade>
                  </div>
                  </div>
                 
                 </SwiperSlide>

                 <SwiperSlide>
                  <img src={bannerThree} alt="" />
                    <div className='absolute inset-0 bg-[#00000097]'></div>
                  <div className="absolute inset-0 flex items-center mx-2 md:ml-32  ">

                  <div className='px-5 md:pl-0'>
                    <Fade delay={100} cascade damping={0.2}>
                  <p className='text-5xl md:text-6xl text-white font-bold mb-6'>Turn Compassion <br />  Into Action</p>

          <p className="text-white text-xl md:text-3xl font-bold max-w-xl">Whether it's a local clean-up or a global cause — every small step matters. Start volunteering today.

         </p>
         </Fade>
                  </div>
        
                  </div>
                  </SwiperSlide>


            </Swiper>
            
        </div>
    );
};

export default Banner;