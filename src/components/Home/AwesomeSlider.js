import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
const MainCarousel = () => {
   return (
      <div>
         <AwesomeSlider >
            <div data-src="https://i.ibb.co/YPGVfz9/pexels-fauxels-3184183.jpg" />
            <div data-src="https://i.ibb.co/R4RbjN8/pexels-julia-filirovska-8250738.jpg" />
            <div data-src="https://i.ibb.co/98tYGZr/pexels-quang-nguyen-vinh-2144200.jpg" />
            <div data-src="https://i.ibb.co/DGhpMYJ/pexels-ella-olsson-1640777.jpg" />
         </AwesomeSlider>
      </div>
   );
};

export default MainCarousel;