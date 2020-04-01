import React, {Component} from 'react'
import {CountUp} from 'countup.js'
import Deferred from "./utils/Deferred";
import videoCollections from '../data/videoCollections'

import logo from '../images/logo_header.png'


let perfData = window.performance.timing;
let EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart);
let time = parseInt((EstimatedTime / 1000) % 60) * 100;
let animationTime = time / 1000;
let halfTime = time / 2;

const style = {
    loadbar: {
        transition: 'height ' + animationTime + 's ease-in-out',
    },
    imageLoader: {
        transition: 'opacity ' + animationTime + 's ease-in-out',
    }
};


const pageLoad = new Deferred();
document.addEventListener("DOMContentLoaded", () => {
    pageLoad.resolve();
});

class PreLoader extends Component {

    constructor(props) {
        super(props);
        this.contUp = null;
        this.increment = 8.22;
        this.state = {
            loadbarHeight: 0,
            percentage: 0,
        }
    }

    componentDidMount() {
        pageLoad.then(() => {

            if (this.props.isMobile) {
                this.legacyLoad();
            } else {
                this.desktopLoadStart();
            }
        });
    }

    render() {
        if (!this.props.isMobile) {
            style.loadbar.height = this.state.loadbarHeight + "px";
        }

        return (
            <div className="preloader-wrap">
                <div className="loader">
                    <div className="trackbar">
                        <img src={logo} className='image_loader' alt='pre-loader' style={{...style.imageLoader}}/>
                        <div className="loadbar" style={{...style.loadbar}}></div>
                    </div>
                    <div className="percentage" id="percent"></div>
                </div>
            </div>
        )
    }

    legacyLoad() {
        let contUp = new CountUp('percent', 100, {duration: 4, suffix: '%'})
        let delayTime = this.props.isMobile ? time : halfTime;

        setTimeout(() => {
            const loadbar = document.getElementsByClassName('loadbar')
            if (loadbar.length > 0) {
                loadbar[0].classList.add('load')
            }

            const image = document.getElementsByClassName('image_loader')
            if (image.length > 0) {
                image[0].classList.add('opacity')
            }

            contUp.start()

        }, delayTime);


        setTimeout(() => {
            const wrapper = document.getElementsByClassName('preloader-wrap')
            const header = document.getElementsByTagName('header')
            const back = document.getElementById('back')
            const scrollbar = document.getElementsByClassName('scroll-scrolly_visible')
            const nav = document.getElementsByTagName('nav')

            if (nav[0]) {
                nav[0].classList.add('show')
            }

            wrapper[0].classList.add('loaded')
            header[0].classList.add('start_animation')

            if (back) {
                back.classList.add('show')
            }
            if (scrollbar[2]) {
                scrollbar[2].classList.add('show')
            }

            // updateCurrentSectionClass(this.props.current)

        }, time)
    }

    desktopLoadStart() {
        this.contUp = new CountUp('percent', 18, {duration: animationTime, suffix: '%'});
        const image = document.getElementsByClassName('image_loader')
        if (image.length > 0) {
            image[0].classList.add('opacity')
        }
        this.setState({
            percentage: 18,
            loadbarHeight: 18,
        });
        this.contUp.start();
        this.preLoadVideos().then(() => {
            setTimeout( () => {
                this.desktopLoadEnd()
            }, halfTime);
        });
    }

    desktopLoadEnd() {
        const wrapper = document.getElementsByClassName('preloader-wrap')
        const header = document.getElementsByTagName('header')
        const back = document.getElementById('back')
        const scrollbar = document.getElementsByClassName('scroll-scrolly_visible')
        const nav = document.getElementsByTagName('nav')

        if (nav[0]) {
            nav[0].classList.add('show')
        }

        wrapper[0].classList.add('loaded')
        header[0].classList.add('start_animation')

        if (back) {
            back.classList.add('show')
        }
        if (scrollbar[2]) {
            scrollbar[2].classList.add('show')
        }
    }

    preLoadVideos() {
        const promises = [];
        for (let i = 1; i < Object.keys(videoCollections).length; i++) {
            promises.push(
                this.videoGET(
                    videoCollections[i].video, //url
                    (data) => {
                        document.getElementById("video_" + videoCollections[i].id).src = data;
                    },
                    (response) => {
                        console.log(response);
                    })
                    .then(() => {
                        this.contUp.update(this.state.percentage + this.increment);
                        this.setState({
                            percentage: this.state.percentage + this.increment,
                            loadbarHeight: this.state.loadbarHeight + this.increment,
                        });
                    }));
        }

        return Promise.all(promises);
    }

    videoGET(url, onSuccess, onFail) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();

            xhr.open("GET", url, true);
            xhr.responseType = "blob";

            xhr.onload = () => {
                if (xhr.status === 200) {
                    const videoBlob = xhr.response;
                    const vid = window.URL.createObjectURL(videoBlob);
                    resolve(onSuccess(vid));
                } else {
                    reject(onFail(this.response));
                }
            };

            xhr.send();
        });
    }
}

export default PreLoader;