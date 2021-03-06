import React from 'react'
import DownloadButton from '../styledComponents/DownloadButton.js'
import BracketsList from '../components/Hero/Hero.js'
import TopFeatures from '../components/TopFeatures/TopFeatures.js'
import Box from '../components/Box/Box.js'
import Client from '../components/Client/Client.js'
import DownloadTemplate from '../images/download_template.png'
import BrowseGithub from '../images/browse_github.png'

class Home extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			open: true,
			hideElement: false
		}
	}
	collapseFeatures() {
		console.log('CLICKED')
		this.setState((prevState, props) => ({
			open: !this.state.open
		}))
	}
	hideElement() {
		this.setState((prevState, props) => ({
			hideElement: !this.state.hideElement
		}))
	}

	render() {
		// const { ref, props } = React.forwardRef((props, ref) => ({ props, ref }));

		// const style = this.state.hideElement ? { display: 'none'} : {};

		return (
			<div className="homepage">
				<div id="homepage-hero">
					<div className="container">
						<div className="hero-headline">Light-weight, scalable, ES6</div>
						<div className="hero-text-one">AD DEVELOPMENT</div>
						<div className="hero-text-two">
							<div className="hero-text-three">
								<div className="htt-item">Hot-rod creative</div>
								<div className="htt-mult">—</div>
								<div className="htt-item">build fewer units, deliver bigger buys:</div>
							</div>
							<div className="hero-text-three">
								<div className="htt-item">Many targets</div>
								<div className="htt-item htt-mult">✕</div>
								<div className="htt-item">Many sizes</div>
								<div className="htt-item htt-mult">✕</div>
								<div className="htt-item">Many devices</div>
							</div>
						</div>
						<BracketsList />
						<br />
						<br />
						<DownloadButton />
					</div>
				</div>

				<div id="homepage-features">
					<div className="features-container">
						<h2 id="headline-style-topfeatures">FEATURES</h2>
						<TopFeatures />
					</div>
				</div>

				<div id="homepage-steps">
					<div className="container">
						<h1 className="headline-style-steps">4 EASY STEPS TO GET STARTED</h1>
						<Box />
						<DownloadButton />
					</div>
				</div>

				<div id="homepage-download">
					<div className="download-container">
						<a href="https://github.com/ff0000-ad-tech/tmpl-standard-base" target="_blank" rel="noopener noreferrer">
							<img src={DownloadTemplate} className="download-template" alt="download template" />
						</a>
					</div>
					<div className="browse-container">
						<a href="https://github.com/ff0000-ad-tech" target="_blank" rel="noopener noreferrer">
							<img src={BrowseGithub} className="browse-github" alt="browse github" />
						</a>
					</div>
				</div>

				<div id="homepage-clients">
					{/*<div className='container'>*/}
					<h2 className="headline-style-clients">POWERED BY RED AD TECH</h2>
					<Client />
					{/*</div>*/}
				</div>

				<div id="homepage-peeps">
					<p className="peeps-headline">ABOUT RED</p>
				</div>

				<div id="homepage-about-red">
					<div className="container">
						<p className="copy-text-about">
							RED has been building display ads for over a decade. We were the first to deliver HTML 5. We innovated dynamic. We maintain &
							license our own Content Management Platform: <a href="http://velvet.tech">Velvet</a>.
						</p>
						<p className="copy-text-about">We believe ads should load fast & look amazing - whether our agency builds them, or yours.</p>
					</div>
				</div>
			</div> // end of homepage
		)
	}
}

export default Home
