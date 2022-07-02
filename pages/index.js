import ScrollItem from '../components/ScrollItems/ScrollItem';
import Head from 'next/head';
import {useState} from 'react';
import InfoSection from './../components/InfoSection/InfoSection';
import {homeObjectOne, homeObjectThree, homeObjectTwo } from '../components/InfoSection/Data';
import Sidebar from '../components/Sidebar'




export default function Home() {

  return(
    // <Layout>



<div>
  <Head>
        <meta name="description" content="oda" />
        <link rel="icon" href="/images/logo.png" />
        <link rel='manifest' href='/manifest.json' />
  </Head>
    
  <ScrollItem  />
  <InfoSection {...homeObjectTwo} />
  {/* <Sidebar/> */}
  {/* <Sidebar isOpen={isOpen} toggle={toggle} /> */}
  {/* <InfoSection {...homeObjectOne} /> */}
  <InfoSection {...homeObjectThree} />

  {/* <Footer/> */}
</div>
    // </Layout>
  //  <Layout>
  // </Layout>
  )
}
