import React, { Component } from 'react';
import DownloadButton from '../styledComponents/DownloadButton.js';
import { Grid } from 'react-flexbox-grid';
import FeatureList from '../components/Feature/FeatureList.js';
import Box from '../components/Box/Box.js';
import Client from '../components/Client/Client.js';



const Home = () => (

	 // render(){
  //       const myFeatures = [
  //           {
  //           label: 'Approachable',
  //           text: 'Javascript is more powerful than platform solutions. Better packaging / load-optimization. Integrates with existing systems / future-proof.'
  //           },
  //           {
  //           label: 'Open-source',
  //           text: 'Benefits from standards. Source code is often shared between regions. No competitive edge in tooling. Version-control improves stability.'
  //           },
  //           {
  //           label: 'Modular',
  //           text: 'Benefits from standards. Source code is often shared between regions. No competitive edge in tooling. Version-control improves stability.'
  //           },
  //           {
  //           label: 'GSAP',
  //           text: 'Greensock Animation Platform has been an industry-standard for over a decade. Efficient & powerful animation framework.  Ubiquitously cached and usually dismissed against k-size.'
  //           }
  //       ]
  //   };
	<div className='homepage'>

	  <div className='homepage-hero'>
	  	 <div className='container'>
	    <h2>Faster development so you can focus on creative execution.</h2>
	    <p className='hero-text-one'>A super-lightweight, easy-to-use (and also developer-friendly) framework is crucial for delivering fresh creative into programmatic buys that include hundreds of targets across many sizes and devices.
		</p>
	
		<p className='hero-text-two'>The result is the smallest, most capable, fastest-loading ads in the industry.</p>
	  
	    
	  <DownloadButton/>
	  </div>
	  </div>

	  <div className='homepage-features'>
	  	 <Grid fluid style={{ width: '85%', margin: '0 auto', padding: '20px'}}>
	  	 	<FeatureList/>
	  	 </Grid>
	  </div>

	  <div className='homepage-steps'>
		  <div className='container'>
		  	<h1>4 easy steps to get started.</h1>
		  	<Box />

		  	<DownloadButton/>
	  	</div>
	  </div>

	  <div className='homepage-clients'>
	   <div className='container'>
	  <h2>Clients that have used our framework.</h2>
	  <Client/>
	  </div>
	  	
	  </div> 

   </div> // end of homepage
)

export default Home;