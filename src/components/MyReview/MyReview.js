import React from 'react';
import { Helmet } from 'react-helmet-async';

const MyReview = () => {
   return (
      <div>
         <Helmet><title>Review</title></Helmet>
         <h1>My review</h1>
      </div>
   );
};

export default MyReview;