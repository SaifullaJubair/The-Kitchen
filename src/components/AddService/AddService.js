import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';

import AuthProvider from '../Context/AuthProvider';
import { Helmet } from 'react-helmet-async';

const AddService = () => {
   const service = useLoaderData()
   const { _id, service_name, price } = service
   const { user } = useContext(AuthProvider)

   const handleService = (event) => {
      event.preventDefault()
      const form = event.target;
      const name = `${form.firstName.value} ${form.lastName.value}`
      const phone = form.phone.value;
      const email = user?.email || 'Unregistered';
      const message = form.message.value;
      // console.log(name, phone, email)

      const order = {
         service: _id,
         serviceName: service_name,
         price,
         customer: name,
         email,
         phone,
         message,
      }
   }
   return (
      <div>
         <Helmet><title>Add-Services</title></Helmet>
         <div>
            <form onSubmit={handleService}>
               <h2 className='text-4xl'>{service_name}</h2>
               <h4 className='text-3xl'>Price: {price}</h4>
               <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 '>
                  <input name='firstName' type="text" placeholder="First Name" className="input input-bordered  w-full" />
                  <input name='lastName' type="text" placeholder="Last Name" className="input input-bordered  w-full" />
                  <input name='phone' type="text" placeholder="Your Phone" className="input input-bordered  w-full" required />
                  <input name='email' type="text" placeholder="Your Email" className="input input-bordered w-full" defaultValue={user.email} readOnly />
               </div>
               <textarea name='message' className="textarea textarea-bordered h-24 my-5 w-full" placeholder="Your Message" required></textarea>
               <input type="submit" className='btn btn-primary' value="Place Your Order" />
            </form>
         </div>
      </div>
   );
};

export default AddService;


