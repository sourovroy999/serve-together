import { Link } from 'react-router';
import useAuth from '../hooks/useAuth';


const Navbar = () => {
   const {logOut}=useAuth()
  const handleLogOut=()=>{
      return logOut()
      

  }

    return (
        <div className="navbar flex justify-between bg-base-100 shadow-sm">
  <div className="">
    <Link to={'/'} className="font-semibold text-xl">ServeTogether</Link>
  </div>

<div className=''>
  <Link to={'/all-posts'} className='font-semibold border-0  rounded py-1 px-2 hover:cursor'>All Posts</Link>
  
</div>

  <div className="flex gap-2">
    {/* <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" /> */}
<div className='flex flex-col md:flex-row'>
    <Link to={'/login'}  className='btn btn-sm '>Login</Link>

    <Link to={'/register'} className='btn btn-sm'>Register</Link>
</div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><Link to={'/add-volunteer-needed-post'}>Add Volunteer need Post
</Link></li>
        <li><Link to={'/my-posts'}>Manage My Posts </Link></li>
        <li className='btn' onClick={handleLogOut}>Log Out</li>
      </ul>
    </div>
  </div>
</div>
    );
};

export default Navbar;