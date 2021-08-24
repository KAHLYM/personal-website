import React, { Component } from 'react';

import Experience from './Experience.js';
import ExperienceSection from './ExperienceSection';

import HumaaansWhanalysisMotivation from '../assets/humaaans-whanalysis-motivation.png';
import HumaaansWhanalysisProcess from '../assets/humaaans-whanalysis-process.png';

export class Whanalysis extends Component {
  componentDidMount() {
    document.title = 'Callum Wright - Whanalysis';
  }

  render() {
    return (
      <div>
        <Experience
          title="Whanalysis"
          type="personal project"
          skills={['Angular', 'Python', 'TypeScript', 'Firebase', 'HTML5', 'Sass', 'JavaScript', 'Google Analytics']}
          url="https://www.whanalysis.com"
          time="5"
        >

          <div className="ExperienceDescription">
            Whanalysis analyzes WhatsApp conversation and provides shareable analysis through an accessible platform.
          </div>

          <ExperienceSection title="Role">
            Working solely on Whanalysis, I managed
            {' '}
            <span className="Highlight">all aspects from conception to release</span>
            ; be that but not limited to design, programming and SEO optimization.
          </ExperienceSection>

          <ExperienceSection title="Motivation">
            The concept was conceived long ago as a means to learn Python. Developed without consideration of the analysis to be accessed remotely, conversing with friends and colleagues highlighted the difficulties demonstrating the process and displaying the analysis. These difficulties later presented a great opportunity when motivated to learn a new web development framework.
          </ExperienceSection>

          <img className="ExperienceSectionBody" src={HumaaansWhanalysisMotivation} alt="Whanalysis Motivation" />

          <ExperienceSection title="Process">
            <p className="ExperienceSectionSubTitle">Material Design</p>
            Given that Angular was the chosen framework, Material Design was the obvious choice.
            {' '}
            <a className="Highlight" href="https://material.angular.io/" target="_blank" rel="noopener noreferrer">Angular Material</a>
            {' '}
            offered intuitive and versatile components, optimized for web, mobile and desktop that was backed by research to establish thorough design principles. These features enabled me to focus on learning Angular and
            <span className="Highlight">increase development velocity</span>
            .
            <p className="ExperienceSectionSubTitle">Internationalization</p>
            It became apparent that WhatsApp does not standardize their datetime format. Although there exist functions that will attempt to parse a string without a specified format, they do not guarantee that the correct format will be found. To mitigate any issue, the user is asked to enter the datetime used in their chat with aid from an example from their chat and validation.
            <p className="ExperienceSectionSubTitle">Security</p>
            The ability to access analysis was one of the driving factors that motivated this project. With an increase in the ability to access data there is often an increase in security risk and it is important to obtain a
            {' '}
            <span className="Highlight">balance between accessibility and privacy</span>
            . The ability to share analysis emphasised the importance of these concerns.
            <br />
            <br />
            <a className="Highlight" href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer">Google Firebase</a>
            {' '}
            recommended security rules to block unauthorized access to data; these were enforced. In
            <span className="Highlight">accordance with GDPR</span>
            , data is retained for the limited time that is deemed necessary. The user submitted chat messages are deleted once processed and the resulting analysis is stored for 72 hours to enable the ability to share the analysis. Having cleanup scripts scheduled to run through automated cloud functions helped Whanalysis to remain in accordance to privacy law and reduce maintenance.
            <br />
            <br />
            The user is given an access code which they may share with others. This is a justified tradeoff between shareability and security. The user is reminded of the security concerns.
            <p className="ExperienceSectionSubTitle">Demo</p>
            People are inpatient; they want to see results fast. With a single click, the user has insight into what is available. A demo should ease privacy concerns as the user need not sacrifice any of their privacy to understand what is available.
          </ExperienceSection>

          <img className="ExperienceSectionBody" src={HumaaansWhanalysisProcess} alt="Whanalysis Process" />

          <ExperienceSection title="Review">
            Angular provided a
            {' '}
            <span className="Highlight">holistic experience</span>
            ; one that was less challenging than anticipated given the higher complexity in comparison to alternatives React and
            <a className="Highlight" href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">Vue</a>
            . Being a fully-fledged framework, Angular eliminated the choice of libraries and allowed focus to remain on the concepts rather than managerial decisions. With previous experience in type-based programming, the mandate to use TypeScript was welcome and offered a familiar experience. Having chosen another Google-backed technology, Firebase provided frictionless integration with Angular.
            <br />
            <br />
            The importance of testing became apparent and was highlighted by various avoidable and time consuming scenarios. Although the Python scripts were extensively tested, the Angular components were not. Given more time to work on the project, test coverage would be the primary focus.
          </ExperienceSection>

        </Experience>
      </div>
    );
  }
}

export default Whanalysis;
