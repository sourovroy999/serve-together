import Banner from "../components/banner/Banner";
import VolunteerNow from "../components/home/VolunteerNow";
import "react-datepicker/dist/react-datepicker.css";

import CountSystem from "../components/home/CountSystem";
import { useEffect } from "react";
import { Fade } from "react-awesome-reveal";

const Home = () => {

      useEffect(()=>{
          document.title='serveTogether | Home'
        }, [])

    return (
        <div className="">


            

            {/* banner section */}

           <Banner/>


            {/* Volunteer needs now section */}
            <div className="px-4 mx-w-4xl">
 
                <VolunteerNow/>
            </div>
            <Fade delay={300} triggerOnce>
        <div className="max-w-6xl mx-auto">

           <CountSystem/>
        </div>
            </Fade>

            {/* 2 extra sections */}

        </div>
    );
};

export default Home;