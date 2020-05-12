import React, { Component, Fragment } from 'react'
import MyModal from "./utils/MyModal";
import '../App.scss'

import {
    viewportWidth, homepageAnimation, checkOrientation, isMobileDevice
} from './utils'

import PreLoader from './PreLoader'
import Helmet from './Helmet'
import Menu from './Menu'

import HomeDesktop from './pages/HomeDesktop'
import HomeMobile from './pages/HomeMobile';

class App extends Component {

    state = {
        isMobile: isMobileDevice()
    };

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
        console.log(this.state)
    }

    /**
     * Rapidly triggering scroll while loading causes issues with css translate3d
     * workaround is to force a 'reset' of the render by setting display off then on again
     */
    fixFullPageJS = () => {
        document.querySelector("#content-wrap").style.setProperty("display", "")
    }


    render() {
        const isMobile = this.state.isMobile;

        return (
            <Fragment>
                <Helmet title="introduction" />
                <PreLoader isMobile={isMobile} loadedCallback={this.fixFullPageJS}/>
                <MyModal />
                <Menu />
                <div id="fader"></div>
                <div id="content-wrap" style={{"display" : "none"}}>
                    { !isMobile
                        ? <HomeDesktop />
                        : <HomeMobile />
                    }
                </div>
            </Fragment>
        );
    }

}

export default App;
