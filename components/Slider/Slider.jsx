import React from 'react'
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

// const Slider = () => {
    const Slider = () => {
        //Array of Images
        const images = [
            "images/666555.jpg",
            "images/666555.jpg",
            // "images/555666.jpg",
           
        ];
    
        //These are custom properties for zoom effect while slide-show
        const zoomInProperties = {
            indicators: false,
            scale: 1.2,
            duration: 10000,
            arrows: false,
            transitionDuration: 500,
            infinite: true,
            
        
        };


  return (
    
     <div className="w-full">
				<Zoom {...zoomInProperties}>
          {images.map((each, index) => (
            <div key={index} className="flex justify-center pt-63 bg-[#000] max-h-screen">
                <img
                  className="w-full  object-cover bg-[#000] z-20 shadow-xl"
                  src={each}
                />
            </div>
          ))}
			  </Zoom>
		</div>

  
  )
}

export default Slider