import React, { useContext, useRef } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const User = () => {
   const { user } = useContext(AuthContext)
   const name = useRef(user.displayName)
   const photoURLRef = useRef(name, user.photoURL)


   const handleSubmit = (event) => {
      event.preventDefault()
      console.log('userPhotoURL:', photoURLRef.current.value)
      console.log('userName:', name.current.value)
   }
   return (
      <div>
         <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
               <h1 className="text-5xl font-bold"> User Information</h1>

               <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                  <form onSubmit={handleSubmit} className="card-body">
                     <img src={user?.photoURL} alt="" />
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text text-xl font-semibold">Email Address</span>
                        </label>
                        <input type="email" name='email' defaultValue={user?.email} readOnly placeholder="" className="input input-bordered" />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text text-xl font-semibold">Name</span>
                        </label>
                        <input name='name' type="text" placeholder="" className="input input-bordered" defaultValue={user?.displayName} ref={name} />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text text-xl font-semibold">Photo URL</span>
                        </label>
                        <input name='photoURL' type="text" placeholder="" ref={photoURLRef} className="input input-bordered" defaultValue={user?.photoURL} />
                     </div>
                     <div className="form-control mt-2">

                     </div>
                  </form>
               </div>

            </div>
         </div >
      </div>
   );
};

export default User;