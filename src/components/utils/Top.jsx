import React, { PureComponent } from 'react'

class Top extends PureComponent {


    render() {
        const { t1, t2 } = this.props

        return (
            <div className="top">
                <div className="t1">{t1}</div>
                { t2 && <div className="t2">{t2}</div> }
            </div>
        )
    }
}

export default Top