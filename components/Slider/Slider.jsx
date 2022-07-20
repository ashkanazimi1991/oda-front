import React from 'react'
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

// const Slider = () => {
    const Slider = () => {
        //Array of Images
        const images = [
            // "images/888.jpg",
            "images/555.jpg",
            "images/44.jpg",
           
        ];
    
        //These are custom properties for zoom effect while slide-show
        const zoomInProperties = {
            indicators: false,
            scale: 1.2,
            duration: 5000,
            arrows: false,
            transitionDuration: 500,
            infinite: true,
            
        
        };


  return (
    
     <div className="w-full pt-20 md:pt-0 bg-black">
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