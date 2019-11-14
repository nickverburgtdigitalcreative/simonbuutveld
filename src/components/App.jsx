import React, { Component, Fragment } from 'react'
import MyModal from "./utils/MyModal";
import '../App.scss'

import { 
    viewportWidth, 
    homepageAnimation 
} from './utils'

import PreLoader from './PreLoader'
import Helmet from './Helmet'
import Menu from './Menu'

import HomeDesktop from './pages/HomeDesktop'
import HomeMobile from './pages/HomeMobile';

class App extends Component {

    state = {
        isMobile: false,
    }

    componentWillMount(){
        this.isMobileDevice()
    }
    componentDidMount(){
        document.querySelectorAll(".content").forEach((elem) => {
            console.log(window.outerHeight);
            elem.style.height = window.outerHeight + "px";
        });
        setTimeout(() => {
            homepageAnimation()
        }, 200);

        window.addEventListener('resize', this.isMobileDevice)
        window.addEventListener('orientationchange', homepageAnimation)
    }

    isMobileDevice = () => {
        if (viewportWidth() <= 900){
            document.body.classList.add('isMobile')
            this.setState({
                isMobile: true,
            })
        } else {
            document.body.classList.remove('isMobile')
            this.setState({
                isMobile: false,
            })
        }
    }


    render() {

        const { isMobile } = this.state

        return (
            <Fragment>
                <Helmet title="introduction" />
                <PreLoader isMobile={isMobile}/>
                <MyModal />
                <Menu />
                <div id="fader"></div>
                { !isMobile 
                    ? <HomeDesktop />
                    : <HomeMobile />
                }     
            </Fragment>
        );
    }

}

export default App;
