import React from 'react';
import { Helmet } from 'react-helmet-async';

const Blog = () => {
   return (

      <div className='flex flex-col justify-center min-h-[66vh] lg:mx-60 md:mx-20'>
         <Helmet><title>Blogs</title></Helmet>
         <h2 className='text-center text-3xl my-5 font-bold'>Blog</h2>
         <div tabIndex={0} className="collapse border border-base-300 bg-base-100 rounded-box my-4 ">
            <div className="collapse-title text-xl font-medium">
               Difference between SQL and NoSQL?
            </div>
            <div className="collapse-content ">
               <p>
                  SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.

                  There are five practical differences between SQL and NoSQL:
                  Language
                  Scalability
                  Structure
                  Properties
                  Support and communities.</p>
            </div>
         </div>
         <div tabIndex={0} className="collapse border border-base-300 bg-base-100 rounded-box my-4">
            <div className="collapse-title text-xl font-medium">
               What is JWT, and how does it work?
            </div>
            <div className="collapse-content">
               <p>What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP)
               </p>
            </div>
         </div>
         <div tabIndex={0} className="collapse border border-base-300 bg-base-100 rounded-box my-4">
            <div className="collapse-title text-xl font-medium">
               What is the difference between javascript and NodeJS?
            </div>
            <div className="collapse-content">
               <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language
               </p>
            </div>
         </div>
         <div tabIndex={0} className="collapse border border-base-300 bg-base-100 rounded-box my-4">
            <div className="collapse-title text-xl font-medium">
               How does NodeJS handle multiple requests at the same time?
            </div>
            <div className="collapse-content">
               <p>How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
            </div>
         </div>
      </div>
   );
};

export default Blog;