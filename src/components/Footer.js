  
import React, { Component } from 'react'

import Social from './Social.js';

import './Footer.scss';

export class Footer extends Component {

    render() {
        return (
            <div className='Footer'>
                <div className='FooterWrapper'>
                    <Social size='24' bottom='16'></Social>
                    <p className='LastUpdated'>last updated July 23, 2021</p>
                </div>
            </div>
        )
    }
}

export default Footer