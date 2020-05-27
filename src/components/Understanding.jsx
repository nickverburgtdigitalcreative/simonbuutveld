import React, { Component } from 'react'

import Slider from 'react-slick'
import { Link } from "react-router-dom"

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import thumb01 from '../images/subpages/sub_thumb_01.jpg'
import thumb02 from '../images/subpages/sub_thumb_02.jpg'
import thumb03 from '../images/subpages/sub_thumb_03.jpg'
import thumb04 from '../images/subpages/sub_thumb_04.jpg'
import thumb05 from '../images/subpages/sub_thumb_05.jpg'
import Top from './utils/Top'
import Bottom from './utils/Bottom'

const curSlide = window.sessionStorage.getItem("curSlide");

let settings = {
    slidesToShow: 3,
    infinite: false,
    slidesToScroll: 1,
    dots: true,
    ease: 'easeInOutCubic',
    initialSlide: curSlide ? parseInt(curSlide) : 0,
    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false,
        }
    }, {
        breakpoint: 400,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
        }
    }],

    afterChange: (index) => {
        window.sessionStorage.setItem("curSlide", index);
    }
}


class Understanding extends Component {

    handleClick = (e) => {
        e.preventDefault()
        const target = e.target.getAttribute('data-to')
        const fader = document.getElementById('fader')

        fader.classList.add('show')
        
        setTimeout(() => {
            document.location.href = target;
        }, 1000);
    }

    render() {
        return (
            <section className="section" data-section-name="understanding-the-method" id="two">
                <Top 
                    t1='Understanding the method'
                    t2='Each section below gives some background information on the method, why it was created, the added value it can bring to your business and why it is superior over commonly used render styles.'
                    />
                <div className="content">
                    <div className="block">
                        <div id="carousel">
                            <Slider {...settings}>
                                <div className="item">
                                    <div className="title">Section 1 - <strong>Who</strong> I am</div>
                                    <div className="image">
                                        <Link to="/who-i-am" onClick={this.handleClick}>
                                            <img src={thumb01} data-to="/who-i-am" alt='who I am' />
                                        </Link>
                                    </div>
                                    <div className="text">A short introduction about me and my background.</div>
                                </div>
                                <div className="item">
                                    <div className="title">Section 2 - <strong>Where</strong> to add value</div>
                                    <div className="image">
                                        <Link to="where-to-add-value" onClick={this.handleClick}>
                                            <img src={thumb02} data-to="where-to-add-value" alt='where to add value' />
                                        </Link>
                                    </div>
                                    <div className="text">Mapping a typical customer journey and identifying the best area to add value.</div>
                                </div>
                                <div className="item">
                                    <div className="title">Section 3 - <strong>What</strong> kind of value</div>
                                    <div className="image">
                                        <Link to="what-kind-of-value" onClick={this.handleClick}>
                                            <img src={thumb03} data-to="what-kind-of-value" alt='what kind of value' />
                                        </Link>
                                    </div>
                                    <div className="text">Understanding what kind of value delivers the best results.</div>
                                </div>
                                <div className="item">
                                    <div className="title">Section 4 - <strong>Why</strong> add emotional value</div>
                                    <div className="image">
                                        <Link to="why-add-emotional-value" onClick={this.handleClick}>
                                            <img src={thumb04} data-to="why-add-emotional-value" alt='why add emotional value' />
                                        </Link>
                                    </div>
                                    <div className="text">Discovering the power of emotional purchases.</div>
                                </div>
                                <div className="item">
                                    <div className="title">Section 5 - <strong>How</strong> to add value</div>
                                    <div className="image">
                                        <Link to="how-to-add-value" onClick={this.handleClick}>
                                            <img src={thumb05} data-to="how-to-add-value" alt='how to add value' />
                                        </Link>
                                    </div>
                                    <div className="text">How to apply all this thinking to create a practical solution.</div>
                                </div>
                            </Slider>
                        </div>
                    </div>

                </div>

                <Bottom text='Please scroll down to discover more' />
                
            </section>
        )
    }
}

export default Understanding