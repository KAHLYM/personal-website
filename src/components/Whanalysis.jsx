import React, { Component } from 'react';

import Experience from './Experience';
import ExperienceSection from './ExperienceSection';

import HumaaansWhanalysisMotivation from '../assets/humaaans-whanalysis-motivation.png';
import HumaaansWhanalysisProcess from '../assets/humaaans-whanalysis-process.png';
import ExternalLink from './ExternalLink';

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
            Working solely on Whanalysis, I managed&nbsp;
            <span className="Highlight">all aspects from conception to release</span>
            ; be that but not limited to design, programming and SEO optimization.
          </ExperienceSection>

          <ExperienceSection title="Motivation">
            The concept was conceived long ago as a means to learn Python. Developed without consideration of the&nbsp;
            analysis to be accessed remotely, conversing with friends and colleagues highlighted the difficulties&nbsp;
            demonstrating the process and displaying the analysis. These difficulties later presented a great&nbsp;
            opportunity when motivated to learn a new web development framework.
          </ExperienceSection>

          <img className="ExperienceSectionBody" src={HumaaansWhanalysisMotivation} alt="Whanalysis Motivation" />

          <ExperienceSection title="Process">
            <p className="ExperienceSectionSubTitle">Material Design</p>
            Given that Angular was the chosen framework, Material Design was the obvious choice.&nbsp;
            <ExternalLink
              classNames={['Highlight']}
              href="https://material.angular.io"
            >
              Angular Material
            </ExternalLink>
            &nbsp;offered intuitive and versatile components, optimized for web, mobile and desktop that was&nbsp;
            backed by research to establish thorough design principles. These features enabled me to focus on&nbsp;
            learning Angular and&nbsp;
            <span className="Highlight">increase development velocity</span>
            .
            <p className="ExperienceSectionSubTitle">Internationalization</p>
            It became apparent that WhatsApp does not standardize their datetime format. Although there exist&nbsp;
            functions that will attempt to parse a string without a specified format, they do not guarantee that&nbsp;
            the correct format will be found. To mitigate any issue, the user is asked to enter the datetime used&nbsp;
            in their chat with aid from an example from their chat and validation.
            <p className="ExperienceSectionSubTitle">Security</p>
            The ability to access analysis was one of the driving factors that motivated this project. With an&nbsp;
            increase in the ability to access data there is often an increase in security risk and it is important&nbsp;
            to obtain a&nbsp;
            <span className="Highlight">balance between accessibility and privacy</span>
            . The ability to share analysis emphasised the importance of these concerns.
            <br />
            <br />
            <ExternalLink
              classNames={['Highlight']}
              href="https://firebase.google.com"
            >
              Google Firebase
            </ExternalLink>
            &nbsp;recommended security rules to block unauthorized access to data; these were enforced. In&nbsp;
            <span className="Highlight">accordance with GDPR</span>
            , data is retained for the limited time that is deemed necessary. The user submitted chat messages are&nbsp;
            deleted once processed and the resulting analysis is stored for 72 hours to enable the ability to&nbsp;
            share the analysis. Having cleanup scripts scheduled to run through automated cloud functions helped&nbsp;
            Whanalysis to remain in accordance to privacy law and reduce maintenance.
            <br />
            <br />
            The user is given an access code which they may share with others. This is a justified tradeoff&nbsp;
            between shareability and security. The user is reminded of the security concerns.
            <p className="ExperienceSectionSubTitle">Demo</p>
            People are inpatient; they want to see results fast. With a single click, the user has insight into&nbsp;
            what is available. A demo should ease privacy concerns as the user need not sacrifice any of their&nbsp;
            privacy to understand what is available.
          </ExperienceSection>

          <img className="ExperienceSectionBody" src={HumaaansWhanalysisProcess} alt="Whanalysis Process" />

          <ExperienceSection title="Review">
            Angular provided a&nbsp;
            <span className="Highlight">holistic experience</span>
            ; one that was less challenging than anticipated given the higher complexity in comparison to&nbsp;
            alternatives React and&nbsp;
            <ExternalLink
              classNames={['Highlight']}
              href="https://vuejs.org"
            >
              Vue
            </ExternalLink>
            . Being a fully-fledged framework, Angular eliminated the choice of libraries and allowed focus to&nbsp;
            remain on the concepts rather than managerial decisions. With previous experience in type-based&nbsp;
            programming, the mandate to use TypeScript was welcome and offered a familiar experience. Having&nbsp;
            chosen another Google-backed technology, Firebase provided frictionless integration with Angular.
            <br />
            <br />
            The importance of testing became apparent and was highlighted by various avoidable and time consuming&nbsp;
            scenarios. Although the Python scripts were extensively tested, the Angular components were not. Given&nbsp;
            more time to work on the project, test coverage would be the primary focus.
          </ExperienceSection>

        </Experience>
      </div>
    );
  }
}

export default Whanalysis;
