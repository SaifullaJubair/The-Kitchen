import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({ service }) => {
   const { image, price, service_name, _id, details } = service
   return (
      <div className="card card-compact w-full lg:w-96 md:w-96  bg-base-100 shadow-xl mx-auto my-5">
         <figure>
            <PhotoProvider>
               <PhotoView src={image}>
                  <img src={image} alt="" />
               </PhotoView>
            </PhotoProvider>

         </figure>
         <div className="card-body">
            <h2 className="card-title text-2xl">{service_name}</h2>
            <p className='text-xl text-start truncate ...'>{details}</p>
            <p className='text-xl text-start '> Price: <span className=' text-orange-600'>$ {price}</span> </p>
            <div className="card-actions ">
               <Link to={`/service/${_id}`}>
                  <button className="btn  bg-amber-400 rounded-lg">Details</button>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default ServiceCard;