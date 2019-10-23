import React from 'react'
import Bottom from './utils/Bottom';

const Introduction = () => {
	return (
		<section className='dark' data-section-name='introduction' id='one'>
			<div className='content'>
				<div className='block'>
					<div className='f1_txt1'>Results driven</div>
					<div className='f1_txt2'>ARCHITECTURAL IMAGING</div>
					<div className='line_draw'></div>
					<div className='f1_txt3'>Hello, my name is Simon Buutveld. I have created a new method of producing high quality architectural renders designed to make clients fall in love with your designs.</div>
				</div>
			</div>
			<Bottom text='Please scroll down to discover more' />
		</section>
	)
}

export default Introduction