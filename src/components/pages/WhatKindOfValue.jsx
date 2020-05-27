import React, { Component, Fragment } from 'react'
import {
    drawDonutChartTrigger,
    innerPageSlideUp,
    section3_quadrant,
    section3_graph3,
    bodyHeight,
    viewportWidth, isMobileDevice,
} from '../utils'
import scrollbar from '../utils/Scrollbar'
import BackButton from '../utils/BackButton'
import HelmetMeta from '../Helmet'
import PreLoader from '../PreLoader'

import SubHero03 from '../../images/subpages/sub_hero_03.jpg'
import carousel_03 from '../../images/carousel_03.png'
import leif from '../../images/leif.png'

const donut1RadiusDesktop = 370
const donut2RadiusDesktop = 310
const donut1RadiusMobile = 390
const donut2RadiusMobile = 300

class WhatKindOfValue extends Component {

    componentDidMount() {

        bodyHeight()
        scrollbar()
        setSpacing();

        section3_quadrant()
        drawDonutChartTrigger(donut1RadiusDesktop, donut2RadiusDesktop, 2, 'desktop')
        drawDonutChartTrigger(donut1RadiusMobile, donut2RadiusMobile, 3, 'mobile')
        section3_graph3()

        window.addEventListener('resize', () => {
            setSpacing();
        }, false)

    }

    preLoaderCallback() {
        innerPageSlideUp()
    }


    render() {

        return (
            <Fragment>
                <PreLoader loadedCallback={this.preLoaderCallback}/>
                <HelmetMeta title='What Kind Of Value' />
                <BackButton />
                <div id="subpage">
                    <div id="fader"></div>
                    <div className='scroller'>

                        <div className="intro" style={{ backgroundImage: ' url( ' + SubHero03 + ')' }}>
                            <img src={carousel_03} alt="Identifying the trigger" />
                            <div className="alpha_dark"></div>
                        </div>

                        <div className="page">
                            <div className="top2">
                                <div className="col2">
                                    <div className="t1"><strong>What</strong> kind of value</div>
                                    <div className="t2">HOW INFORMATION IS PERCEIVED</div>
                                </div>
                            </div>
                            <div className="paragraph">
                                <p>The diagram below has been created by a team of psychologists to help understand
                                how different kinds of information matters to people.</p>
                                <p>The various moments from our customer journey are placed in the diagram according
                                    to the information people want to see at that time. For example the quote
                                    moments are situated in the bottom left corner. This is because the kind of
                                    information that needs to be conveyed at this time is USEFUL and PERSONALISED.
                                The quote doesn’t mean anything to anyone else.</p>
                                <p>The moment where the customer is being made aware of the company by viewing their
                                    website for example, is situated in the top of the diagram. The information
                                    they will be viewing should be BROAD and somewhat ENTERTAINING.
                                    Every potential customer will be viewing this information and whether
                                    they are impressed or not will be the reason they choose to contact the
                                company or not.</p>
                                <p>The area identified where the most value can be added (the initial design
                                    presentation), is sitting in the lower right corner. That’s because the
                                    information the customer wants to see at this point is PERSONALISED and
                                ENTERTAINING. It is their home they want to see, not anyone elses.</p>
                                <p>Now the moments are placed, the information that matters to people can be
                                    identified. During the initial design presentation, the information the
                                customer views will only matter to them if they are drawn into it emotionally.</p>
                            </div>

                            <div id="section3_graph1">
                                <div className="graph">
                                    <div id="graph_s03g01">
                                        <div className="subFull" id="cross"></div>
                                        <div className="subFull dots" id="dot01"></div>
                                        <div className="subFull dots" id="dot02"></div>
                                        <div className="subFull dots" id="dot03"></div>
                                        <div className="subFull dots" id="dot04"></div>
                                        <div className="subFull dots" id="dot05"></div>
                                        <div className="subFull dots" id="dot06"></div>
                                        <div className="subFull dots" id="dot07"></div>
                                        <div className="subFull dots" id="dot08"></div>
                                        <div className="subFull quarters" id="quarter01"></div>
                                        <div className="subFull quarters" id="quarter02"></div>
                                        <div className="subFull quarters" id="quarter03"></div>
                                        <div className="subFull quarters" id="quarter04"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="top2">
                                <div className="col2">
                                    <div className="t1"><strong>What</strong> kind of value</div>
                                    <div className="t2">How emotion matters</div>
                                </div>
                            </div>
                            <div className="paragraph">
                                <p>People are starting to see the power and value of emotion and how it is now more relevant
                                    than ever, to the extent where major companies are changing their entire corporate model
                                to best utilise it.</p>
                                <p>Here is a recent example about communications group DDB and what they are doing to
                                leverage the concept.</p>
                            </div>
                            <div id="sec3_inspiration">
                                <img src={leif} alt='Leif Stromnes' />
                                <p>“What we’ve done is challenge long-standing marketing beliefs of what’s important to brands
            and how people make decisions”</p>
                                <p>“Feeling conquers thinking”</p>
                                <p>“Winning the mind of the consumer is not as important as emotionally connecting
            to the mind of a consumer”</p>
                                <p>“DDB needs to be doing famous advertising that moves people emotionally”.</p>
                                <p><strong>LEIF STROMNES</strong> - DDB Australia MD of strategy and innovation</p>
                            </div>
                            <div className="paragraph"><p>DDB’s three tiered strategy (new busines model) was inspired by research
                                from Peter Field and Les Binet that found that fame and feelings work much harder for business than
                            rational persuasion. - <em>Adnews</em></p>
                                <p>Both Peter Field and Les Binet are in charge of effectiveness in their respective agencies.
                                Peter Field is even commonly referred to as ‘The Godfather of Effectiveness’. Their concern
                            is not how creative the ads their companies make are, but how effective they are.</p>
                                <p>
                                    The diagram below from neuromarketing describes how effective emotional advertising campaigns
                                are vs rational campaigns.
                            </p>
                            </div>

                            <div id="section3_graph2" className="loaded aniLoaded">
                                <div id="donut-wrap" className="graph">
                                    <div id="graph_s03g02">
                                        <div className="donut" id="donut1">
                                            <svg width={donut1RadiusDesktop} height={donut1RadiusDesktop} className="placeholder_donut desktop">
                                                <g transform="translate(185,185)">
                                                    <path className="color0" d="M1.1327982892113017e-14,-185A185,185,0,0,1,156.20066621787282,-99.12795707111437L130.87082845281236,-83.05315322174447A155,155,0,0,0,9.491012693391987e-15,-155Z"></path>
                                                    <path className="color1" d="M156.20066621787282,-99.12795707111437A185,185,0,1,1,-3.398394867633905e-14,-185L-2.847303808017596e-14,-155A155,155,0,1,0,130.87082845281236,-83.05315322174447Z"></path>
                                                </g>
                                            </svg>
                                            <svg width={donut1RadiusMobile} height={donut1RadiusMobile} className="placeholder_donut mobile">
                                                <g transform="translate(195,195)">
                                                    <path className="color0" d="M7.960204194457796e-15,-130A130,130,0,0,1,109.76263031526197,-69.65748334726955L84.43279255020151,-53.582679497899655A100,100,0,0,0,6.123233995736766e-15,-100Z"></path>
                                                    <path className="color1" d="M109.76263031526197,-69.65748334726955A130,130,0,1,1,-2.3880612583373385e-14,-130L-1.8369701987210297e-14,-100A100,100,0,1,0,84.43279255020151,-53.582679497899655Z"></path>
                                                </g>
                                            </svg>
                                        </div>
                                        <div className="donut" id="donut2">
                                            <svg width={donut2RadiusDesktop} height={donut2RadiusDesktop} className="placeholder_donut desktop">
                                                <g transform="translate(155,155)">
                                                    <path className="color0" d="M9.491012693391987e-15,-155A155,155,0,0,1,144.11535531267896,57.05930566612509L116.22206073603142,46.01556908558475A125,125,0,0,0,7.654042494670958e-15,-125Z"></path>
                                                    <path className="color1" d="M144.11535531267896,57.05930566612509A155,155,0,1,1,-2.847303808017596e-14,-155L-2.2962127484012872e-14,-125A125,125,0,1,0,116.22206073603142,46.01556908558475Z"></path>
                                                </g>
                                            </svg>
                                            <svg width={donut2RadiusMobile} height={donut2RadiusMobile} className="placeholder_donut mobile">
                                                <g transform="translate(150,150)">
                                                    <path className="color0" d="M6.123233995736766e-15,-100A100,100,0,0,1,92.97764858882513,36.8124552684678L65.0843540121776,25.76871868792746A70,70,0,0,0,4.2862637970157365e-15,-70Z"></path>
                                                    <path className="color1" d="M92.97764858882513,36.8124552684678A100,100,0,1,1,-1.8369701987210297e-14,-100L-1.2858791391047208e-14,-70A70,70,0,1,0,65.0843540121776,25.76871868792746Z"></path>

                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                    <div id="donutBg">
                                        <div className="black">
                                            <p id="donutBg1"></p>
                                            <p>report the same with rational campaigns</p>
                                        </div>
                                        <div className="red">
                                            <p id="donutBg2"></p>
                                            <p>of advertisers report significant profit gains with emotional campaigns</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="top2">
                                <div className="col2">
                                    <div className="t1"><strong>What</strong> kind of value</div>
                                    <div className="t2">Adding emotion into the mix</div>
                                </div>
                            </div>
                            <div className="paragraph mb-responsive">
                                <p>The diagram below describes a simplified but common initial design presentation content mix.</p>
                                <p>By adding emotion into this presentation format the customer receives the information they want in the way that matters to them. This becomes a powerful tool to increase customer compliancy.</p>
                            </div>
                            <div id="section3_graph3" className="mb-responsive">

                                <div id="section-3-container" className="graph">
                                    <div id="venn-wrap">
                                        <div id="graph_s03g03">
                                            <div className="subFull" id="rings"></div>
                                            <div className="subFull" id="ring"></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="top2">
                                <div className="col2">
                                    <div className="t1"><strong>What</strong> kind of value</div>
                                    <div className="t2">Summary so far</div>
                                </div>
                            </div>

                            <div className="paragraph para_outro">
                                <p>At the <strong>INITIAL DESIGN</strong> phase of the customer journey there
                                is a key moment where we can trigger an <strong>EMOTIONAL CONNECTION</strong>.</p>
                                <p>This connection will solidify the customer's choice of selecting <strong>YOUR BUSINESS</strong> and
                                significantly smooth the process from this point on, saving time and money.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

function setSpacing() {
    // if(!isMobileDevice()) {
    //     return;
    // }
    const s3g1 = document.getElementById('graph_s03g01')
    const s3g2 = document.getElementById('graph_s03g02');
    const s3g3 = document.getElementById('graph_s03g03');

    console.log(s3g1);
    s3g1.style.height = s3g1.offsetWidth * 0.8 + 'px'
    s3g2.style.height = s3g2.offsetWidth * (isMobileDevice() && viewportWidth() <=667 ? 0 : 0.4) + 'px'
    // s3g3.style.height = s3g3.offsetWidth * (isMobileDevice() && viewportWidth() <=667 ? 0.4 : 0.6) + 'px'
}

export default WhatKindOfValue