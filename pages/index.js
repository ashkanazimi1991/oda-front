// import ScrollItem from '../components/ScrollItems/ScrollItem';
import Slider from '../components/Slider/Slider'
import Head from 'next/head';
// import {useState} from 'react';
// import InfoSection from './../components/InfoSection/InfoSection';
// import {homeObjectOne, homeObjectThree, homeObjectTwo } from '../components/InfoSection/Data';





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
  <Slider/>
  {/* <ScrollItem  /> */}
  {/* <InfoSection {...homeObjectTwo} /> */}
  {/* <InfoSection {...homeObjectOne} /> */}
  {/* <InfoSection {...homeObjectThree} /> */}


</div>

  )
}
