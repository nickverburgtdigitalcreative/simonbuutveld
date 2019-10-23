import React, { Component } from 'react'
import { CountUp } from 'countup.js'
// import { updateCurrentSectionClass } from './utils'

import logo from '../images/logo_header.png'


let perfData = window.performance.timing
let EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart)
let time = parseInt((EstimatedTime / 1000) % 60) * 100;
let animationTime = time / 1000
let halfTime = time / 2

const style = {
	loadbar: {
		transition: 'height ' + animationTime + 's ease-in-out'
	},
	imageLoader: {
		transition: 'opacity ' + animationTime + 's ease-in-out'
	}
}

class PreLoader extends Component {
	
	componentDidMount() {
		
		let contUp = new CountUp('percent', 100, { duration: 4, suffix: '%'})
		let delayTime = this.props.isMobile ? time : halfTime

		setTimeout(() => {
			const loadbar = document.getElementsByClassName('loadbar')
			if (loadbar.length > 0) {
				loadbar[0].classList.add('load')
			}

			const image = document.getElementsByClassName('image_loader')
			if (image.length > 0) {
				image[0].classList.add('opacity')
			}

			contUp.start()

		}, delayTime)


		setTimeout(() => {
			const wrapper = document.getElementsByClassName('preloader-wrap')
			const header = document.getElementsByTagName('header')
			const back = document.getElementById('back')
			const scrollbar = document.getElementsByClassName('scroll-scrolly_visible')
			const nav = document.getElementsByTagName('nav')

			if (nav[0]){
				nav[0].classList.add('show')
			}
			
			wrapper[0].classList.add('loaded')
			header[0].classList.add('start_animation')

			if (back){
				back.classList.add('show')
			}
			if(scrollbar[2]){
				scrollbar[2].classList.add('show')
			}

			// updateCurrentSectionClass(this.props.current)

		}, time)
		

	}

	render() {
		return (
			<div className="preloader-wrap">
				<div className="loader">
					<div className="trackbar">
						<img src={logo} className='image_loader' alt='pre-loader' style={{ ...style.imageLoader }} />
						<div className="loadbar" style={{ ...style.loadbar }} ></div>
					</div>
					<div className="percentage" id="percent"></div>
				</div>
			</div>
		)
	}
}

export default PreLoader;