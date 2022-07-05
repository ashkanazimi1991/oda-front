import React from 'react'
import Link from 'next/link'

const header = () => {
  return (
    <div>
        <logo>

            <div className=' top-0  flex flex-row md:hidden items-center fixed  w-full bg-[#000000f3] z-20'>
              <div>

                <Link href="/" >
                    <img className='h-16   z-20 object-left-top' 
                    src="./images/logo2.png" alt="ODA"/>
                </Link>

              </div>
              <div className='  '>
                    <h1 className='text-[#fff]  text-sm pt-10 tracking-wide  font-light  ' >
                      ODA Office of Architecture 
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