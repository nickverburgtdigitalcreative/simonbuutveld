import React, { Component, Fragment } from 'react'
import { section2_graph, innerPageSlideUp, bodyHeight } from '../utils'
import scrollbar from '../utils/Scrollbar'
import BackButton from '../utils/BackButton'
import HelmetMeta from '../Helmet'
import PreLoader from '../PreLoader'

import SubHero02 from '../../images/subpages/sub_hero_02.jpg'
import carousel_02 from '../../images/carousel_02.png'


class WhereToAddValue extends Component {

    componentDidMount() {

        bodyHeight()
        scrollbar()

        const graph = document.getElementsByClassName('graph')
        const cover = document.getElementById('graph_s02g01')

        cover.style.height = graph[0].offsetWidth * 0.4 + 'px'
        
        window.addEventListener('resize', () => {
            const graph = document.getElementsByClassName('graph')
            const cover = document.getElementById('graph_s02g01')
            
            cover.style.height = graph[0].offsetWidth * 0.4 + 'px'
        }, false)
        
        innerPageSlideUp()
        section2_graph()
    }

    render() {

        return (
            <Fragment>
                <PreLoader />
                <HelmetMeta title='Where to add value' />
                <BackButton />
                <div id="subpage">
                    <div id="fader"></div>
                    <div className='scroller'>


                        <div className="intro" style={{ backgroundImage: ' url( ' + SubHero02 + ')' }}>
                            <img src={carousel_02} alt="The Customer Experience" />
                            <div className="alpha_dark"></div>
                        </div>

                        <div className="page">
                            <div className="top2">
                                <div className="col2">
                                    <div className="t1"><strong>Where</strong> to add value</div>
                                    <div className="t2">THE CUSTOMER JOURNEY</div>
                                </div>
                            </div>
                            <div className="paragraph"><p>This graph shows a broad and simplified but typical customer journey. From discovering and selecting an Architect to their occupation of the home. Because the primary area of interest is in the first phase of this journey which is the Design and Costing phase, this part of the graph has been expanded.</p><p>This journey is applicable for a Developer coming to an Architect as well. It is true if the design is bespoke, or a change to an existing plan.</p><p>The red line indicates the ups and downs the customer experiences during the process. Obviously during the process there are moments where the customer feels good and bad. These moments have an effect on the customers compliancy. That is how easy they are to deal with and how likely or unlikely they are to comply with the Architects wishes. For example, a high level of compliancy can mean a customer says yes to a more expensive material the Architect thinks will work best. And a low compliancy can mean excessive design changes that cost time and money.</p><p>As indicated, the lowest point during this process occurs at the initial design presentation. It is here that the process needs the most help. So it is here that the most value can be added.</p><p>Adding value to this area also indicates that the subsequent areas will also see improvement. This is because each time the customer has a positive experience, they look forward to the next one. This means they enter each meeting with a positive mindset, that continues to build.</p></div>

                            <div id="section2_graph1" className="graph_holder">
                                <div className="graph">
                                    <div id="graph_s02g01">
                                        <div className="subFull" id="cover"></div>
                                        <div id="line_grey"></div>
                                        <div className="ring" id="r01"></div>
                                        <div className="ring" id="r02"></div>
                                        <div className="ring" id="r03"></div>
                                        <div className="ring" id="r04"></div>
                                        <div className="ring" id="r05"></div>
                                        <div className="ring" id="r06"></div>
                                        <div className="ring" id="r07"></div>
                                        <div className="ring" id="r08"></div>
                                        <div id="marker"></div>
                                        <div className="subFull" id="legend"></div>
                                        <div className="subFull" id="bg02"></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default WhereToAddValue