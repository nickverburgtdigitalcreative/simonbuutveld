import React, { PureComponent } from 'react'
import Top from './utils/Top'

class VideosMobile extends PureComponent {

    componentDidMount() {
        const { video } = this.props
        const endedVideo = document.getElementById('video_' + video.id)
        endedVideo.addEventListener('ended', this.videoEnded)

        document.addEventListener("DOMContentLoaded", this.lazyLoadVideos)
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

        currentVideo.removeAttribute('controls')

        if (backgroundImage) {
            currentVideo.classList.add('hide')
            backgroundImage.classList.add('show')
        }

    }

    render() {
        const { video } = this.props
        const afterImage = 'url(' + video.afterImage + ')'

        return (

            <section className="video">
                <Top t1='The architectural art' />
                <video
                    id={`video_${video.id}`}
                    className='art_videos lazy'
                    controls
                    controlsList="nodownload nofullscreen noremoteplayback"
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

            </section>

        )
    }


}

export default VideosMobile