import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateReview = () => {
   const { id } = useParams()
   console.log(id)
   const navigate = useNavigate()
   const handleService = (event) => {
      event.preventDefault()
      const form = event.target;
      const message = form.message.value;
      // console.log(name, phone, email)

      const review = {
         message,
      }
      fetch(`https://kitchen-server-a11.vercel.app/reviews/${id}`, {
         method: 'PUT',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(review)
      })
         .then(res => res.json())
         .then(data => {
            console.log(data)
            if (data.acknowledged) {
               toast('Successfully review post');
            }
            form.reset()
            navigate('/my_review')
         })
         .catch(error => console.log(error))

   }
   return (
      <div>
         <form onSubmit={handleService}>
            <p className='text-2xl font-bold text-start'>Review</p>
            <textarea name='message' className="textarea textarea-bordered h-24 w-full my-5" placeholder="Your Review Here" required></textarea>

            <input type="submit" className='btn btn-primary' value="Submit Review" />
         </form>

      </div>
   );
};

export default UpdateReview;