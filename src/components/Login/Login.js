import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";


import { AuthContext } from '../Context/AuthProvider';



const Login = () => {
   const { signIn, signInGoogle } = useContext(AuthContext)
   const [error, setError] = useState('')

   const location = useLocation();
   const navigate = useNavigate();
   const from = location.state?.from?.pathname || '/'

   const handleGoogleSignIn = () => {
      signInGoogle()
         .then(res => {
            const user = res.user;
            console.log(user)
            navigate(from, { replace: true })
         })
         .catch(error => {
            console.error(error);
            setError(error.message)
         })
   }


   const handleLogin = event => {
      event.preventDefault()
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      signIn(email, password)
         .then(res => {
            const user = res.user;
            console.log(user);
            navigate(from, { replace: true })
         })
         .catch(error => {
            console.error(error);
            setError(error.message)

         })
   }

   return (
      <div className="hero w-full my-20 ">
         <div className="hero-content grid gap-10 md:grid-cols-2 flex-col lg:flex-row ">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
               <form onSubmit={handleLogin} className="card-body">
                  <h1 className="lg:text-5xl sm:text-4xl text-center font-bold">Login</h1>

                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Email</span>
                     </label>
                     <input type="email" name='email' placeholder="email" className="input input-bordered" />
                  </div>
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Password</span>
                     </label>
                     <input type="password" name='password' placeholder="password" className="input input-bordered" />
                     <label className="label">
                        <p className='text-red-700 text'>{error}</p>
                     </label>
                  </div>
                  <div className="form-control mt-6">
                     <input className="btn btn-primary" type="submit" value="Login" />
                     <p >Don't have an account? <Link className='' to='/register'><button className='btn btn-link '>Sign Up</button></Link></p>

                  </div>
                  <div className='flex items-center text-start font-semibold'>
                     <label>SignIn with:</label>
                     <label className='btn btn-ghost rounded-xl ml-2 text-3xl' onClick={handleGoogleSignIn}> <FcGoogle></FcGoogle></label>
                  </div>
               </form>
            </div>
            <div className="text-center lg:text-left mx-auto">
               <img src='https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=2000' alt="" />
            </div>
         </div>
      </div>
   );
};

export default Login;