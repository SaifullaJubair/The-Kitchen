import React from 'react';
import { Helmet } from 'react-helmet-async';
import MainCarousel from './AwesomeSlider';

const Home = () => {
   return (

      <div>
         <Helmet>
            <title>The Kitchen: Home</title>
         </Helmet>
         <div className='mb-36'>
            <MainCarousel></MainCarousel>
         </div>
         <div className="hero w-full " data-theme="night">
            <div className="hero-content grid gap-10 md:grid-cols-2 flex-col lg:flex-row min-h-screen">
               <div className="card flex-shrink-0 w-full max-w-sm   mx-auto text-left">
                  <h1 className='text-3xl lg:text-5xl font-bold text-amber-500 my-5'>The Best <br /> Restaurants In Your Home</h1>
                  <p className='my-2'>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                  </p>
                  <button className='btn btn-warning my-3 w-2/5'>Services</button>
               </div>
               <div className="text-center lg:text-left mx-auto lg:my-8 mb-4">
                  <img src='https://i.ibb.co/XtgxcPc/reviews-01.png' alt="" />
               </div>
            </div>
         </div>

         <div>
            <div className='text-center  my-5'>
               <h1 className='text-3xl lg:text-5xl font-bold mt-20 mb-5'>How It Works</h1>
               <p className='mx-20 mb-10'>Magna sit amet purus gravida quis blandit turpis cursus. Venenatis tellus in
                  metus vulputate eu scelerisque felis.</p>
            </div>
            <div className='flex flex-col md:flex-row lg:flex-row item-center justify-center my-6'>
               <div className='mx-auto my-8'>
                  <img src="https://i.ibb.co/B6FRZ8p/illustration-1.png" alt="" />
                  <h1> <span className='text-slate-400 text-2xl'>01</span> Select Restaurant</h1>
               </div>
               <div className='mx-auto my-8'>
                  <img src="https://i.ibb.co/DzVHKS9/illustration-2.png" alt="" />
                  <h1> <span className='text-slate-400 text-2xl'>02</span> Select menu</h1>
               </div>
               <div className='mx-auto my-8'>
                  <img src="https://i.ibb.co/Srxxk6r/illustration-3.png" alt="" />
                  <h1> <span className='text-slate-400 text-2xl'>03</span> Wait for delivery</h1>
               </div>
            </div>
         </div>

         <div className="hero w-full " data-theme="night">
            <div className="hero-content grid gap-10 md:grid-cols-2 flex-col lg:flex-row ">
               <div className="text-center lg:text-left mx-auto ">
                  <img src='https://i.ibb.co/7nNB3T1/photo-3.png' alt="" />
               </div>
               <div className="card flex-shrink-0 w-full max-w-sm lg:my-8 mb-4 mx-auto text-left">
                  <h1 className='text-3xl lg:text-5xl font-bold text-amber-500 my-5'>Our Service Shows <br /> Good Taste.</h1>
                  <p className='my-2'>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                  </p>
                  <button className='btn btn-warning my-3 w-2/5'>Review</button>
               </div>

            </div>

         </div>
         <div className='flex item-center justify-center  pb-14' data-theme="night">
            <div className='flex lg:mx-4 md:mx-4 bg-white p-2 rounded' >
               <h1 className='text-amber-400 font-bold text-2xl lg:mr-2'>5.9K+</h1>
               <p className='text-cyan-800 lg:px-2'>
                  Satisfied <br /> Customer
               </p>
            </div>
            <div className='flex mx-4 bg-white p-2 rounded' >
               <h1 className='text-amber-400 font-bold text-2xl lg:mr-2'>12</h1>
               <p className='text-cyan-800 lg:px-2'>Best <br /> Food</p>
            </div>
            <div className='flex lg:mx-4 md:mx-4 bg-white p-2 rounded' >
               <h1 className='text-amber-400 font-bold text-2xl lg:mr-2'>8k+</h1>
               <p className='text-cyan-800 lg:px-2'>Food <br /> Delivered</p>
            </div>
         </div>

      </div>


   );
};

export default Home;



