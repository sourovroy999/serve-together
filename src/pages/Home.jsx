import AllPosts from "../components/allcards/AllPosts";
import Banner from "../components/banner/Banner";
import VolunteerNow from "../components/home/VolunteerNow";
import "react-datepicker/dist/react-datepicker.css";

import imageone from '../assets/banners/volunteer-one.jpg'
import CountSystem from "../components/home/CountSystem";
import { useEffect } from "react";

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
           <CountSystem/>


            {/* count section */}






                




                {/* <AllPosts/> */}
                


            {/* 2 extra sections */}

        </div>
    );
};

export default Home;