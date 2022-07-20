import React from 'react'
import Link from 'next/link'

const Gallery = () => {
  return (
    <div className='bg-black pt-20 md:pt-0    md:pl-[20%]  '>
        <div className="container grid grid-cols-2 md:grid-cols-3  gap-1 ">
            <div className="w-full relative  flex items-center justify-center ">
                 <Link href='/about'>
                    <a  className='pointer-events-auto text-center ease-in-out duration-1000  md:text-2xl  font-bold shadow-2xl tracking-wide text-white  
                    py-[30%] px-[30%]  bg-[#5e5e5fee] absolute opacity-0 hover:opacity-100      '>
                        DETAILS
                    </a>
                </Link> 
                <img  className="styles.image"      src="/images/a1.jpg"  alt= "img"   />

            </div>
         
            <div className="w-full relative  flex items-center justify-center ">
                <Link href='/about'>
                    <a  className='pointer-events-auto text-center ease-in-out duration-1000 font-bold
                    md:text-2xl shadow-2xl tracking-wide text-white  
                    py-[30%] px-[30%]  bg-[#5e5e5fee] absolute opacity-0 hover:opacity-100
                    '>
                        DETAILS
                    </a>
                </Link>  
                <img     className="styles.image"    src="/images/a2.jpg"     alt= "img"     />
            </div>
          
            <div className="w-full relative  flex items-center justify-center ">
                <Link href='/about'>
                    <a  className='pointer-events-auto  md:text-2xl  text-center ease-in-out duration-1000 font-bold shadow-2xl tracking-wide text-white  
                    py-[30%] px-[30%]  bg-[#5e5e5fee] absolute opacity-0 hover:opacity-100  '>
                        DETAILS
                    </a>
                </Link> 
                <img            className="styles.image"        src="/images/a3.jpg"        alt="img"  />
            </div>
            <div className="w-full relative  flex items-center justify-center ">
                <Link href='/about'>
                    <a  className='pointer-events-auto  md:text-2xl  text-center ease-in-out duration-1000 font-bold shadow-2xl tracking-wide text-white  
                    py-[30%] px-[30%]  bg-[#5e5e5fee] absolute opacity-0 hover:opacity-100
                    '>
                        DETAILS
                    </a>
                </Link> 
                <img  className="styles.image"     src="/images/a4.jpg"    alt="img"      />
            </div>
            <div className="w-full relative  flex items-center justify-center ">
                <Link href='/about'>
                    <a  className='pointer-events-auto  md:text-2xl  text-center ease-in-out duration-1000 font-bold shadow-2xl tracking-wide text-white  
                    py-[30%] px-[30%]  bg-[#5e5e5fee] absolute opacity-0 hover:opacity-100
                    '>
                        DETAILS
                    </a>
                </Link> 
                <img  className="styles.image"     src="/images/a6.jpg"     alt="img"    />
            </div>
            <div className="w-full relative  flex items-center justify-center ">
                <Link href='/about'>
                    <a  className='pointer-events-auto text-center  md:text-2xl  ease-in-out duration-1000 font-bold shadow-2xl tracking-wide text-white  
                    py-[30%] px-[30%]  bg-[#5e5e5fee] absolute opacity-0 hover:opacity-100
                    '>
                        DETAILS
                    </a>
                </Link> 
                <img     className="styles.image"      src="/images/a7.jpg"     alt="img"   />
             </div>
        </div>
    </div>
  )
}

export default Gallery