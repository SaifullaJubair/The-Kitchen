import React from 'react';
import { Link } from 'react-router-dom';
import pic from '../../assets/404.jpg'


const UnKnownRoutes = () => {
   return (
      <div className='flex flex-col justify-center items-center'>
         <img src={pic} alt="" className='w-4/5' />
         <Link to='/' > <button className="btn btn-primary mt-2">Go Back</button></Link>
      </div>
   );
};

export default UnKnownRoutes;