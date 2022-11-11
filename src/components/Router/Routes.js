import { createBrowserRouter } from "react-router-dom";
import Main from "../../Main/Main";
import AddService from "../AddService/AddService";
import Blogs from "../Blogs/Blogs";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import Login from "../Login/Login";
import MyReview from "../MyReview/MyReview";
import Register from "../Register/Register";
import ServiceDetails from "../ServiceDetails/ServiceDetails";
import Services from "../Services/Services";
import UpdateReview from "../UpdateReview/UpdateReview";
import User from "../User/User";
import PrivateRoute from "./PrivateRoute";
import UnKnownRoutes from "./UnKnownRoutes";

export const routes = createBrowserRouter([
   {
      path: '/',
      element: <Main></Main>,
      children: [
         {
            path: '/',
            element: <Home></Home>
         },
         {
            path: '/my_review',
            element: <PrivateRoute><MyReview></MyReview></PrivateRoute>
         },
         {
            path: '/services',
            element: <Services></Services>
         },
         {
            path: '/service/:id',
            element: <ServiceDetails></ServiceDetails>,
            loader: ({ params }) => fetch(`https://kitchen-server-a11.vercel.app/services/${params.id}`)
         },
         {
            path: '/add_service',
            element: <PrivateRoute><AddService></AddService></PrivateRoute>
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
            path: '/user',
            element: <PrivateRoute><User></User></PrivateRoute>
         },
         {
            path: '/updateReview/:id',
            element: <PrivateRoute><UpdateReview></UpdateReview></PrivateRoute>,
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