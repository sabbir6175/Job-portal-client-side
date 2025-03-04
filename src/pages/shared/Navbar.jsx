import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../../context/Authcontext/AuthContext';

const Navbar = () => {

    const { user,singOutUser } = useContext(AuthContext)

    const handleSingOut =()=>{
      singOutUser()
        .then(()=>{
          alert('Successfully user log out')
        })
        .catch(error=> {
          alert('failed to sing out', error)
        })
    }

    const links = <>

        <li className='mr-2  font-bold '> <NavLink
              to="/"
              exact={true}
              className={({ isActive }) =>
                isActive
                  ? ''
                  : ' '
              }
            >
              Home
            </NavLink></li>
        <li className='mr-2  font-bold ' ><NavLink to={""}  
              className={({ isActive }) =>
                isActive
                  ? ''
                  : ''
              }>All Job</NavLink></li>
        <li className='mr-2  font-bold '><NavLink to={"/myApplication"}   
              className={({ isActive }) =>
                isActive
                  ? ''
                  : ''
              }>MyApplication</NavLink></li>
        <li className='mr-2  font-bold '><NavLink to={"/AddJobs"}   
              className={({ isActive }) =>
                isActive
                  ? ''
                  : ''
              }>AddJobs</NavLink></li>
        <li className='mr-2  font-bold '><NavLink to={"/myPostJobs"}   
              className={({ isActive }) =>
                isActive
                  ? ''
                  : ''
              }>MyPostJobs</NavLink></li>
       


    
    </>

    return (
        <div className="navbar sticky top-0 z-50 backdrop-blur-md bg-cyan-100">
        <div className="navbar-start">
          <div  className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <a className="text-xl">Job-Portal</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          {
            user ? <>
                <Link>
                  <div className='flex items-center gap-2'>
                    <h1>{user?.email}</h1>
                    <img src={user.photoURL} className='w-10 h-10 rounded-full' alt="" />
                    <button onClick={handleSingOut} className='btn bg-emerald-400 btn-sm md:btn-md '>Log Out</button>
                  </div>
                </Link>
              </> : <>
              <Link to={"/login"} className="btn text-purple-500 bg-emerald-400 btn-sm md:btn-md mr-1 md:mr-3 ">sign in</Link>
              <Link to={"/register"} className="btn  text-purple-500 bg-emerald-400 btn-sm md:btn-md ">Register</Link>
            </>
          }
          
        </div>
      </div>
    );
};

export default Navbar;