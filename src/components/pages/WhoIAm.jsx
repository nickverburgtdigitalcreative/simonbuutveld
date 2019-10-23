import React, { Component, Fragment } from 'react'
import { innerPageSlideUp, bodyHeight } from "../utils";
import scrollbar from '../utils/Scrollbar'
import BackButton from '../utils/BackButton'
import HelmetMeta from '../Helmet'
import PreLoader from '../PreLoader'

import SubHero01 from '../../images/subpages/sub_hero_01.jpg'
import carousel_01 from '../../images/carousel_01.png'
import portfolio01 from '../../images/portfolio/portfolio_01.jpg'
import portfolio02 from '../../images/portfolio/portfolio_02.jpg'
import portfolio03 from '../../images/portfolio/portfolio_03.jpg'
import portfolio04 from '../../images/portfolio/portfolio_04.jpg'
import portfolio05 from '../../images/portfolio/portfolio_05.jpg'
import portfolio06 from '../../images/portfolio/portfolio_06.jpg'
import portfolio07 from '../../images/portfolio/portfolio_07.jpg'
import portfolio08 from '../../images/portfolio/portfolio_08.jpg'
import portfolio09 from '../../images/portfolio/portfolio_09.jpg'
import portfolio10 from '../../images/portfolio/portfolio_10.jpg'
import portfolio11 from '../../images/portfolio/portfolio_11.jpg'
import portfolio12 from '../../images/portfolio/portfolio_12.jpg'
import portfolio13 from '../../images/portfolio/portfolio_13.jpg'
import portfolio14 from '../../images/portfolio/portfolio_14.jpg'
import portfolio15 from '../../images/portfolio/portfolio_15.jpg'
import portfolio16 from '../../images/portfolio/portfolio_16.jpg'
import portfolio17 from '../../images/portfolio/portfolio_17.jpg'
import portfolio18 from '../../images/portfolio/portfolio_18.jpg'
import portfolio19 from '../../images/portfolio/portfolio_19.jpg'
import portfolio20 from '../../images/portfolio/portfolio_20.jpg'
import portfolio21 from '../../images/portfolio/portfolio_21.jpg'
import portfolio22 from '../../images/portfolio/portfolio_22.jpg'
import portfolio23 from '../../images/portfolio/portfolio_23.jpg'
import portfolio24 from '../../images/portfolio/portfolio_24.jpg'

class WhoIAm extends Component {

    componentDidMount() {

        bodyHeight()
        scrollbar()

        const image = document.querySelectorAll('.portfolio div')
        const imagesHeight = image[0].offsetWidth * 0.88 + 'px'
        const portfolioDiv = document.getElementsByClassName('portfolio')

        image.forEach(item => item.style.height = imagesHeight)
        portfolioDiv[0].style.marginBottom = imagesHeight

        innerPageSlideUp()

        document.addEventListener('touchstart', function(){}, true)
    }

    render() {

        return (
            <Fragment>
                <PreLoader />
                <HelmetMeta title='Who I am' />
                <BackButton />
                <div id="subpage">
                    <div id="fader"></div>
                    <div className='scroller'>


                        <div className="intro" style={{ backgroundImage: ' url( ' + SubHero01 + ')' }}>
                            <img src={carousel_01} alt="Simon Buutveld" />
                            <div className="alpha_dark"></div>
                        </div>

                        <div className="page">
                            <div className="top2">
                                <div className="col2">
                                    <div className="t1"><strong>Who</strong> I am</div>
                                    <div className="t2">A SHORT INTRODUCTION</div>
                                </div>
                            </div>
                            <div className="paragraph">I am a national and international award-winning advertising creative. I have considerable experience providing creative solutions to clients all over the world. Through my experiences I have gained a wide range of skills, from creative development and design, to client liaison and brand strategy. I have worked for world leading creative agencies.</div>
                            <div className="portfolio">
                                <div style={{ backgroundImage: ' url( ' + portfolio01 + ')' }}></div>
                                <div style={{ backgroundImage: ' url( ' + portfolio02 + ')' }}></div>
                                <div style={{ backgroundImage: ' url( ' + portfolio03 + ')' }}></div>
                                <div style={{ backgroundImage: ' url( ' + portfolio04 + ')' }}></div>
                                <div style={{ backgroundImage: ' url( ' + portfolio05 + ')' }}></div>
                                <div style={{ backgroundImage: ' url( ' + portfolio06 + ')' }}></div>
                                <div style={{ backgroundImage: ' url( ' + portfolio07 + ')' }}></div>
                                <div style={{ backgroundImage: ' url( ' + portfolio08 + ')' }}></div>
                                <div style={{ backgroundImage: ' url( ' + portfolio09 + ')' }}></div>
                                <div style={{ backgroundImage: ' url( ' + portfolio10 + ')' }}></div>
                                <div style={{ backgroundImage: ' url( ' + portfolio11 + ')' }}></div>
                                <div style={{ backgroundImage: ' url( ' + portfolio12 + ')' }}></div>
                                <div style={{ backgroundImage: ' url( ' + portfolio13 + ')' }}></div>
                                <div style={{ backgroundImage: ' url( ' + portfolio14 + ')' }}></div>
                                <div style={{ backgroundImage: ' url( ' + portfolio15 + ')' }}></div>
                                <div style={{ backgroundImage: ' url( ' + portfolio16 + ')' }}></div>
                                <div style={{ backgroundImage: ' url( ' + portfolio17 + ')' }}></div>
                                <div style={{ backgroundImage: ' url( ' + portfolio18 + ')' }}></div>
                                <div style={{ backgroundImage: ' url( ' + portfolio19 + ')' }}></div>
                                <div style={{ backgroundImage: ' url( ' + portfolio20 + ')' }}></div>
                                <div style={{ backgroundImage: ' url( ' + portfolio21 + ')' }}></div>
                                <div style={{ backgroundImage: ' url( ' + portfolio22 + ')' }}></div>
                                <div style={{ backgroundImage: ' url( ' + portfolio23 + ')' }}></div>
                                <div style={{ backgroundImage: ' url( ' + portfolio24 + ')' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default WhoIAm