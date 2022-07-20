import React from 'react'
import Link from 'next/link'

const header = () => {
  return (
    <div>
        <logo>

            <div className=' top-0 h-18 flex p-2 flex-row md:hidden items-center fixed  w-full bg-[#000000cc] z-50'>
              <div>

                <Link href="/" >
                    <img className='w-14 h-14   z-20 object-left-top' 
                    src="./images/logof.svg" alt="ODA"/>
                </Link>

              </div>
              <div className='  '>
                    <h1 className='text-[#fff]  h-18 text-xs ml-2  font-[arial] tracking-wide   ' >
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