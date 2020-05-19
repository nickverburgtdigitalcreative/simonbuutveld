import React, { Component, Fragment } from 'react'
import MyModal from "./utils/MyModal";
import '../App.scss'

import { homepageAnimation, checkOrientation, isMobileDevice } from './utils'

import PreLoader from './PreLoader'
import Helmet from './Helmet'
import Menu from './Menu'

import HomeDesktop from './pages/HomeDesktop'
import HomeMobile from './pages/HomeMobile';
import { homeHOC } from "./utils/HOCs";


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
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
        console.log(this.state)
    }

    /**
     * Rapidly triggering scroll while loading causes issues with css translate3d
     * workaround is to force a 'reset' of the render by setting display off then on again
     */
    fixFullPageJS = () => {
        document.querySelector("#content-wrap").style.setProperty("display", "")
    }

    loadedCallBack = () => {
        this.setState({shouldShow: true})
        this.fixFullPageJS();
    }


    render() {
        const isMobile = this.state.isMobile;
        const Home = homeHOC(HomeDesktop);

        return (
            <Fragment>
                <Helmet title="introduction" />
                <PreLoader isMobile={isMobile} loadedCallback={this.loadedCallBack}/>
                <MyModal />
                <Menu />
                <div id="fader"></div>
                <div id="content-wrap" style={{"display" : "none"}}>
                    { !isMobile
                        ? <Home shouldShow={this.state.shouldShow}/>
                        : <HomeMobile />
                    }
                </div>
            </Fragment>
        );
    }

}

export default App;
