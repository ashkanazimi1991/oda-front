import React from 'react';
import Head from 'next/head';
import Gallery from '../components/Gallery/Gallery';
// import ScrollItem2 from '../components/scrollItem2/ScrollItem2'

const Projects = () => {
    return (
        <div>
             <Head>
                <meta name="description" content="oda" />
                <link rel="icon" href="/images/logo.png" />
                <title>ODA - Architect Company</title>
                <meta name="description" content="شرکت اودا" />
                <meta name="theme-color" content="#000"/>
                <link rel='manifest' href='/manifest.json' />
         </Head>
            <Gallery/>
	
            {/* <ScrollItem2/> */}
        </div>
    );
}

export default Projects;
