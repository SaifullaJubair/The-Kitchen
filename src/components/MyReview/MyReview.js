import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../Context/AuthProvider';
import ReviewTableRow from './ReviewTableRow';

const MyReview = () => {
   const { user } = useContext(AuthContext);

   const [reviews, setReviews] = useState([])


   useEffect(() => {
      fetch(`http://localhost:5000/reviews?email=${user?.email}`)
         .then(res => res.json())
         .then(data => {
            setReviews(data);
         })
   }, [user?.email])

   // delete 
   const handleDelete = (id) => {
      const proceed = window.confirm('Are you sure want to delete your review')
      if (proceed) {
         fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'DELETE',
         })
            .then(res => res.json())
            .then(data => {
               console.log(data);
               if (data.deletedCount > 0) {
                  alert('deleted Successfully')
                  const remaining = reviews.filter(rev => rev._id !== id);
                  setReviews(remaining)
               }
            })
      }
   }
   return (
      <div>
         <Helmet><title>Review</title></Helmet>

         <div className='mt-20 mb-40 '>
            <h1 className='text-center text-4xl font-semibold mt-20 mb-16'>You Have {reviews.length} Review</h1>
            <div className="overflow-x-auto w-full">
               <table className="table w-full border">
                  <thead>
                     <tr>
                        <th>Delete</th>
                        <th>Edit</th>
                        <th>Name</th>
                        <th>Service</th>
                        <th>Review</th>
                     </tr>
                  </thead>
                  <tbody>
                     {
                        reviews.map(review => <ReviewTableRow
                           key={review._id}
                           review={review}
                           handleDelete={handleDelete}


                        ></ReviewTableRow>)
                     }
                  </tbody>
               </table>
               {
                  reviews.length == 0 && <h1 className='my-8 text-bold text-3xl '>No reviews</h1>
               }
            </div>
         </div>
      </div>
   );
};

export default MyReview;