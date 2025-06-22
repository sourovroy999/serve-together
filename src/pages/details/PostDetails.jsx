import { Link, useLoaderData } from "react-router";

const PostDetails = () => {

    const postData=useLoaderData()
    console.log(postData);
    const{category,description,location, organizerEmail, organizerName, thumbnail,title,volunteernumber,  _id  }=postData

    
    
    return (
        <div className="mt-16">
            <div className="card mx-auto border rounded-md max-w-3xl py-8">
                <div className="text-center">
                thumbnail:{thumbnail} <br />
                title:{title} <br />
                category: {category} <br />
                location:{location} <br />
                description:{description} <br />
                No. of volunteer needed: {volunteernumber} <br />
                organizerName:{organizerName} <br />
                organizerEmail:{organizerEmail}
                </div>

                <Link to={`/be-a-volunteer/${_id}`} className="btn my-4 mx-auto max-w-xs">Be a Volunteer</Link>






            </div>
             
            
        </div>
    );
};

export default PostDetails;