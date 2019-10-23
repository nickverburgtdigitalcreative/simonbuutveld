import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Menu extends Component {

    state = {
        menuStatus: 'closed'
    }

    handleMenu = () => {
        this.setState({
            menuStatus: this.state.menuStatus === 'opened' ? 'closed' : 'opened'
        })
    }

    goToSection = (section) => {

        const currentHash = window.location.hash.substring(1)
        const nextHash = section
        const closeMenuTime = currentHash === 'contact' || nextHash === 'contact' ? 1000 : 500

        setTimeout(() => {
            this.setState({
                menuStatus: 'closed'
            })
        }, closeMenuTime);

        window.location.hash = section
        
    }


    render() {
        return (
            <nav>
                <div id="toggle" className={this.state.menuStatus}>
                    <div id="open" onClick={this.handleMenu}></div>
                    <div id="close" onClick={this.handleMenu}></div>
                    <div id="menu">
                        <ul>
                            <li><NavLink to="/#introduction" onClick={() => this.goToSection('introduction')}>Introduction</NavLink></li>
                            <li><NavLink to="/#understanding" onClick={() => this.goToSection('understanding')}>Understanding the method</NavLink></li>
                            <li><NavLink to="/#method" onClick={() => this.goToSection('method')}>The method</NavLink></li>
                            <li><NavLink to="/#video1" onClick={() => this.goToSection('video1')}>Gallery</NavLink></li>
                            <li><NavLink to="/#contact" onClick={() => this.goToSection('contact')}>Contact</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Menu