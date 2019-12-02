import React, { Component } from 'react'
import { Waypoint } from 'react-waypoint';

import Introduction from './../Introduction'
import Understanding from './../Understanding'
import MethodMobile from './../MethodMobile'
import VideosMobile from './../VideosMobile'
import Contact from './../Contact';

import videoCollections from '../../data/videoCollections'

class HomeMobile extends Component {

    restartVideo(id) {
        const video = document.getElementById(id)
        const backgroundImage = document.getElementsByClassName(id)[0]
        if (video){
            backgroundImage.classList.remove('show')
            //video.setAttribute('controls', true)
            video.pause()
            video.currentTime = 0
            video.classList.remove('hide')
            video.parentElement.classList.remove("playing")
        }
    }
    setVideoState(id) {
        const videoSection = document.querySelector(id);
        const video = videoSection.querySelector("video");
        videoSection.classList.add("playing");
    }

    render() {
        return (
            <div id="mobile_home">
                <section id="introduction">
                    <div id='section-0' className='section section_mobile introduction'>
                        <Introduction />
                    </div>
                </section>
                <section id="understanding">
                    <div id='section-1' className='section section_mobile understanding'>
                        <Understanding />
                    </div>
                </section>
                <section id="method">
                    <div id='section-2' className='section section_mobile method'>
                        <MethodMobile />
                    </div>
                </section>
                <Waypoint onLeave={() => this.restartVideo('video_1')}>
                    <section id="video1">
                        <div id='section-3' className='section section_mobile video video1'>
                            <VideosMobile video={videoCollections[1]} callback={this.setVideoState}/>
                        </div>
                    </section>
                </Waypoint>
                <Waypoint onLeave={() => this.restartVideo('video_2')}>
                    <section id="video2" ref={(section) => { this.video2 = section }}>
                        <div id='section-4' className='section section_mobile video video2'>
                            <VideosMobile video={videoCollections[2]} callback={this.setVideoState}/>
                        </div>
                    </section>
                </Waypoint>
                <Waypoint onLeave={() => this.restartVideo('video_3')}>
                    <section id="video3">
                        <div id='section-5' className='section section_mobile video video3'>
                            <VideosMobile video={videoCollections[3]} callback={this.setVideoState}/>
                        </div>
                    </section>
                </Waypoint>
                <Waypoint onLeave={() => this.restartVideo('video_4')}>
                    <section id="video4">
                        <div id='section-6' className='section section_mobile video video4'>
                            <VideosMobile video={videoCollections[4]} callback={this.setVideoState}/>
                        </div>
                    </section>
                </Waypoint>
                <Waypoint onLeave={() => this.restartVideo('video_5')}>
                    <section id="video5">
                        <div id='section-7' className='section section_mobile video video5'>
                            <VideosMobile video={videoCollections[5]} callback={this.setVideoState}/>
                        </div>
                    </section>
                </Waypoint>
                <Waypoint onLeave={() => this.restartVideo('video_6')}>
                    <section id="video6">
                        <div id='section-8' className='section section_mobile video video6'>
                            <VideosMobile video={videoCollections[6]} callback={this.setVideoState}/>
                        </div>
                    </section>
                </Waypoint>
                <Waypoint onLeave={() => this.restartVideo('video_7')}>
                    <section id="video7">
                        <div id='section-9' className='section section_mobile video video7'>
                            <VideosMobile video={videoCollections[7]} callback={this.setVideoState}/>
                        </div>
                    </section>
                </Waypoint>
                <Waypoint onLeave={() => this.restartVideo('video_8')}>
                    <section id="video8">
                        <div id='section-10' className='section section_mobile video video8'>
                            <VideosMobile video={videoCollections[8]} callback={this.setVideoState}/>
                        </div>
                    </section>
                </Waypoint>
                <Waypoint onLeave={() => this.restartVideo('video_9')}>
                    <section id="video9">
                        <div id='section-11' className='section section_mobile video video9'>
                            <VideosMobile video={videoCollections[9]} callback={this.setVideoState}/>
                        </div>
                    </section>
                </Waypoint>
                <Waypoint onLeave={() => this.restartVideo('video_10')}>
                    <section id="video10">
                        <div id='section-12' className='section section_mobile video video10'>
                            <VideosMobile video={videoCollections[10]} callback={this.setVideoState}/>
                        </div>
                    </section>
                </Waypoint>
                <Waypoint onLeave={() => this.restartVideo('video_11')}>
                    <section id="video11">
                        <div id='section-13' className='section section_mobile video video11'>
                            <VideosMobile video={videoCollections[11]} callback={this.setVideoState}/>
                        </div>
                    </section>
                </Waypoint>
                <section id="contact">
                    <div id='section-14' className='section section_mobile contact'>
                        <Contact />
                    </div>
                </section>
            </div>
        )
    }
}

export default HomeMobile;