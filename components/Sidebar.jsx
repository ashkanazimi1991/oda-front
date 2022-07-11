import React from 'react'
import Link from "next/link"
import { useRouter } from 'next/router';

// import { FaBeer } from "react-icons/fa";

function Sidebar() {
    const router = useRouter();
  return (

    <div >
{/* //  <!--Sidebar--> */}
        <div className="w-full md:w-1/5   bg-[#000000f3] md:bg-[#000000ec] z-20 px-0 text-center fixed bottom-0 md:pt-10 md:top-0 md:left-0 h-16 md:h-screen md:border-r-4 md:border-gray-600">
            <div className="md:relative  items-center mx-auto lg:float  lg:px-0">
               <div className='hidden md:block pt-5'>
                 <img className=" w-0 md:w-32 lg:w-48   object-contain mx-auto overflow-visible "src="/images/4.svg" alt="oda"/>
                <h1 className='pt-10 text-white text-3xl font-[arial] font-bold underline'>Architect</h1>
                <h2 className='pb-8  text-white bg-transparent font-[arial]   '> Company</h2>
               </div>
                <ul className="list-reset flex flex-row md:flex-col z-20 text-center md:text-center">
                        <Link href='/'>
                            <li className="mr-3 flex-1  ">
                                <a  className="block py-1 md:py-3   pl-1 align-middle text-[#fff]  hover:text-[#60724b] hover:bg-[#60724b]   hover:shadow-[#60724b3a] no-underline  border-b-2 border-[#94A3B8] md:border-[#94A3B8] hover:border-[#60724b00]">
                                <i className="pr-0 md:pr-3"></i>
                                    <span className="pb-1 md:pb-0 text-xs md:text-base text-[#94A3B8] hover:text-[#fff]  md:text-[#fff]
                                     block md:inline-block font-[arial]  tracking-wide  "> Home</span>
                                </a>
                            </li>
                        </Link>

                        <Link href='/projects'>
                            <li className="mr-3 flex-1">
                                    <a  className="block py-1 md:py-3   pl-1 align-middle text-[#fff]  hover:text-[#60724b] 
                                    hover:bg-[#60724b] no-underline  border-b-2 border-[#94A3B8] md:border-[#94A3B8] 
                                    hover:border-[#60724b00]">
                                    <i className="pr-0 md:pr-3"></i>
                                    <span className="pb-1 md:pb-0 text-xs md:text-base text-[#94A3B8] hover:text-[#fff]
                                     md:text-[#fff] block md:inline-block tracking-wide font-[arial]">Projects</span>
                                </a>
                            </li>
                        </Link>

                        <Link href='/services'>

                            <li    className="mr-3 flex-1 ">
                                <a  className="block py-1 md:py-3   pl-1 align-middle text-[#fff]  hover:text-[#60724b] hover:bg-[#60724b] no-underline  border-b-2 border-[#94A3B8] md:border-[#94A3B8] hover:border-[#60724b00]">
                                <i className=" pr-0 md:pr-3"></i>
                                <span className="pb-1 md:pb-0 text-xs md:text-base text-[#94A3B8] hover:text-[#fff] md:text-[#fff] block md:inline-block tracking-wide font-[arial]">Services</span>
                                 </a>
                            </li>
                        </Link>

                        <Link href='/about'>
                            <li className="mr-3 flex-1">
                                <a  className="block py-1 md:py-3   pl-1 align-middle text-[#fff]  hover:text-[#60724b] hover:bg-[#60724b] no-underline  border-b-2 border-[#94A3B8] md:border-[#94A3B8] hover:border-[#60724b00]">
                                <i className="pr-0 md:pr-3"></i>
                                <span className="pb-1 md:pb-0 text-xs md:text-base text-[#94A3B8] hover:text-[#fff] md:text-[#fff] block md:inline-block tracking-wide font-[arial]">About</span>
                                </a>
                            </li>
                        </Link>
                </ul>
            </div>
        </div>
        
    </div>
  )
}

export default Sidebar