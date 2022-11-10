import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
   const { img, price, title, _id } = service
   return (
      <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto my-5">
         <figure><img src={img} alt="Shoes" /></figure>
         <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p className='text-2xl text-start py-5'> Price: <span className=' text-orange-600'>$ {price}</span> </p>
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