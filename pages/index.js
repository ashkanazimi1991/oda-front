// import ScrollItem from '../components/ScrollItems/ScrollItem';
import Slider from '../components/Slider/Slider'
import Head from 'next/head';
import threeD from '../components/ThreeD/ThreeD';
// import {useState} from 'react';
// import InfoSection from '/../components/InfoSection/InfoSection';
// import {homeObjectOne, homeObjectThree, homeObjectTwo } from '../components/InfoSection/Data';
import React360Viewer from '../components/React360Viewer';




export default function Home() {

  return(
    // <Layout>



<div>
  <Head>
        <meta name="description" content="oda" />
        <link rel="icon" href="/images/logo.png" />
        <title>ODA - Architect Company</title>
        <meta name="description" content="شرکت معماری اودا" />
        <meta name="theme-color" content="#000"/>
        <link rel='manifest' href='/manifest.json' />
  </Head>

  
  <Slider/>
    <div className="bg-[#000] w-screen">
                                      <React360Viewer 
                                          amount={36}
                                          i={1}
                                          imagePath="/images/myarm"
                                          fileName="m{index}.jpg"
                                          autoplay={0}
                                          loop={1}
                                          />
    </div>
                                  
  {/* <ScrollItem  /> */}
  {/* <InfoSection {...homeObjectTwo} /> */}
  {/* <InfoSection {...homeObjectOne} /> */}
  {/* <InfoSection {...homeObjectThree} /> */}


</div>

  )
}
