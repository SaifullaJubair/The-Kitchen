import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt } from "react-icons/fa";
import pic from '../../assets/404.jpg'
import { AuthContext } from '../Context/AuthProvider';

const Header = () => {
   const { user, logOut } = useContext(AuthContext)

   const handleLogOut = () => {
      logOut()
         .then(() => { })
         .catch(error => console.error(error));
   }
   return (
      <div data-theme="night">
         <div className="navbar bg-base-100 py-5">
            <div className="navbar-start">
               <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost lg:hidden">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </label>
                  <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                     <li><Link to='/services'>Services</Link></li>
                     <li><Link to='/my_review'>My Review</Link></li>
                     <li tabIndex={0}>
                        <Link to='/blogs' className="justify-between">Blogs</Link>
                     </li>
                  </ul>
               </div>
               <Link to='/' className="btn btn-ghost normal-case text-xl">
                  <div className='flex items-center ml-2 font-bold lg:text-3xl text-base'>
                     <img className='w-14 mr-2' src='https://i.ibb.co/KNR8XZg/image-removebg-preview.png' alt="" />
                     <h3>The Kitchen</h3>
                  </div>
               </Link>
            </div>

            <div className="mr-6 navbar-end">
               <div className=" hidden  lg:flex lg:text-lg font-semibold">
                  <ul className="menu menu-horizontal">
                     <li className='mx-1'><Link to='/services'>Services</Link></li>
                     <li className='mx-1'><Link to='blogs'>Blogs</Link></li>
                     <li className='mx-1'><Link to='my_review'>My Review</Link></li>
                  </ul>
               </div>
               {
                  user?.uid ?
                     <>
                        <Link to='/add_service' className='lg:text-lg  text-xs font-semibold'>Add_Services</Link>
                        <button className='mx-2 lg:text-lg text-xs font-semibold' onClick={handleLogOut}> Logout</button>

                     </>
                     :
                     <>
                        <Link to='/register' className='mx-1 lg:text-lg text-xs font-semibold'>SignUp</Link>
                        <Link to='/login' className='mr-1 lg:text-lg text-xs font-semibold'>Login</Link>
                     </>
               }
               <Link to='/profile'>
                  {
                     user?.photoURL ?
                        <>
                           <img title={user?.displayName} className='h-12 rounded-full ' src={user?.photoURL} alt="User_Photo" />
                        </>
                        :
                        <span ><FaUserAlt></FaUserAlt> </span>
                  }

               </Link>
            </div>
         </div>
      </div>
   );
};

export default Header;