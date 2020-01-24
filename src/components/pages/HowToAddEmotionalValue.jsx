import React, { Component, Fragment } from 'react'

import HelmetMeta from '../Helmet'
import PreLoader from '../PreLoader'
import { 
    innerPageSlideUp, 
    section5Animation01, 
    section5Video1, 
    bodyHeight,
    dotAnimation,
} from '../utils'
import scrollbar from '../utils/Scrollbar'
import BackButton from '../utils/BackButton'

import carousel_05 from '../../images/carousel_05.png'
import SubHero05 from '../../images/subpages/sub_hero_05.jpg'
import Image01 from '../../images/section5_img01.jpg'
import Image02 from '../../images/section5_img02.jpg'
import Image03 from '../../images/section5_img03.jpg'
import Image04 from '../../images/section5_img04.jpg'
import Image05 from '../../images/section5_img05.jpg'
import Image06 from '../../images/section5_img06.jpg'
import s5_robots_redL from '../../images/animations/s5_robots_redL.jpg'
import s5_robots_redR from '../../images/animations/s5_robots_redR.jpg'
import s5_robots_bg from '../../images/animations/s5_robots_bg_Si-made.jpg'


class HowToAddEmotionalValue extends Component {

    componentDidMount() {
        setTimeout(() => {
            innerPageSlideUp()
        }, 1000);

        bodyHeight()    
        scrollbar()
        
        const graphRobotsW = document.getElementById('s5_robots_bg')
        const robot = document.getElementById('s5_robots')

        robot.style.height = graphRobotsW.offsetWidth * 0.3294 + 'px'

        section5Animation01()
        section5Video1()
        dotAnimation()

    }

    render() {

        return (
            <Fragment>
                <PreLoader />
                <HelmetMeta title='How to Add Value' />
                <BackButton />
                <div id="subpage">
                    <div id="fader"></div>
                    <div className='scroller'>

                        <div className="intro" style={{ backgroundImage: ' url( ' + SubHero05 + ')' }}>
                            <img src={carousel_05} alt="Adding the Emotional Trigger" />
                            <div className="alpha_dark"></div>
                        </div>

                        <div className="page">
                            <div className="top2">
                                <div className="col2">
                                    <div className="t1"><strong>How</strong> to add value</div>
                                    <div className="t2">Giving something emotional qualities</div>
                                </div>
                            </div>
                            <div className="paragraph">
                                <p className="redxl">For someone to form an emotional connection to something, it needs to have a human element to it they can connect with.</p>
                                <p>The two images below show two robots, but only one has been given qualities that allow a person to make an emotional connection with it.</p>
                            </div>
                            <div className="graph_full">
                                <div id="s5_robots">
                                    <div id="s5_robots_redL"><img src={s5_robots_redL} alt='Red robot on the left' /></div>
                                    <div id="s5_robots_redR"><img src={s5_robots_redR} alt='Red robot on the right' /></div>
                                    <div id="s5_robots_bg"><img src={s5_robots_bg} alt='black and white robot' /></div>
                                </div>
                            </div>
                            <div className="top2">
                                <div className="col2">
                                    <div className="t1"><strong>How</strong> to add value</div>
                                    <div className="t2">Making it tangible in this environment</div>
                                </div>
                            </div>
                            <div className="paragraph">
                                <p>In the early design phase ideas are just starting to come together. Nothing is solid and nothing should be solid. If a customer is shown something too concrete too early then there is a risk of turning them off. For example they may become fixated on an area that the Architect doesn’t want them to at this stage. This is because they will feel they haven’t had the time to fall in love with it before things progress. It’s like when a relationship moves too fast and one of them gets spooked. The result is them pulling away.</p>
                                <p>However care needs to be taken this process doesn’t become so loose and amorphous that confusion arises over exactly what is being proposed. This can be a problem with traditional basic freestyle sketches. This again is a huge turn off for the customer as they will become so removed from the process they remove the process altogether!</p>
                                <p className="redxl">But something needs to be shown at this stage for the customer to form an emotional connection to.</p>
                                <p>They need to be shown something that is an accurate depiction of the proposed design but still loose enough that they can enjoy it without getting stuck on details they may be unsure about.</p>
                                <p className="redxl">How is something shown that is technically accurate but loose at the same time - and of course, something people can inherently develop an emotional connection with?</p>
                            </div>
                            <div className="top2">
                                <div className="col2">
                                    <div className="t1"><strong>How</strong> to add value</div>
                                    <div className="t2">The answer is<div className="el">
                                        <span className="e1">.</span>
                                        <span className="e2">.</span>
                                        <span className="e3">.</span></div></div>
                                </div>
                            </div>
                            <div className="graph_narrow">
                                <video 
                                    id="section5_art" 
                                    muted={true}
                                    autoPlay={true}
                                    playsInline={true}
                                >
                                    <source src="../videos/section5_artv2.mp4" type="video/mp4" />
                                </video>
                            </div>
                            <div className="paragraph para_outro">
                                <p>In the context as it is being described here, it is a human to human connection between the Architect and the potential buyer, describing a subject very important to both of them. It is a very human/primal method of communication that is accessible to everyone but controlled by one.</p>
                            </div>
                            <div className="top2">
                                <div className="col2">
                                    <div className="t1"><strong>How</strong> to add value</div>
                                    <div className="t2">Why art is the emotional trigger and why choose it over the standard render</div>
                                </div>
                            </div>
                            <div className="paragraph">
                                <p>Because of the inherent emotional qualities that art has. And it’s these emotional qualities that need to be leveraged.</p>
                                <p>Art is gestural – what’s drawn is not just what the building looks like, but how the building feels. This means key features can be highlighted (the parts we know will be a big selling point) without the rest of the building suffering. Art can also imply a building's dynamics and mood through movement and colour. The unique aesthetic also helps to differentiate between competing Architects as they will all be presenting the standard render to their clients.</p>
                                <p>Because CG renders only show how a building physically looks, they can’t convey or certainly trigger an emotional connection. Some of the really labour intensive and incredibly expensive ones try to evoke a certain response by going hyper real, where lights shine from every surface. But this ends up fundamentally denying them of their goal to look real like a photograph. And customers are wise to this, they understand the final construction will never look this way. They know the image to a certain extent is trying to pull the wool over their eyes.</p>
                                <p>Below are a number of commonly used renders. Some are examples of the hyper real style mentioned, others are simply so dull there is nothing for the customer to get excited about and therefore have no chance of creating an emotional connection.</p>
                            </div>
                            <div id="collage" className="ani-sat-box">
                                <img className="ani-sat-item" src={Image01} alt='collage 1' />
                                <img className="ani-sat-item" src={Image02} alt='collage 2' />
                                <img className="ani-sat-item" src={Image03} alt='collage 3' />
                                <img className="ani-sat-item" src={Image04} alt='collage 4' />
                                <img className="ani-sat-item" src={Image05} alt='collage 5' />
                                <img className="ani-sat-item" src={Image06} alt='collage 6' />
                            </div>
                            <div className="paragraph">
                                <p>The beauty of an illustration is that customers know it’s a drawing, so they don’t feel they are being tricked or lied to. There isn’t a disconnect between what they see and what the final building will look like. This helps avoid confusion and potential disappointment further down the line. They feel comfortable when viewing it and this allows an emotional connection to take place.</p>
                                <p>It also brings the aesthetic of the Architect's craft into the mix. People respond to craft, they respect it and they associate value with it.</p>
                                <p>But as mentioned earlier all this emotion doesn’t mean an image can be created that bears no resemblance to the actual design. So the method that has been developed to create these art renders makes the building images perfectly accurate to every dimension the Architect has created.</p>
                            </div>
                            <div className="top2">
                                <div className="col2">
                                    <div className="t1"><strong>How</strong> to add value</div>
                                    <div className="t2">The method</div>
                                </div>
                            </div>
                            <div className="paragraph para_outro">
                                <p>I create bespoke pieces of <strong>ARCHITECTURAL ART</strong> that trigger <strong>EMOTIONAL CONNECTIONS</strong> between the customer and the house or building design. This emotional connection triggered during the <strong>INITIAL DESIGN PHASE</strong> will be the <strong>DECIDING FACTOR</strong> that insures these customers will do anything to realise the proposed design put in front of them.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default HowToAddEmotionalValue


