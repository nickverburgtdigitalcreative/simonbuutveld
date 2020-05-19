import React, { Component, Fragment } from 'react'
import { innerPageSlideUp, section4Animation01, section4Animation02, bodyHeight } from '../utils'
import scrollbar from '../utils/Scrollbar'
import BackButton from '../utils/BackButton'
import HelmetMeta from '../Helmet'
import PreLoader from '../PreLoader'

import SubHero04 from '../../images/subpages/sub_hero_04.jpg'
import carousel_04 from '../../images/carousel_04.png'
import s4_cars_redL from '../../images/animations/s4_cars_redL.jpg'
import s4_cars_redR from '../../images/animations/s4_cars_redR.jpg'
import s4_cars_bg from '../../images/animations/s4_cars_bg.jpg'
import s4_house_red from '../../images/animations/s4_house_red.png'
import s4_house_bg from '../../images/animations/s4_house_bg.jpg'

class WhyAddEmotionalValue extends Component {

    componentDidMount() {
        bodyHeight()
        scrollbar()

        const graphCarsW = document.getElementById('s4_cars_bg')
        const graphHouseW = document.getElementById('s4_house_bg');

        const cars = document.getElementById('s4_cars')
        const house = document.getElementById('s4_house')

        cars.style.height = graphCarsW.offsetWidth * 0.25 + 'px'
        house.style.height = graphHouseW.offsetWidth * 0.6246 + 'px'

        section4Animation01()
        section4Animation02()
    }

    preLoaderCallback() {
        innerPageSlideUp()
    }

    render() {

        return (
            <Fragment>
                <PreLoader loadedCallback={this.preLoaderCallback}/>
                <HelmetMeta title='Why add emotional value' />
                <BackButton />
                <div id="subpage">
                    <div id="fader"></div>
                    <div className='scroller'>


                        <div className="intro" style={{ backgroundImage: ' url( ' + SubHero04 + ')' }}>
                            <img src={carousel_04} alt="Emotional Purchases" />
                            <div className="alpha_dark"></div>
                        </div>

                        <div className="page">
                            <div className="top2">
                                <div className="col2">
                                    <div className="t1"><strong>Why</strong> add emotional value</div>
                                    <div className="t2">It can be and often is the deciding factor</div>
                                </div>
                            </div>
                            <div className="paragraph">
                                <p>
                                    This can be the case especially when people are weighing
                                    up the pro’s and con’s of two similar items. Like the two cars shown below here.
                            </p>
                                <p>
                                    For all intents and purposes the two cars are the same. The same size, number of
                                    doors, engine size, fuel economy, colour etc. But there will be a reason why a
                                    customer will choose one over the other. This reason is an emotional connection
                                    the customer forms to one of the cars. They will use language like “I just see
                                    myself in that one” or “I don’t know why I like that one, I just like it more”.
                                    This is when you can tell an emotional connection has been formed.
                            </p>
                                <p>
                                    Once an emotional connection has been formed it is extremely difficult to break.
                                    Even if the two items being compared are vastly different in rational terms, for example,
                                    one car is vastly more powerful, economical etc. These factors will still not be able to
                                    persuade the customer to purchase with their head rather than with their heart. An emotional
                                    purchase will beat a rational purchase every time.
                            </p>
                            </div>
                            <div className="graph_full">

                                <div id="s4_cars">
                                    <div id="s4_cars_redL"><img src={s4_cars_redL} alt="red car on the left" /></div>
                                    <div id="s4_cars_redR"><img src={s4_cars_redR} alt="red car on the right" /></div>
                                    <div id="s4_cars_bg"><img src={s4_cars_bg} alt="black and white cars" /></div>
                                </div>
                            </div>
                            <div className="paragraph">
                                <p>
                                    It is important to mention than emotional purchases as they are being described here refer
                                    to purchases where an emotional connection is the deciding factor as to why the customer
                                    selects one item over another.
                            </p>
                                <p>
                                    The images below show a series of emotional purchases.
                                    The size of the image is proportional to the price. The house or property is by far the
                                    most expensive item. So it is very important to make sure that the customer forms an
                                    emotional connection with their initial house/property design.
                            </p>
                            </div>
                            <div className="graph_full">
                                <div id="s4_house">
                                    <div id="s4_house_red"><img src={s4_house_red} alt='house in red' /></div>
                                    <div id="s4_house_bg"><img src={s4_house_bg} alt='house in black and white' /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default WhyAddEmotionalValue