import React from 'react';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
   desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
   },
   tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
   },
   mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
   }
};
const ResponsiveCarousel = () => {
   return (
      <div>
         <Carousel responsive={responsive}
         >
            <div>
               <img src="https://i.ibb.co/N2VNCk2/sweets-06.jpg" alt="" />
               <p>item 1</p></div>
            <div>
               <img src="https://i.ibb.co/XpFkfK1/pexels-vojtech-okenka-1055272.jpg" alt="" />
               <p>item 2</p>
            </div>
            <div>Item 3</div>
            <div>Item 4</div>
            <div>Item 5</div>
         </Carousel>;
      </div>
   );
};

export default ResponsiveCarousel;