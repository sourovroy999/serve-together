import { Link, useLoaderData } from "react-router";
import UseDateFormattery from "../../hooks/UseDateFormattery";

const PostDetails = () => {

    const postData=useLoaderData()
    const{category,description,location, organizerEmail, organizerName,deadline, thumbnail,title,volunteernumber,  _id  }=postData

    const newDeadline=UseDateFormattery(deadline)

    
    
    return (
        

           <div className="px-3 md:my-10 max-w-2xl mx-auto    rounded-lg shadow-sm  ">
            <div className="h-[300px] md:h-[380px] w-full overflow-hidden rounded-t-lg">


                <img className="h-full w-full object-cover"  src={thumbnail} alt="" />
            </div>
        
            <div className="p-5">
                
        
                <div className="badge text-white badge-info">{category}</div>
                
              
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-base-content ">{title}</h5>
                </a>
                <div>
                    {description}
                </div>

                {/* table  */}

<div className="relative text-base-content overflow-x-auto">
    <table className="w-full text-sm text-left rtl:text-right ">
       
        <tbody className="text-base-content">
            <tr className=" border-b border-b-base-300  ">
                <th scope="row" className="px-3 md:px-6 py-4  font-medium  whitespace-nowrap ">
                    Title
                </th>
                <td className="px-3  md:px-6 py-4">
                    {title}
                </td>
              
            </tr>
              <tr className=" border-b border-b-base-300   ">
                <th scope="row" className="px-3 md:px-6 py-4 font-medium text-base-content whitespace-nowrap ">
                   Description
                </th>
                <td className="px-3 text-base-content md:px-6 py-4">
                    {description}
                </td>
                
            </tr>

              <tr className=" border-b border-base-300   ">
                <th scope="row" className="px-3 md:px-6 py-4 font-medium text-base-content whitespace-nowrap ">
                   Location
                </th>
                <td className="px-3 md:px-6 py-4">
                    {location}
                </td>
                
            </tr>
            
              <tr className=" border-b border-b-base-300  ">
                <th scope="row" className="px-3 md:px-6 py-4 font-medium text-base-content whitespace-nowrap ">
                   volunteer needed: 
                </th>
                <td className="px-3 md:px-6 py-4">
                   {volunteernumber}
                </td>
                
            </tr>


            <tr className=" border-b border-b-base-300  ">
                <th scope="row" className="px-3 md:px-6 py-4 font-medium text-base-content whitespace-nowrap ">
                    Category
                </th>
                <td className="px-3 md:px-6 py-4">
                    {category}
                </td>
                
            </tr>
            <tr className=" border-b border-b-base-300  ">
                <th scope="row" className="px-3 md:px-6 py-4 font-medium text-base-content whitespace-nowrap ">
                   Deadline
                </th>
                <td className="px-3 md:px-6 py-4">
                    {newDeadline}
                </td>
                
            </tr>
            <tr className=" border-b border-b-base-300  ">
                <th scope="row" className="px-3 md:px-6 py-4 font-medium text-base-content whitespace-nowrap ">
                   Organizer Name
                </th>
                <td className="px-3 md:px-6 py-4">
                    {organizerName}
                </td>
                
            </tr>
            <tr className=" border-b border-b-base-300  ">
                <th scope="row" className="px-3 md:px-6 py-4 font-medium text-base-content whitespace-nowrap ">
                   Organizer Email
                </th>
                <td className="px-3 md:px-6 py-4">
                    {organizerEmail}
                </td>
                
            </tr>

            
          

        </tbody>
    </table>
    <div className="flex justify-center  mt-3">
             <Link to={`/be-a-volunteer/${_id}`} className="btn btn-wide bg-blue-600 text-white my-4 ">Be a Volunteer</Link>
             </div>
</div>


               
            </div>
        </div>
    );
};

export default PostDetails;