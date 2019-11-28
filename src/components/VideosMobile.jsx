import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import Top from './utils/Top'

import playIcon from '../images/PlayIcon.svg'
import Bottom from "./utils/Bottom";

const ORIENTATION = {
    PORTRAIT: 0,
    LANDSCAPE: 1,
}
Object.freeze(ORIENTATION)

class VideosMobile extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            height: window.innerHeight,
            orientation: this.getOrientation()
        }
    }

    componentDidMount() {
        const { video } = this.props
        const endedVideo = document.getElementById('video_' + video.id)
        endedVideo.addEventListener('ended', this.videoEnded)

        document.addEventListener("DOMContentLoaded", this.lazyLoadVideos)

        this.setState({curHeight: Math.max(this.state.height, window.innerHeight) })
        window.addEventListener('resize', () => {
            if(this.getOrientation() !== this.state.orientation) {
                this.setState({
                    height: window.innerHeight,
                    orientation: this.getOrientation()
                })
            } else {
                this.setState({height: Math.max(this.state.height, window.innerHeight) })
            }
        })
    }

    getOrientation = () => {
        if (window.outerHeight > window.outerWidth) {
            return ORIENTATION.PORTRAIT
        } else {
            return ORIENTATION.LANDSCAPE
        }
    }

    lazyLoadVideos = () => {
        var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));

        if ("IntersectionObserver" in window) {
            var lazyVideoObserver = new IntersectionObserver(function (entries, observer) {
                entries.forEach(function (video) {
                    if (video.isIntersecting) {
                        for (var source in video.target.children) {
                            var videoSource = video.target.children[source];
                            if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
                                videoSource.src = videoSource.dataset.src;
                            }
                        }

                        video.target.load();
                        video.target.classList.remove("lazy");
                        lazyVideoObserver.unobserve(video.target);
                    }
                });
            });

            lazyVideos.forEach(function (lazyVideo) {
                lazyVideoObserver.observe(lazyVideo);
            });
        }
    }
    videoEnded = () => {
        const { video } = this.props
        const currentVideo = document.getElementById('video_' + video.id)
        const backgroundImage = document.getElementsByClassName('video_' + video.id)[0]

        if (backgroundImage) {
            currentVideo.classList.add('hide')
            backgroundImage.classList.add('show')
        }

    }

    togglePlayState = () => {
        const node = ReactDOM.findDOMNode(this);
        let video = null;

        if (node instanceof HTMLElement) {
            video = node.querySelector("#video_" + this.props.video.id);
        }

        if (video && !video.classList.contains("playing")) {
            video.play();
            this.props.callback("#video-section_" + this.props.video.id);
        }
    }

    render() {
        const { video } = this.props
        const style = {
            height: this.state.height
        }
        const afterImage = 'url(' + video.afterImage + ')'
        const iconClass = 'play-icon';

        return (

            <div className="video" id={`video-section_${video.id}`} style={style}>
                <Top t1={this.state.height + "px"} />
                <Bottom text={window.innerHeight + "px"} />
                <img src={playIcon} className={iconClass} onClick={this.togglePlayState}/>
                <video
                    id={`video_${video.id}`}
                    className='art_videos lazy'
                    playsInline
                    preload='none'
                    poster={video.beforeImage}
                >
                    <source data-src={video.video} type="video/mp4" />
                </video>
                <div
                    className={`background_image after video_${video.id}`}
                    style={{ backgroundImage: afterImage }}
                ></div>

            </div>

        )
    }


}

export default VideosMobile