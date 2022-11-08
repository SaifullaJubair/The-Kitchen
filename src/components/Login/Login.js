import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { AuthContext } from '../Context/AuthProvider';


const Login = () => {
   const [error, setError] = useState('')
   const navigate = useNavigate()

   const location = useLocation()
   const from = location.state?.from?.pathname || '/'

   const { signIn, signInWithGoogle, setLoading } = useContext(AuthContext)

   const handleGoogleSignIn = () => {
      signInWithGoogle()
         .then(result => {
            const user = result.user;
            console.log(user)
         })
         .catch(error => {
            console.error(error)
            setError(error.message)
         });
   }

   const handleSubmit = (event) => {
      event.preventDefault()
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password);

      signIn(email, password)
         .then(res => {
            const user = res.user;
            console.log(user)
            form.reset()
            setError('')
            navigate(from, { replace: true })
         })
         .catch(error => {
            console.error('error: ', error)
            setError(error.message);
         })

   }

   return (
      <div className="hero min-h-screen bg-base-200">
         <div className="hero-content flex-col">
            <h1 className="text-5xl font-bold">Please Login now!</h1>

            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
               <form onSubmit={handleSubmit} className="card-body">
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text text-xl font-semibold">Email</span>
                     </label>
                     <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text text-xl font-semibold">Password</span>
                     </label>
                     <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                     <label className="label">
                        <Link to='/register' className="label-text-alt link link-hover text-yellow-600">
                           <p>Don't have any account? Register</p>
                        </Link>
                     </label>
                     <p className='text-red-700 text'>{error}</p>
                  </div>
                  <div className="form-control mt-2">
                     <button className="btn btn-primary my-2">Login</button>
                  </div>
               </form>
            </div>

         </div>
      </div >
   );
};

export default Login;