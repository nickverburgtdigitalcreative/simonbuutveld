import React, {Component, Fragment} from 'react'
import { SectionsContainer, Section } from 'react-fullpage'

import { updateCurrentSectionClass, videosAnimation } from './../utils'
import Introduction from '../Introduction'
import Understanding from '../Understanding'
import Method from '../Method'
import Videos from '../Videos'
import Contact from '../Contact';

import videoCollections from '../../data/videoCollections'


const myAnchors = ['introduction', 'understanding', 'method']
const anchorVideos = Object.keys(videoCollections).map(key => `video${key}`)
const allAnchors = myAnchors.concat(anchorVideos, 'contact')

class HomeDesktop extends Component {


    state = {
        current: 0,
    }

    componentDidMount(){
        updateCurrentSectionClass( this.state.current )
    }

    updateCurrentSection = (current) => {
        this.setState({
            current
        })
    }

    scrollCallback = (states) => {
        updateCurrentSectionClass(states.activeSection)
        this.updateCurrentSection(states.activeSection)
        if (states.activeSection >= 3 && states.activeSection < 14) {
            videosAnimation(states.activeSection)
        }
    }

    render() {

        const { current } = this.state

        let options = {
            sectionClassName: 'section',
            arrowNavigation: false,
            navigation: false,
            anchors: allAnchors,
            lazyLoading: false,
        }

        return (
            <Fragment>
                <SectionsContainer {...options} activeSection={current} scrollCallback={this.scrollCallback}>
                    <Section id='section-0' className='introduction'>
                        <Introduction />
                    </Section>
                    <Section id='section-1' className='understanding'>
                        <Understanding />
                    </Section>
                    <Section id='section-2' className='method'>
                        <Method />
                    </Section>
                    <Section id='section-3' className='video video1'>
                        <Videos video={videoCollections[1]} />
                    </Section>
                    <Section id='section-4' className='video video2'>
                        <Videos video={videoCollections[2]} />
                    </Section>
                    <Section id='section-5' className='video video3'>
                        <Videos video={videoCollections[3]} />
                    </Section>
                    <Section id='section-6' className='video video4'>
                        <Videos video={videoCollections[4]} />
                    </Section>
                    <Section id='section-7' className='video video5'>
                        <Videos video={videoCollections[5]} />
                    </Section>
                    <Section id='section-8' className='video video6'>
                        <Videos video={videoCollections[6]} />
                    </Section>
                    <Section id='section-9' className='video video7'>
                        <Videos video={videoCollections[7]} />
                    </Section>
                    <Section id='section-10' className='video video8'>
                        <Videos video={videoCollections[8]} />
                    </Section>
                    <Section id='section-11' className='video video9'>
                        <Videos video={videoCollections[9]} />
                    </Section>
                    <Section id='section-12' className='video video10'>
                        <Videos video={videoCollections[10]} />
                    </Section>
                    <Section id='section-13' className='video video11'>
                        <Videos video={videoCollections[11]} />
                    </Section>
                    <Section id='section-14' className='contact'>
                        <Contact />
                    </Section>
                </SectionsContainer>
            </Fragment>
        )
    }
}

export default HomeDesktop;