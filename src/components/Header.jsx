import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'

class Header extends Component {

    state = {
        showPhone: false,
        showEmail: false,
    }

    togglePhone = () => {
        this.setState({
            showPhone: !this.state.showPhone
        })

        setTimeout(() => {
            this.setState({
                showPhone: !this.state.showPhone
            })
        }, 5000);

    }

    toggleEmail = () => {
        this.setState({
            showEmail: !this.state.showEmail
        })

        setTimeout(() => {
            this.setState({
                showEmail: !this.state.showEmail
            })
        }, 5000);
    }

    goToSection = (section) => {

        window.location.hash = section
        
    }

    render() {

        const { showPhone, showEmail } = this.state

        return (
            <Fragment>
                <header>
                    <div id="logo">
                        <NavLink to='/#introduction' onClick={() => this.goToSection('introduction')}></NavLink>
                    </div>
                    <div id="info">
                        <div className="contact phone">
                            <i className="fa fa-phone" aria-hidden="true" onClick={this.togglePhone}></i>
                            <div className={`tog_p ${showPhone ? 'cont_open' : ''}`}><a href="tel:0451 011 733">0451 011 733</a></div>
                        </div>
                        <div className="contact email">
                            <i className="fa fa-envelope" aria-hidden="true" onClick={this.toggleEmail}></i>
                            <div className={`tog_e ${showEmail ? 'cont_open' : ''}`}><a href="mailto:contact@simonbuutveld.com">contact@simonbuutveld.com</a></div></div>
                    </div>
                </header>
            </Fragment>
        )
    }
}

export default Header;