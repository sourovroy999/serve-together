import { Link } from 'react-router';
import UseAuth from '../hooks/UseAuth';
import { useEffect } from 'react';


const Navbar = () => {
   const {logOut,loading, theme, setTheme, user}=UseAuth()
  const handleLogOut=()=>{
      return logOut()
      

  }

  useEffect(()=>{
    localStorage.setItem('theme', theme)
    const localtheme=localStorage.getItem('theme')

    
    document.querySelector('html').setAttribute('data-theme', localtheme)
  },[theme])
  
  
  

  const handleToggle=(e)=>{
    console.log('toggled');
    
    if(e.target.checked){

      setTheme('night')
    }
    else{
      setTheme('light')
    }

  }

  // if(loading){
  //   <p>loading....</p>
  // }

    return (
        <div className="navbar  md:px-20 flex text-base-content justify-between bg-base-200 shadow-sm ">
  <div className="">
    <Link to={'/'} className="font-semibold text-xl">ServeTogether</Link>
  </div>

<div className=''>
  <Link to={'/all-posts'} className='font-serif border-0  rounded py-1 px-2 hover:cursor hover:underline hover:text-blue-400'>All Posts</Link>
  
</div>


<div className='flex gap-4 items-center'>

<label className="toggle text-base-content">

                    <input 
                    onChange={handleToggle}
                    type="checkbox"  className="theme-controller"
                    checked={theme === 'night'}
                    />

                    <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>

                    <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>

                </label>


 
    {/* <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" /> */}


{
  user && <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
          referrerPolicy='no-referrer'
            alt={user?.displayName}
            src={user?.photoURL} />  
            {/* user ternary for check user , unless the page breaks */}
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-6 shadow">
        
        <li><Link to={'/add-volunteer-needed-post'}>Add Volunteer need Post
</Link></li>
        <li className='my-2'><Link to={'/my-posts'}>Manage My Posts </Link></li>
        
        <li className='btn mt-3' onClick={handleLogOut}>Log Out</li>
      </ul>
    </div>
    }

   

  {  !user && <div  className="flex gap-2">
    <div className={`flex flex-col md:flex-row `}>

    <Link to={'/login'}  className='btn btn-sm '>Login</Link>

    <Link to={'/register'} className='btn btn-sm'>Register</Link>
     </div>

    
  </div>
}
</div>
     


  </div>




    );
};

export default Navbar;