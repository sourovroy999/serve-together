import { Link, useLoaderData } from "react-router";
import UseDateFormattery from "../../hooks/UseDateFormattery";
import imageone from '../../assets/banners/volunteer-one.jpg'

const PostDetails = () => {

    const postData=useLoaderData()
    console.log(postData);
    const{category,description,location, organizerEmail, organizerName,deadline, thumbnail,title,volunteernumber,  _id  }=postData

    const newDeadline=UseDateFormattery(deadline)

    
    
    return (
        // <div className="mt-16">
        //     <div className="card mx-auto border rounded-md max-w-3xl py-8">
        //         <div className="text-center">
        //         thumbnail:{thumbnail} <br />
        //         title:{title} <br />
        //         category: {category} <br />
        //         location:{location} <br />
        //         description:{description} <br />
        //         Deadline:{newDeadline} <br />
        //         No. of volunteer needed: {volunteernumber} <br />
        //         organizerName:{organizerName} <br />
        //         organizerEmail:{organizerEmail}
        //         </div>

        //         <Link to={`/be-a-volunteer/${_id}`} className="btn my-4 mx-auto max-w-xs">Be a Volunteer</Link>






        //     </div>
             
            
        // </div>

           <div class=" md:mt-10 max-w-2xl mx-auto  bg-white border-b border-gray-200 border rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img class="rounded-t-lg" src={imageone} alt="" />
            </a>
        
            <div class="p-5">
                
        
                <div className="badge badge-info">{category}</div>
                {/* <div className=' font-normal text-gray-700 dark:text-gray-400'>Deadline:{newDeadline}</div> */}
              
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                </a>
                <div>
                    {description}
                </div>

                {/* table  */}

<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        {/* <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-3 md:px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-3 md:px-6 py-3">
                    Color
                </th>
                <th scope="col" class="px-3 md:px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-3 md:px-6 py-3">
                    Price
                </th>
            </tr>
        </thead> */}

        <tbody>
            <tr class="bg-white border-b border-gray-200  dark:bg-gray-800 dark:border-gray-700 ">
                <th scope="row" class="px-3 md:px-6 py-4  font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Title
                </th>
                <td class="px-3  md:px-6 py-4">
                    {title}
                </td>
              
            </tr>
              <tr class="bg-white border-b border-gray-200 dark:bg-gray-800  dark:border-gray-700">
                <th scope="row" class="px-3 md:px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   Description
                </th>
                <td class="px-3 md:px-6 py-4">
                    {description}
                </td>
                
            </tr>

              <tr class="bg-white border-b border-gray-200 dark:bg-gray-800  dark:border-gray-700">
                <th scope="row" class="px-3 md:px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   Location
                </th>
                <td class="px-3 md:px-6 py-4">
                    {location}
                </td>
                
            </tr>
            
              <tr class="bg-white border-b border-gray-200 dark:bg-gray-800  dark:border-gray-700">
                <th scope="row" class="px-3 md:px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   volunteer needed: 
                </th>
                <td class="px-3 md:px-6 py-4">
                   {volunteernumber}
                </td>
                
            </tr>


            <tr class="bg-white border-b border-gray-200  dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-3 md:px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Category
                </th>
                <td class="px-3 md:px-6 py-4">
                    {category}
                </td>
                
            </tr>
            <tr class="bg-white border-b border-gray-200 dark:bg-gray-800  dark:border-gray-700">
                <th scope="row" class="px-3 md:px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   Deadline
                </th>
                <td class="px-3 md:px-6 py-4">
                    {newDeadline}
                </td>
                
            </tr>
            <tr class="bg-white border-b border-gray-200 dark:bg-gray-800  dark:border-gray-700">
                <th scope="row" class="px-3 md:px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   Organizer Name
                </th>
                <td class="px-3 md:px-6 py-4">
                    {organizerName}
                </td>
                
            </tr>
            <tr class="bg-white border-b border-gray-200 dark:bg-gray-800  dark:border-gray-700">
                <th scope="row" class="px-3 md:px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   Organizer Email
                </th>
                <td class="px-3 md:px-6 py-4">
                    {organizerEmail}
                </td>
                
            </tr>

            
          

        </tbody>
    </table>
    <div className="flex justify-center mt-3">
             <Link to={`/be-a-volunteer/${_id}`} className="btn btn-wide bg-blue-600  my-4 ">Be a Volunteer</Link>
             </div>
</div>


               
            </div>
        </div>
    );
};

export default PostDetails;