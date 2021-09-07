import React, { Component } from 'react';

import Profile from '../assets/profile.jpg';

import RciMap from './RciMap';

export class About extends Component {
  skillsProfessional = [
    'C++',
    'Python',
  ];

  skillsPersonal = [
    'Angular',
    'TypeScript',
    'HTML5',
    'Sass',
    'JavaScript',
    'React',
  ];

  skillsTools = [
    'Atlassian',
    'Bitbucket',
    'Confluence',
    'Firebase',
    'Git',
    'GitHub',
    'GitHub Actions',
    'Google Analytics',
    'Jira',
    'Visual Studio',
    'Visual Studio Code',
  ];

  aboutTitle = 'Hi, I\'m Callum';

  componentDidMount() {
    document.title = 'Callum Wright - About';
  }

  render() {
    return (
      <div>
        <div className="About">
          <div className="Personal">
            <img src={Profile} alt="Profile" />
          </div>
          <div>
            <div className="AboutTitle">{this.aboutTitle}</div>
            <div className="Description">
              <p>
                I’m a Software Engineer with professional experience developing industry leading&nbsp;
                <span className="Highlight">cybersecurity software</span>
                . Enthused by&nbsp;
                <span className="Highlight">
                  consistent and well structured design
                </span>
                , I also take interest in web development technologies as they offer opportunities that are more&nbsp;
                design orientated.
              </p>
              <p>
                Although I’m happy to spend copious time immersed in technology, I often take time to keep&nbsp;
                active and strive to outperform previous personal records.
              </p>
              <span className="AboutSubTitle">Languages, Libraries &amp; Frameworks</span>
              <div className="SkillsContainer">
                <span className="SkillsType">Professional</span>
                <div className="SkillsProfessional">
                  {this.skillsProfessional.sort().map((skill) => (
                    <div className="Skill">
                      {React.createElement(RciMap[skill][0], { color: RciMap[skill][1], size: 20 })}
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
                <span className="SkillsType">Personal</span>
                <div className="SkillsPersonal">
                  {this.skillsPersonal.sort().map((skill) => (
                    <div className="Skill">
                      {React.createElement(RciMap[skill][0], { color: RciMap[skill][1], size: 16 }, '')}
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              <span className="AboutSubTitle">Tools</span>
              <div className="SkillsContainer">
                {this.skillsTools.sort().map((skill) => (
                  <div className="Skill">
                    {React.createElement(RciMap[skill][0], { color: RciMap[skill][1], size: 20 })}
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
