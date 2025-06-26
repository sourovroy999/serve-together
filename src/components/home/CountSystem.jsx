import React, { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import CountUp from 'react-countup';
import {useInView} from 'react-intersection-observer'
import UseAuth from '../../hooks/UseAuth';

const CountSystem = () => {

    const {theme}=UseAuth()

    const{ref, inView}= useInView({
        threshold:0.5,
        triggerOnce:false,
    })

    const[key, setKey]=useState(0)

    useEffect(()=>{
        if(inView){
            setKey(prev=>prev+1)
        }
    },[inView])

    const stats = [
    { label: "Volunteers", end: 1200 },
    { label: "Hours Served", end: 54000 },
    { label: "Events Completed", end: 300 },
    { label: "People Helped", end: 15000 },
  ];

    

    return (
       

         <section ref={ref} className={`py-16 mt-20 ${theme === 'light' && 'bg-gray-100'} text-center text-base-content `}>
      <h2 className="text-3xl font-bold mb-10">Our Impact</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-16 md:px-24 lg:px-0 gap-8 max-w-4xl mx-auto">
        {stats.map((stat, i) => (
          <div key={i} className={`${theme === 'light' && 'bg-white'}  p-6 rounded-xl   shadow hover:shadow-lg transition`}>
        <div className={`text-4xl font-extrabold text-blue-600 ${theme !== 'light' && 'text-white'}`}>
              {inView && <CountUp key={key} end={stat.end} duration={2} />}
              +
            </div>
            <p className="mt-2 text-lg font-medium text-gray-700">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
    );
};

export default CountSystem;