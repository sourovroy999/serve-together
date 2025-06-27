import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitch, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
       <>

       


       <footer className=" bg-blue-950  text-white md:p-10">
        <div className='flex flex-col '>

            {/* top */}
            <div className='flex flex-col md:flex-row md:px-10 py-7  justify-between  px-6 md:items-center '>
                <p className=' font-bold text-3xl md:text-4xl'>ServeTogether</p>
                <p className='md:text-xl font-bold'>Kindness starts with you – give today!</p>
            </div>
            
            <hr />

            {/* bottom */}

            <div className='flex flex-col md:flex-row gap-5 justify-between  px-10 pt-7 pb-5'>
                
                {/* onee */}
                <div>
                    <h1 className='text-2xl font-bold mb-3'>Quick Links</h1>
                    
                    <ul style={{listStyle:'disc'}} className=' pl-10 space-y-1'>
                        <li>About Us</li>
                        <li>Get Involved</li>
                        <li>Colunteer</li>
                        <li>Donate</li>
                        <li>Contact</li>
                    </ul>
                </div>

                {/* two */}
                <div>
                    <div>
                    <h1 className='text-2xl font-bold mb-3'>Stay Connected</h1>
                    <ul className='ml-10 space-y-1' style={{listStyleType:'disc'}}>
                        <li>volunteer@serve.org</li>
                        <li>+1(555) 123-4567</li>
                    </ul>
                    </div>

                    <div>
                        <h1 className='font-bold my-5 text-3xl'>Visit Now</h1>

                        <ul style={{listStyleType:'disc'}}>
                            <li className='ml-10'>123 Kindness Street, Hope City, HC 45678</li>
                        </ul>
                    </div>


                </div>
                
                {/* three */}
                <div>
                  <div>
                    <h1 className='text-2xl font-bold mb-3'>Follow US</h1>
                     <div className='flex gap-2'>
                    <FaFacebook />
                    <FaInstagram/>
                    <FaTwitter/>
                    <FaLinkedin/>
                   </div>

                      <div>
                    <input placeholder='input  Enter Your Email To Spread Kindness With us!' type="text" className=' mt-5 bg-white rounded-2xl px-3 py-2  w-full' />
                     </div>
                </div>
               

             

              </div>
                
                
            </div>

            

        </div>
        

{/* 
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Social</h6>
    <div className="grid grid-flow-col gap-4">
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
      </a>
    </div>
  </nav> */}


</footer>
       </>
       
    );
};

export default Footer;