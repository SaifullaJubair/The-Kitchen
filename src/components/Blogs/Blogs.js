import React from 'react';

const Blog = () => {
   return (

      <div className='flex flex-col justify-center min-h-[62vh]'>
         <h2 className='text-center text-3xl my-5'>This is Blog</h2>
         <div tabIndex={0} className="collapse border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
               what is `cors`?
            </div>
            <div className="collapse-content ">
               <p> What is "CORS"?
                  Cross-Origin Resource Sharing (CORS)

                  Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.

                  An example of a cross-origin request: the front-end JavaScript code served from https://domain-a.com uses XMLHttpRequest to make a request for https://domain-b.com/data.json.

                  For security reasons, browsers restrict cross-origin HTTP requests initiated from scripts. For example, XMLHttpRequest and the Fetch API follow the same-origin policy. This means that a web application using those APIs can only request resources from the same origin the application was loaded from unless the response from other origins includes the right CORS headers.

                  The CORS mechanism supports secure cross-origin requests and data transfers between browsers and servers. Modern browsers use CORS in APIs such as XMLHttpRequest or Fetch to mitigate the risks of cross-origin HTTP requests.</p>
            </div>
         </div>
         <div tabIndex={0} className="collapse border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
               Why are you using `firebase`? What other options do you have to implement authentication?
            </div>
            <div className="collapse-content">
               <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.

                  User Authentication Platforms [Auth0, Firebase Alternatives]

                  STYTCH.
                  Ory.
                  Supabase.
                  Okta.
                  PingIdentity.
                  Keycloak.
                  Frontegg.
                  Authress.
               </p>
            </div>
         </div>
         <div tabIndex={0} className="collapse border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
               How does the private route work?
            </div>
            <div className="collapse-content">
               <p>The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property
               </p>
            </div>
         </div>
         <div tabIndex={0} className="collapse border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
               What is Node? How does Node work?
            </div>
            <div className="collapse-content">
               <p>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. Working of Node.</p>
            </div>
         </div>
      </div>
   );
};

export default Blog;