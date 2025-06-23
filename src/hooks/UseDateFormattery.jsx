import React from 'react';

const UseDateFormattery = (dateStr) => {
     
        const [month, day, year]=dateStr.split("/");
        const date=new Date(`${year}-${month}-${day}`);

        return date.toLocaleDateString("en-GB",{
            day: "numeric",
    month: "long",
    year: "numeric",
        })
  
   
};

export default UseDateFormattery;