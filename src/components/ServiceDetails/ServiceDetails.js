import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
   const { service_name } = useLoaderData()
   return (
      < div >
         <h1>hi</h1>
         <h2>{service_name}</h2>
      </ div>
   );
};

export default ServiceDetails;