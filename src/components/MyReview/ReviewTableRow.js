import React from 'react';

const ReviewTableRow = ({ review, handleDelete }) => {
   const { _id, serviceName, price, reviewer, message, service, reviewer_img, email } = review;

   return (
      <tr>
         <th>
            <label>
               <button className="btn btn-ghost" onClick={() => handleDelete(_id)}>X</button>
            </label>
         </th>
         <td>
            <div className="flex items-center space-x-3">
               <div className="avatar">
                  <div className="rounded w-16 h-16">

                     <img src={reviewer_img} alt="Avatar Tailwind CSS Component" />
                  </div>
               </div>
               <div>
                  <div className="font-bold">{reviewer}</div>
                  <div className="text-sm opacity-50">{email} </div>
               </div>
            </div>
         </td>
         <td>
            {serviceName}
            <br />
            <span className="badge badge-ghost badge-sm">$ {price} </span>
         </td>
         <th>
            <p>Rating</p>
         </th>
         <th>
            {message}
         </th>
      </tr>
   );
};

export default ReviewTableRow;

// import React from 'react';

// const ReviewTableRow = ({ review }) => {
//    const { _id, serviceName, price, reviewer, message, service, reviewer_img, email } = review
//    return (
//       <tr>
//          <th>
//             <label>
//                <input type="checkbox" className="checkbox" />
//             </label>
//          </th>
//          <td>
//             <div className="flex items-center space-x-3">
//                <div className="avatar">
//                   <div className="mask mask-squircle w-12 h-12">
//                      <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
//                   </div>
//                </div>
//                <div>
//                   <div className="font-bold">Hart Hagerty</div>
//                   <div className="text-sm opacity-50">United States</div>
//                </div>
//             </div>
//          </td>
//          <td>
//             Zemlak, Daniel and Leannon
//             <br />
//             <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
//          </td>
//          <td>Purple</td>
//          <th>
//             <button className="btn btn-ghost btn-xs">details</button>
//          </th>
//       </tr>
//    );
// };

// export default ReviewTableRow;