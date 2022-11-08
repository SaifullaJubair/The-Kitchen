import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import { InfinitySpin } from 'react-loader-spinner';

const PrivateRoute = ({ children }) => {

   const { user, loading } = useContext(AuthContext)
   const location = useLocation();

   if (loading) {
      return <div className='flex justify-center items-center'><p className='text-3xl'>Loading...  <InfinitySpin></InfinitySpin> </p></div>
   }

   if (user) {
      return children;
   }
   return <Navigate to='/login' state={{ from: location }} replace></Navigate>

};

export default PrivateRoute;