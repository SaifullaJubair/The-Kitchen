import { createBrowserRouter } from "react-router-dom";
import Blogs from "../Blogs/Blogs";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Services from "../Services/Services";
import UnKnownRoutes from "./UnKnownRoutes";

export const routes = createBrowserRouter([
   {
      path: '/',
      element: <Home></Home>,
      children: [
         {
            path: '/services',
            element: <Services></Services>
         },
         {
            path: '/register',
            element: <Register></Register>,
         },
         {
            path: '/login',
            element: <Login></Login>
         },
         {
            path: '/blogs',
            element: <Blogs></Blogs>
         },
         {
            path: '/footer',
            element: <Footer></Footer>
         },
      ]
   },
   {
      path: '*',
      element: <UnKnownRoutes></UnKnownRoutes>
   }
])