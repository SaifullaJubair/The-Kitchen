import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';



const Register = () => {
   const [error, setError] = useState('')
   const { createUser, updateUserProfile } = useContext(AuthContext)
   // console.log('createUser', createUser);
   const handleSubmit = (event) => {
      event.preventDefault()

      const form = event.target
      const name = form.name.value;
      const photoURL = form.photoURL.value
      const email = form.email.value;
      const password = form.password.value;
      console.log(name, photoURL, email, password)

      createUser(email, password)

         .then(res => {
            const user = res.user;
            console.log('Register user', user)
            form.reset()
            setError('')
            handelUpdateUserProfile(name, photoURL)
            toast.success('Successfully Register! Please verify your email')


         })
         .catch(error => {
            console.error('error :', error);
            setError(error.message)
         })
   }
   const handelUpdateUserProfile = (name, photoURL) => {
      const profile = {
         displayName: name,
         photoURL: photoURL
      }
      updateUserProfile(profile)
         .then(res => {
         })
         .catch(error => {
            console.error(error);
         })
   }


   return (
      <div className="hero w-full">
         <div className="hero-content grid  md:grid-cols-2 flex-col lg:flex-row ">

            <div className="text-center lg:text-left mx-auto">
               <img src='https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=2000' alt="" />
            </div>

            <div className="card flex-shrink-0  max-w-sm shadow-2xl mx-auto">
               <form onSubmit={handleSubmit} className="card-body">
                  <h1 className="text-3xl font-bold">Please Register Now!</h1>
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Name</span>
                     </label>
                     <input type="text" name='name' placeholder="Input your name" className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Photo URL</span>
                     </label>
                     <input type="text" name='photoURL' placeholder="Your Photo" className="input input-bordered" />
                  </div>
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Email</span>
                     </label>
                     <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Password</span>
                     </label>
                     <input name='password' type="password" placeholder="Your Password" className="input input-bordered" required />
                     <label className="label">
                        <p >
                           <small>
                              Already have an account?<Link to='/login' className='btn btn-link text-xs p-1' >Login</Link>
                           </small>
                        </p>
                     </label>
                     <p className='text-red-600 text-sm'>
                        {error}
                     </p>

                  </div>

                  <div className="form-control mt-2">
                     <button className="btn btn-primary">Register</button>
                  </div>
               </form>
            </div>


         </div>
      </div>
   );
};

export default Register;

