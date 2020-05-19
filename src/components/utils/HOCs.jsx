import React, {Component} from 'react'
import {updateCurrentSectionClass} from "./index";

/**
 * Props:
 *
 * shouldShow : boolean
 *
 *
 * */


export function homeHOC(WrappedComponent) {

    return class IIHOC extends WrappedComponent {
        componentDidMount() {
            if(this.props.shouldShow) {
                updateCurrentSectionClass( this.state.current )
            }
        }

        render() {
            return super.render();
        }
    }

}