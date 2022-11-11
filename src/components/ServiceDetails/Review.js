import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const Review = ({ review }) => {
   const { message } = review;
   const { user } = useContext(AuthContext)
   return (
      <div className='border my-4 p-2'>
         <div className='flex items-center py-4'>
            <img src={user?.photoURL} className="w-16 rounded-full mx-2" alt="" />
            <h2 className='text-2xl font-bold'>{user?.displayName}</h2>
         </div>
         <div>
            <hr className='w-2/3 mx-auto py-2' />
            <p>{message}</p>
         </div>
      </div>
   );
};

export default Review;