// import ScrollItem from '../components/ScrollItems/ScrollItem';
import Slider from '../components/Slider/Slider'
import Head from 'next/head';
import React360Viewer from '../components/React360Viewer';
import Info from '../components/Info/Info';




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
  <Info/>
    <div className="bg-[#000000da] w-full md:pl-[20%] ">
                                      <React360Viewer 
                                          amount={36}
                                          i={1}
                                          imagePath="/images/myarm"
                                          fileName="m{index}.jpg"
                                          autoplay={0}
                                          loop={1}
                                          />
    </div>
                                  


</div>

  )
}
