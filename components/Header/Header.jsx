import React from 'react'
import Link from 'next/link'

const header = () => {
  return (
    <div>
        <logo>

            <div className=' top-0 h-19 flex flex-row md:hidden items-center fixed  w-full bg-[#000000f3] z-50'>
              <div>

                <Link href="/" >
                    <img className='w-12   z-20 object-left-top' 
                    src="./images/logogreen.png" alt="ODA"/>
                </Link>

              </div>
              <div className='  '>
                    <h1 className='text-[#60724b] font-bold h-18 text-xs pt-10 tracking-wide   ' >
                      ODA OFFICE OF ARCHITECTUER 
                    </h1>
                    {/* <h2 className='text-white  text-xs underline font-thin drop-shadow-lg shadow-black'>
                    
                    </h2> */}

              </div>
            </div>        
        </logo>
    </div>
  )
}

export default header