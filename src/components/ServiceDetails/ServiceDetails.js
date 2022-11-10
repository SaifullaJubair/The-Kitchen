import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceDetails = () => {
   const service = useLoaderData()
   const { _id, image, service_name, price, details } = service
   const { user } = useContext(AuthContext)

   const handleService = (event) => {
      event.preventDefault()
      const form = event.target;
      const name = `${form.firstName.value} ${form.lastName.value}`
      const reviewer_img = form.reviewer_img.value;
      const email = user?.email || 'Unregistered';
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

         <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto my-5">
            <figure>
               <PhotoProvider>
                  <PhotoView src={image}>
                     <img src={image} alt="" />
                  </PhotoView>
               </PhotoProvider>

            </figure>
            <div className="card-body">
               <h2 className="card-title text-2xl">{service_name}</h2>
               <p className='text-start'>Details: {details}</p>
               <p className='text-xl text-start py-5'> Price: <span className=' text-orange-600'>$ {price}</span> </p>
               <div className="card-actions ">
                  <Link to={`/service/${_id}`}>
                     <button className="btn  bg-amber-400 rounded-lg">Details</button>
                  </Link>
               </div>
            </div>
         </div>
         <form onSubmit={handleService}>
            <h2 className='text-4xl'>{service_name}</h2>
            <h4 className='text-3xl'>Price: {price}</h4>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 '>
               <input name='firstName' type="text" placeholder="First Name" className="input input-bordered  w-full" required />
               <input name='lastName' type="text" placeholder="Last Name" className="input input-bordered  w-full" required />
               <input name='reviewer_img' type="text" placeholder="Your Image URL" className="input input-bordered  w-full" required />
               <input name='email' type="email" placeholder="Your Email" className="input input-bordered w-full" defaultValue={user?.email} readOnly />
            </div>
            <textarea name='message' className="textarea textarea-bordered h-24 my-5 w-full" placeholder="Your Message" required></textarea>
            <input type="submit" className='btn btn-primary' value="Place Your Review" />
         </form>
      </div>
   );
};

export default ServiceDetails;