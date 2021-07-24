import React, { Component } from 'react'

import './Animation.scss'
import './Colors.scss';
import './Home.scss';

import PersonalWebsiteLogo from '../assets/personal-website.png';
import SophosLogo from '../assets/sophos.png';
import WhanalysisLogo from '../assets/whanalysis.png';

export class Home extends Component {
    render() {
        return (
            <div>
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
                <div className="Experience">
                    <div class="Professional">
                        <p>Professional</p>
                        <div>
                            <div class="Title">
                                <div>
                                    <img src={SophosLogo}></img>
                                </div>
                                <div>
                                    <p>Sophos</p>
                                    <p>cybersecurity</p>
                                    <p>3 yrs 3 mos</p>
                                </div>
                            </div>
                            <div class="Details">
                                <p>Software Engineer III</p>
                                <p>Jul 2021 - Present · 1 mos</p>
                                <p>Abingdon, United Kingdon</p>
                            </div>
                            <div class="Details">
                                <p>Software Engineer II</p>
                                <p>Aug 2019 - Jul 2021 · 2 yrs</p>
                                <p>Abingdon, United Kingdon</p>
                            </div>
                            <div class="Details">
                                <p>Software Engineer Intern</p>
                                <p>Jun 2017 - Aug 2018 · 1 yr 3 mos</p>
                                <p>Abingdon, United Kingdon</p>
                            </div>
                        </div>
                    </div>
                    <div class="Personal">
                        <p>Personal</p>
                        <div>
                            <div class="Title">
                                <div>
                                    <img src={PersonalWebsiteLogo}></img>
                                </div>
                                <div>
                                    <p>Personal Website</p>
                                    <p>cybersecurity</p>
                                    <p>Jun 2020 - Jul 2020</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="Title">
                                <div>
                                    <img src={WhanalysisLogo}></img>
                                </div>
                                <div>
                                    <p>Whanalysis</p>
                                    <p>whatsapp analysis</p>
                                    <p>Dec 2019 - May 2020</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Home
