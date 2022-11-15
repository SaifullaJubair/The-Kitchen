import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import Review from './Review';

const ServiceDetails = () => {
   const service = useLoaderData()
   const { _id, image, service_name, price, details } = service
   const { user } = useContext(AuthContext)

   const [reviews, setReviews] = useState([])

   useEffect(() => {
      fetch(`https://kitchen-server-a11.vercel.app/serviceReviews/${_id}`)
         .then(res => res.json())
         .then(data => {
            setReviews(data);
         })
   }, [])


   const handleService = (event) => {
      event.preventDefault()
      const form = event.target;
      const name = user?.displayName
      const reviewer_img = user?.photoURL
      const email = user?.email
      const message = form.message.value;
      // console.log(name, phone, email)

      const review = {
         service: _id,
         serviceName: service_name,
         reviewer: name,
         email,
         reviewer_img,
         message,
      }
      fetch('https://kitchen-server-a11.vercel.app/reviews', {
         method: 'POST',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(review)
      })
         .then(res => res.json())
         .then(data => {
            // console.log(data)
            if (data.acknowledged) {
               toast('Successfully review post');
            }
            form.reset()
         })
         .catch(error => console.log(error))

   }
   return (


      <div>

         <div className='flex flex-col lg:flex-row justify-evenly  lg:my-20'>
            <div className="card  md:w-11/12 lg:w-1/3  shadow-xl">
               <figure>
                  <PhotoProvider>
                     <PhotoView src={image}>
                        <img src={image} alt="" />
                     </PhotoView>
                  </PhotoProvider>

               </figure>
               <div className="card-body ">
                  <h2 className="card-title text-2xl">{service_name}</h2>
                  <p className='text-start'>Details: {details}</p>
                  <p className='text-xl text-start py-5'> Price: <span className=' text-orange-600'>$ {price}</span> </p>

               </div>
            </div>

            <div className='my-6'>
               {
                  user?.uid ?
                     <div>
                        <div>
                           {/* here will be review by service name  */}
                           <h1>{reviews.length}</h1>
                           {
                              reviews.map(review => <Review
                                 key={review._id}
                                 review={review}
                              ></Review>)
                           }

                        </div>

                        <form onSubmit={handleService}>
                           <p className='text-2xl font-bold text-start'>Review</p>
                           <textarea name='message' className="textarea textarea-bordered h-24 w-full my-5" placeholder="Your Review Here" required></textarea>

                           <input type="submit" className='btn btn-primary' value="Submit Review" />
                        </form>
                     </div>
                     :
                     <div>
                        <p className='text-xl'>Please <Link to='/login' className='mr-1 lg:text-lg text-sm font-semibold nav '>Login</Link> To add review</p>
                     </div>
               }
            </div>
         </div>
      </div>
   );
};

export default ServiceDetails;