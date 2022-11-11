import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ReviewTableRow = ({ review, handleDelete }) => {
   const { _id, serviceName, reviewer, message, reviewer_img, email } = review;

   return (
      <tr>
         <th>
            <label>
               <button className="btn btn-ghost lg:text-2xl text-xs" onClick={() => handleDelete(_id)}><FaTrashAlt></FaTrashAlt></button>
            </label>
         </th>
         <th>
            <label>
               <Link to={`/updateReview/${_id}`} className="btn btn-ghost lg:text-2xl text-xs" ><FaEdit></FaEdit></Link>
            </label>
         </th>
         <td>
            <div className="flex flex-col  lg:flex-row  space-x-3">
               <div className="avatar">
                  <div className="rounded w-16 h-16">

                     <img src={reviewer_img} alt="Avatar Tailwind CSS Component" />
                  </div>
               </div>
               <div className=' '>
                  <div className="font-bold lg:text-2xl text-xs ">{reviewer}</div>
                  <div className=" opacity-50 lg:text-lg text-xs">{email} </div>
               </div>
            </div>
         </td>
         <th className='lg:text-xl text-xs '>
            {serviceName}
         </th>

         <th className='lg:text-xl text-xs '>
            {message}
         </th>
      </tr>
   );
};

export default ReviewTableRow;


