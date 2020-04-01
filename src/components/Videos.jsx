import React, { Fragment } from 'react'
import Top from './utils/Top'
import Bottom from './utils/Bottom'

const Videos = ({ video, src }) => {

    const style = {
        afterLoad: {
            backgroundImage: `url(${video.afterImage})`  
        },
        fullScreen: {
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }
    }

    return (
        <Fragment>
            <section className="video">
                <Top t1='The architectural art' />
                <Bottom text='Please scroll down for more' />
                <video 
                    id={`video_${video.id}`} 
                    muted={true}
                    autoPlay={true}
                    className='art_videos'
                    playsInline={true}
                >
                    {/*<source src={ video.video } type="video/mp4" /> source inserted by PreLoader.jsx */}
                </video>
                <div className={`background_image after video_${video.id}`} style={{ ...style.fullScreen, ...style.afterLoad }}></div>
                
            </section>
        </Fragment>
    )

}

export default Videos