import React from 'react'
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";

const Team = () => {
  return (
    <div className='mt-20 md:pl[200%'>
       {/* <!-- component --> */}
<section className=" bg-[#000]">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-3xl font-semibold text-center text-gray-800 
                capitalize lg:text-4xl dark:text-white">Our Executive Team</h1>
                              
                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
                    <div className="flex flex-col items-center p-8 transition-colors duration-200
                     transform cursor-pointer group hover:bg-[#60724b] rounded-xl">
                        <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                         src="/images/aa.jpg" alt="">
                        </img>
                        <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white
                         group-hover:text-white">Kivan Azimi</h1>
                        
                        <p className="mt-2 text-gray-500 capitalize dark:text-gray-300
                         group-hover:text-gray-300">CEO & Architectuer</p>
                        
                        <div className="flex mt-3 -mx-2">
                            <a href="#" className="mx-2 text-gray-600 dark:text-gray-300
                             hover:text-gray-500 dark:hover:text-gray-300
                              group-hover:text-white" aria-label="Reddit">
                             <BsInstagram className='font-xl'/>
                            </a>

                            <a href="#" className="mx-2 text-gray-600 dark:text-gray-300
                             hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                                aria-label="Facebook">
                               <FiFacebook/>
                            </a>

                            <a href="#" className="mx-2 text-gray-600 dark:text-gray-300
                             hover:text-gray-500 dark:hover:text-gray-300
                              group-hover:text-white" aria-label="Github">
                               <BsWhatsapp/>
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-[#60724b] rounded-xl">
                        <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" 
                        src="/images/bb.jpg" alt="">
                        </img>
                        <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize
                         dark:text-white group-hover:text-white">Saide Sadat</h1>
                        
                        <p className="mt-2 text-gray-500 capitalize dark:text-gray-300
                         group-hover:text-gray-300">Architectuer</p>
                        
                        <div className="flex mt-3 -mx-2">
                            <a href="#" className="mx-2 text-gray-600 dark:text-gray-300
                             hover:text-gray-500 dark:hover:text-gray-300
                              group-hover:text-white" aria-label="Reddit">
                             <BsInstagram className='font-xl'/>
                            </a>

                            <a href="#" className="mx-2 text-gray-600 dark:text-gray-300
                             hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                                aria-label="Facebook">
                               <FiFacebook/>
                            </a>

                            <a href="#" className="mx-2 text-gray-600 dark:text-gray-300
                             hover:text-gray-500 dark:hover:text-gray-300
                              group-hover:text-white" aria-label="Github">
                               <BsWhatsapp/>
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col items-center p-8 transition-colors duration-200 
                    transform cursor-pointer group hover:bg-[#60724b] rounded-xl">
                        <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" 
                        src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="">
                        </img>
                        <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize
                         dark:text-white group-hover:text-white">Mina Rad</h1>
                        
                        <p className="mt-2 text-gray-500 capitalize dark:text-gray-300
                         group-hover:text-gray-300">3D designer</p>
                        
                        <div className="flex mt-3 -mx-2">
                            <a href="#" className="mx-2 text-gray-600 dark:text-gray-300
                             hover:text-gray-500 dark:hover:text-gray-300
                              group-hover:text-white" aria-label="Reddit">
                             <BsInstagram className='font-xl'/>
                            </a>

                            <a href="#" className="mx-2 text-gray-600 dark:text-gray-300
                             hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                                aria-label="Facebook">
                               <FiFacebook/>
                            </a>

                            <a href="#" className="mx-2 text-gray-600 dark:text-gray-300
                             hover:text-gray-500 dark:hover:text-gray-300
                              group-hover:text-white" aria-label="Github">
                               <BsWhatsapp/>
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col items-center p-8 transition-colors 
                    duration-200 transform cursor-pointer group hover:bg-[#60724b] rounded-xl">
                        <img className="object-cover w-32 h-32 rounded-full ring-4
                         ring-gray-300" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="">
                        </img>
                        <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">Ashkan Azimi</h1>
                        
                        <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Full stack developer</p>
                        
                        <div className="flex mt-3 -mx-2">
                            <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Reddit">
                             <BsInstagram className='font-xl'/>
                            </a>

                            <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                                aria-label="Facebook">
                               <FiFacebook/>
                            </a>

                            <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Github">
                               <BsWhatsapp/>
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-[#60724b] rounded-xl">
                        <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="">
                        </img>
                        <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">Neda Mohamadi</h1>
                        
                        <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Graphic Designer</p>
                        
                        <div className="flex mt-3 -mx-2">
                            <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Reddit">
                             <BsInstagram className='font-xl'/>
                            </a>

                            <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                                aria-label="Facebook">
                               <FiFacebook/>
                            </a>

                            <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Github">
                               <BsWhatsapp/>
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-[#60724b] rounded-xl">
                        <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="https://images.unsplash.com/photo-1608174386344-80898cec6beb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="">
                        </img>
                        <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">Ramin Milan</h1>
                        
                        <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Project Managers</p>
                        
                        <div className="flex mt-3 -mx-2">
                            <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Reddit">
                             <BsInstagram className='font-xl'/>
                            </a>

                            <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                                aria-label="Facebook">
                               <FiFacebook/>
                            </a>

                            <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Github">
                               <BsWhatsapp/>
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-[#60724b] rounded-xl">
                        <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="">
                        </img>
                        <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">Farzad Farzane</h1>
                        
                        <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Engineer</p>
                        
                        <div className="flex mt-3 -mx-2">
                            <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Reddit">
                             <BsInstagram className='font-xl'/>
                            </a>

                            <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                                aria-label="Facebook">
                               <FiFacebook/>
                            </a>

                            <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Github">
                               <BsWhatsapp/>
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-[#60724b] rounded-xl">
                        <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="https://images.unsplash.com/photo-1521488741203-dcc320950ce5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="">
                        </img>
                        <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">Emma Doe</h1>
                        
                        <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Architect</p>
                        
                        <div className="flex mt-3 -mx-2">
                            <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Reddit">
                             <BsInstagram className='font-xl'/>
                            </a>

                            <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                                aria-label="Facebook">
                               <FiFacebook/>
                            </a>

                            <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Github">
                                <BsWhatsapp/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Team