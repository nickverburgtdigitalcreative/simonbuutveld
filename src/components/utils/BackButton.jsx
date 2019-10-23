import React, { PureComponent } from 'react'
import { NavLink } from 'react-router-dom'

class BackButton extends PureComponent {

    handleClick = (e) => {
        e.preventDefault()
        const home = e.target.href 
        const fader = document.getElementById('fader')
        fader.classList.add('show')
        
        setTimeout(() => {
            document.location.href = home
        }, 1000);
    
    }

    render() {
        return (
            <div id="back">
                <NavLink to="/#understanding" onClick={this.handleClick}></NavLink>
            </div>
        );
    }
}

export default BackButton;