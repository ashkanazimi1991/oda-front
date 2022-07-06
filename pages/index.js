// import ScrollItem from '../components/ScrollItems/ScrollItem';
import Slider from '../components/Slider/Slider'
import Head from 'next/head';
import threeD from '../components/threeD/threeD';
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
        
        <title>Home - ONLINE CEO</title>
        <meta name="description" content="شرکت معماری اودا" />
        <meta name="theme-color" content="#000"/>
        <link rel='manifest' href='/manifest.json' />
  </Head>
  <threeD/>
  <Slider/>
<div>
                                <React360Viewer
                                    amount={31}
                                    i={1}
                                    imagePath="/images/myarm"
                                    fileName="m{index}.jpg"
                                    autoplay={0}
                                    loop={3}
                                    />
                                </div>
                                  
  {/* <ScrollItem  /> */}
  {/* <InfoSection {...homeObjectTwo} /> */}
  {/* <InfoSection {...homeObjectOne} /> */}
  {/* <InfoSection {...homeObjectThree} /> */}


</div>

  )
}
