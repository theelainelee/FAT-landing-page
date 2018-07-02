import React, {Component} from 'react';
import DownloadButton from './DownloadButton.js';
import logo from '../images/logo.png';
import { BrowserRouter, Link } from 'react-router-dom';


class Header extends Component {

	render(){
		return(
			 <div className="App">
		        <header className="App-header">
		          <img src={logo} className="App-logo" alt="logo" />
		          <h1 className="App-title">FF0000 Ad Tech ( FAT ) </h1>
		         <DownloadButton/>

		          <div className='App-intro'>
					<span><Link to='/' className='App-links'>Home</Link></span>
			        <span><Link to='/features' className='App-links'>Features</Link></span>
			        <span><Link to='/showcase' className='App-links'>Showcase</Link></span>
		          </div>
		           
		        </header>
		        
		      </div>
			);
	}
}

export default Header;