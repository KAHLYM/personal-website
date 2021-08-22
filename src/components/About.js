import React, { Component } from 'react'

import './About.scss';

import Profile from '../assets/profile.jpg';

import RciMap from './RciMap.js';

export class About extends Component {

    componentDidMount(){
        document.title = "Callum Wright - About"
    }

    skillsProfessional = [
        'C++',
        'Python',
        // 'Atlassian',
        // 'Git',
        // 'Visual Studio',
        // 'Visual Studio Code',
        // 'Confluence',
        // 'Jira',
    ];

    skillsPersonal = [
        'Angular',
        'TypeScript',
        'Firebase',
        'HTML5',
        'Sass',
        'JavaScript',
        'Google Analytics',
        'React',
        // 'GitHub',
        // 'Pandas',
    ];

    aboutTitle = 'Hi, I\'m Callum';

    render() {
        return (
            <div>
                <div class="About">
                    <div className='Personal'>
                        <img src={Profile}  alt="Profile"/>
                    </div>
                    <div>
                        <div className='AboutTitle'>{this.aboutTitle}</div>
                        <div className='Description'>
                            <p>
                                I’m a Software Engineer with professional experience developing 
                                industry leading <span class='Highlight'>cybersecurity software</span>. Enthused by <span class='Highlight'>consistent and well 
                                structured design</span>, I also take interest in web development 
                                technologies as they offer opportunities that are more design 
                                orientated.
                            </p>
                            <p>
                                Although I’m happy to spend copious time immersed in technology, I 
                                often take time to keep active and strive to outperform previous 
                                personal records.
                            </p>
                            <span className='AboutSubTitle'>Experience</span>
                            <div className='SkillsContainer'>
                                <span className='SkillsType'>Professional</span>
                                <div className='SkillsProfessional'>
                                    {this.skillsProfessional.sort().map(skill => <div className='Skill'>{React.createElement(RciMap[skill][0], { 'color': RciMap[skill][1], 'size': 20 })}<span>{skill}</span></div>)}
                                </div>
                                <span className='SkillsType'>Personal</span>
                                <div className='SkillsPersonal'>
                                    {this.skillsPersonal.sort().map(skill => <div className='Skill'>{React.createElement(RciMap[skill][0], { 'color': RciMap[skill][1], 'size': 16 }, '')}<span>{skill}</span></div>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About
