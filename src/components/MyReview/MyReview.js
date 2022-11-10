import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../Context/AuthProvider';

const MyReview = () => {
   const { user } = useContext(AuthContext);
   const [reviews, setReviews] = useState({})


   useEffect(() => {
      fetch(`http://localhost:5000/reviews?email=${user?.email}`)
         .then(res => res.json())
         .then(data => {
            setReviews(data);
         })
   }, [user?.email])
   return (
      <div>
         <Helmet><title>Review</title></Helmet>
         <h1>My review</h1>
         <div>
            <h2 className='text-4xl'>You have {reviews.length} reviews</h2>
         </div>
      </div>
   );
};

export default MyReview;