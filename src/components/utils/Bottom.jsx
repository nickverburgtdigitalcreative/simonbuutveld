import React, { PureComponent } from 'react'
import { TimelineLite } from 'gsap';


const style = {
    el: {
        'display': 'inline-block'
    },
    bottom: {
        bottom: '0',
        color: 'rgba(25, 25, 25, 0.5)',
        fontFamily: '"EB Garamond", serif',
        fontSize: '1.2em',
    }
}

class Bottom extends PureComponent {

    componentDidMount() {
        const time = 0.5
        const el = new TimelineLite({ onComplete: this.restart })
        el.to(".e1", time, { autoAlpha: 0 }, "+=0.5");
        el.to(".e2", time, { autoAlpha: 0 }, "-=0.25");
        el.to(".e3", time, { autoAlpha: 0 }, "-=0.25");
        el.to(".e1", time, { autoAlpha: 1 });
        el.to(".e2", time, { autoAlpha: 1 }, "-=0.25");
        el.to(".e3", time, { autoAlpha: 1 }, "-=0.25");
    }

    restart() { this.restart(); }

    render() {

        return (
            <div className="bottom" style={style.bottom}>
                <div className="b1">
                    {this.props.text}
                    <div className="el" style={style.el}>
                        <span className="e1">.</span>
                        <span className="e2">.</span>
                        <span className="e3">.</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Bottom