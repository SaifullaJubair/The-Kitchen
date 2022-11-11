import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = ({ length }) => {
   const [services, setServices] = useState([])
   let url = ''
   if (length) {
      url = `https://kitchen-server-a11.vercel.app/services?c=${length}`
   }
   else {
      url = `https://kitchen-server-a11.vercel.app/services`
   }
   useEffect(() => {
      fetch(url)
         .then(res => res.json())
         .then(data => setServices(data))
   }, [])
   return (
      <div data-theme="light">
         <div>
            <Helmet><title>All-Services</title></Helmet>
            <h1 className=' text-3xl md:text-4xl lg:text-5xl font-bold text-orange-400  my-5'>Our Services</h1>
         </div>
         <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10'>
            {
               services.map(service => <ServiceCard
                  key={service._id}
                  service={service}
               ></ServiceCard>)
            }
         </div>

      </div>

   );
};

export default Services;