import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';

import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';

const AddService = () => {
   const service = useLoaderData()

   const handleAddService = (event) => {
      event.preventDefault()
      const form = event.target;
      const service_name = form.service_name.value;
      const details = form.details.value;
      const image = form.image.value;
      const price = form.price.value;

      const service = {
         service_name,
         price,
         details,
         image
      }

      fetch('http://localhost:5000/services', {
         method: 'POST',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(service)
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
         <Helmet><title>Add-Services</title></Helmet>
         <div>
            <div>
               <h1 className='text-center text-4xl font-bold my-20'>Add Service.</h1>
            </div>
            <form onSubmit={handleAddService}>
               {/* <h2 className='text-4xl'>{service_name}</h2>
               <h4 className='text-3xl'>Price: {price}</h4> */}
               <div className=' '>

                  <input name='service_name' type="text" placeholder="Service Name" className="input input-bordered  w-full lg:w-1/2 md:w-2/3  my-4 " required /><br />

                  <input name='image' type="text" placeholder="Service Image URL" className="input input-bordered  w-full lg:w-1/2 md:w-2/3  my-4" required /><br />

                  <input type="number" name="price" placeholder='Price' className='input input-bordered w-full lg:w-1/2 md:w-2/3  my-4' /><br />

                  <textarea name='details' className="textarea textarea-bordered h-24 my-5 w-full lg:w-1/2 md:w-2/3 " placeholder="Service Details" required></textarea>
               </div>

               <input type="submit" className='btn btn-primary mb-20' value="Add service" />
            </form>
         </div>
      </div>
   );
};

export default AddService;


