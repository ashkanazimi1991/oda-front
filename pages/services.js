import React from 'react';

const Services = () => {
    return (
        <div>
            <video   autoPlay loop muted  className="fixed -z-10 object-cover  w-screen h-screen "  >
             <source   src="/video/ao.mp4"   type="video/mp4"  />
                Your browser does not support the video tag.
            </video>
           <section className="text-white min-h-screen bg-[#0c0c0cc5] md:pl-80 pt-10 l-18">
   

            <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
                <div className="max-w-lg mx-auto text-center">
                <h2 className="text-3xl md:pb-20 font-[arial] font-extrabold text-[#60724b]
                 sm:text-4xl tracking-wide"> ODA SERVICES</h2>

                {/* <p className="mt-4 text-gray-300 font-[iransans]">
                    خدمات فنی مهندسی مجموعه معماری اودا  
                </p> */}
                </div>

                <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
                    <a  className="block p-8 transition border  border-gray-800 shadow-xl rounded-xl 
                    bg-[#00000091] hover:shadow-[#60724b3a] hover:border-[#60724b]"  >
                        <h3 className="mt-4 text-xl font-bold text-white hover:text-[#60724b]">ARCHITECTUER</h3>

                        <p className="mt-1 text-sm text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
                        possimus adipisci distinctio alias voluptatum blanditiis laudantium.
                        </p>
                    </a>

                    <a  className="block p-8 transition border  border-gray-800 shadow-xl rounded-xl 
                    bg-[#00000091] hover:shadow-[#60724b3a] hover:border-[#60724b]"  >
                       

                        <h3 className="mt-4  text-xl font-bold text-white">SUPERVISION</h3>

                        <p className="mt-1 text-sm text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
                        possimus adipisci distinctio alias voluptatum blanditiis laudantium.
                        </p>
                    </a>
                    <a  className="block p-8 transition border  border-gray-800 shadow-xl rounded-xl 
                    bg-[#00000091] hover:shadow-[#60724b3a] hover:border-[#60724b]"  >
                        
                        <h3 className="mt-4 text-xl font-bold text-white">PROJECT MANGEMENT</h3>

                        <p className="mt-1 text-sm text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
                        possimus adipisci distinctio alias voluptatum blanditiis laudantium.
                        </p>
                    </a>

                    <a  className="block p-8 transition border  border-gray-800 shadow-xl rounded-xl 
                    bg-[#00000091] hover:shadow-[#60724b3a] hover:border-[#60724b]"  >
                       
                        <h3 className="mt-4 text-xl font-bold text-white">FACILITIES</h3>

                        <p className="mt-1 text-sm text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
                        possimus adipisci distinctio alias voluptatum blanditiis laudantium.
                        </p>
                    </a>

                    <a  className="block p-8 transition border  border-gray-800 shadow-xl rounded-xl 
                    bg-[#00000091] hover:shadow-[#60724b3a] hover:border-[#60724b]"  >
                        
                        <h3 className="mt-4 text-xl font-bold text-white">FEASIBILITY</h3>

                        <p className="mt-1 text-sm text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
                        possimus adipisci distinctio alias voluptatum blanditiis laudantium.
                        </p>
                    </a>

                    <a  className="block p-8 transition border  border-gray-800 shadow-xl rounded-xl 
                    bg-[#00000091] hover:shadow-[#60724b3a] hover:border-[#60724b]"  >
                       
                        <h3 className="mt-4 text-xl font-bold text-white">MAKE SMART</h3>

                        <p className="mt-1 text-sm text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
                        possimus adipisci distinctio alias voluptatum blanditiis laudantium.
                        </p>
                    </a>
                </div>

               
            </div>
</section>

        </div>
    );
}

export default Services;
