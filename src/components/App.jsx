import React, { Component, Fragment } from 'react'
import MyModal from "./utils/MyModal";
import '../App.scss'

import {homepageAnimation, checkOrientation, isMobileDevice, updateCurrentSectionClass, videosAnimation} from './utils'

import PreLoader from './PreLoader'
import Helmet from './Helmet'
import Menu from './Menu'

import HomeDesktop from './pages/HomeDesktop'
import HomeMobile from './pages/HomeMobile';
import { homeHOC } from "./utils/HOCs";


/**
 * Bad naming convention; this is not the 'app' itself, but rather a wrapper component for the homepage.
 * 'Router' is the actual component that should be named 'app'
 */

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            current: 0,
            isMobile: isMobileDevice(),
            shouldShow: false,
        };
    }

    componentDidMount(){
        setTimeout(() => {
            homepageAnimation()
        }, 200);

        window.addEventListener('resize', () => {
            checkOrientation();
        });

        window.addEventListener('orientationchange', () => {
            homepageAnimation();

            if(this.state.isMobile === false) {
                document.body.classList.add('isMobile');
                this.setState({
                    isMobile: true,
                })
            }
        })
    }

    /**
     * Rapidly triggering scroll while loading causes issues with css translate3d
     * workaround is to force a 'reset' of the render by setting display off then on again
     */
    fixFullPageJS = () => {
        document.querySelector("#content-wrap").style.setProperty("display", "")
    }

    updateCurrentSection = (current) => {
        updateCurrentSectionClass( current )
        this.setState({
            current
        })
    }

    scrollCallback = (states) => {
        this.updateCurrentSection(states.activeSection)
        if (states.activeSection >= 3 && states.activeSection < 14) {
            videosAnimation(states.activeSection)
        }
    }

    loadedCallBack = () => {
        this.setState({shouldShow: true})
        this.fixFullPageJS();
        this.updateCurrentSection(this.state.current)
    }

    render() {
        const isMobile = this.state.isMobile;

        return (
            <Fragment>
                <Helmet title="introduction" />
                <PreLoader isMobile={isMobile} loadedCallback={this.loadedCallBack}/>
                <MyModal />
                <Menu />
                <div id="fader"></div>
                <div id="content-wrap" style={{"display" : "none"}}>
                    { !isMobile
                        ? <HomeDesktop current={this.state.current} scrollCB={this.scrollCallback}/>
                        : <HomeMobile />
                    }
                </div>
            </Fragment>
        );
    }

}

export default App;
