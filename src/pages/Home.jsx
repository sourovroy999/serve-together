import { useState } from "react";
import AllPosts from "../components/allcards/AllPosts";
import Banner from "../components/banner/Banner";
import VolunteerNow from "../components/home/VolunteerNow";
import DatePicker from "react-datepicker";

const Home = () => {
              const [startDate, setStartDate] = useState(new Date());

    return (
        <div>
            

            {/* banner section */}

           <Banner/>

             <DatePicker className="text-blue-400 border p-2 rounded-lg" selected={startDate} onChange={(date)=> setStartDate(date)}/>

        
        <VolunteerNow/>

            {/* Volunteer needs now section */}


                <AllPosts/>
                


            {/* 2 extra sections */}

        </div>
    );
};

export default Home;