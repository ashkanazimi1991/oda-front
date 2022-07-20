import React from 'react';

const Info = () => {
    return (
        <div className='bg-[#000000da]'>
                <aside className="overflow-hidden bg-transparent sm:grid md:pl-[20%] sm:grid-cols-1">
                     <div className="p-8 md:p-12 md:pl-[20%] lg:px-16 lg:py-24">
                        <div className="max-w-xl mx-auto text-center">
                            <h2 className="text-2xl font-bold text-white md:text-3xl">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit
                            </h2>
                            <p className="hidden  text-gray-300 md:mt-4 md:block">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
                                    tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et
                                    fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt
                                    duis.
                            </p>

                            <div className="mt-4 md:mt-8">
                                    <a
                                    href="#"
                                    className="inline-block px-12 py-3 text-sm font-medium text-white 
                                    transition rounded bg-[#60724b] hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
                                    >
                                    Get Started Today
                                    </a>
                             </div>
                        </div>
                            </div>

                            <img       alt="#"  src="/images/hhh.jpg" className="fixed top-0 -z-20 object-cover w-full h-screen" />
            </aside>

        </div>
    );
}

export default Info;
