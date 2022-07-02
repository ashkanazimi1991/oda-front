import React from 'react'
import Link from "next/link"

// import { FaBeer } from "react-icons/fa";

function Sidebar() {
  return (

    <div >
{/* //  <!--Sidebar--> */}
        <div className="w-full md:w-1/5  bg-[#fff] md:bg-[#ffffff] z-20 px-0 text-center fixed bottom-0 md:pt-10 md:top-0 md:left-0 h-16 md:h-screen md:border-r-4 md:border-gray-600">
            <div className="md:relative  items-center mx-auto lg:float  lg:px-0">
               <div className='hidden md:block pt-5'>
                 <img className="drop-shadow-2xl w-0 md:w-32 lg:w-48   object-fill mx-auto overflow-visible "src="/images/logo.png" alt="oda"/>
                <h1 className='pt-10 text-3xl  font-bold underline'>Architect</h1>
                <h2 className='pb-8   bg-transparent  '> Company</h2>
               </div>
                <ul className="list-reset flex flex-row md:flex-col z-20 text-center md:text-center">
                    <li className="mr-3 flex-1">
                        <a  className="block py-1 md:py-3 pl-1 align-middle text-[#000] no-underline hover:text-pink-500 border-b-2 border-[#60724b] md:border-[#60724b] hover:border-pink-500">
                        <i className="pr-0 md:pr-3"></i>
                        <Link href='/'>
                            <span className="pb-1 md:pb-0 text-xs md:text-base text-[#000] md:text-[#000] block md:inline-block">- Home -</span>
                        </Link>
                        </a>
                    </li>
                    <li className="mr-3 flex-1">
                        <a  className="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-[#60724b] md:border-[#60724b] hover:border-pink-500">
                        <i className=" pr-0 md:pr-3"></i>
                        <Link href='/services'>
                            <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Services</span>
                        </Link>
                        </a>
                    </li>
                    <li className="mr-3 flex-1">
                        <a  className="block py-1 md:py-3 pl-1 align-middle text-gray-800  no-underline hover:text-pink-500 border-b-2 border-[#60724b] md:border-[#60724b] hover:border-pink-500">
                        <i className="pr-0 md:pr-3"></i>
                        <Link href='/projects'>
                           <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Projects</span>
                        </Link>
                        </a>
                    </li>
                    <li className="mr-3 flex-1">
                        <a  className="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-[#60724b] md:border-[#60724b] hover:border-pink-500">
                        <i className="pr-0 md:pr-3"></i>
                        <Link href='/about'>
                           <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">About</span>
                        </Link>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        
    </div>
  )
}

export default Sidebar