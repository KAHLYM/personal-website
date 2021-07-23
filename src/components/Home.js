import React, { Component } from 'react'

import './Animation.scss'
import './Colors.scss';
import './Home.scss';

export class Home extends Component {
    render() {
        return (
            <div className='Preface'>
                {/* Callum Wright currently works as a Software Engineer III at Sophos, Abingdon. */}
                <span className='animated fadeIn' style={{ color: 'var(--color-accent)' }}>Callum Wright</span>
                <span className='animated fadeIn animatedDelay500ms'> currently works as a </span>
                <span className='animated fadeIn noWrap' style={{ color: 'var(--color-accent)' }}>Software </span>
                <span className='animated fadeIn noWrap' style={{ color: 'var(--color-accent)', 'white-space': 'nowrap' }}>Engineer III</span>
                <span className='animated fadeIn animatedDelay500ms'> at </span>
                <span className='animated fadeIn' style={{ color: 'var(--color-accent)' }}>Sophos</span>
                <span className='animated fadeIn animatedDelay500ms'>, Abingdon.</span>
            </div>
        )
    }
}

export default Home
