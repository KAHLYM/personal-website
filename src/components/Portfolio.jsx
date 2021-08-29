import React, { Component } from 'react';

import Experience from './Experience';
import ExperienceSection from './ExperienceSection';

export class Portfolio extends Component {
  componentDidMount() {
    document.title = 'Callum Wright - Portfolio';
  }

  render() {
    return (
      <div>
        <Experience
          title="Portfolio"
          type="personal project"
          skills={['React', 'JavaScript', 'HTML5', 'Sass']}
          time="2"
        >

          <div className="ExperienceDescription">
            This website.
          </div>

          <ExperienceSection title="Role">
            Without the support of a content management system such as WordPress and Wix, I managed
            {' '}
            <span className="Highlight">all aspects from conception to release</span>
            .
          </ExperienceSection>

          <ExperienceSection title="Motivation">
            A portfolio acts as a single gateway to provide an overview of myself professionally and personally.
            Additionally, I was keen to experiment with the web development framework React and this project offered
            the opportunity to do so.
          </ExperienceSection>

          <ExperienceSection title="Design">
            The key objective was to create a
            {' '}
            <span className="Highlight">clear consistent design</span>
            {' '}
            throughout. The limited use of images maintained a lightweight design that did not overwhelm. Those
            images that were used were designed using
            <a
              className="Highlight"
              href="https://www.humaaans.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Humaaans
            </a>
            ; a flexible illustration library.
            <br />
            <br />
            Another key objective was to make the website mobile friendly. This was made easy through the simplicity
            of the design.
          </ExperienceSection>

          <ExperienceSection title="Review">
            The full web development stack was not required for this project yet comparison to Angular could be made
            at high level. React offered a more free experience in that it was less structured. This would likely be
            more problematic for larger projects yet I understand that less structure may increase the speed of
            development.
          </ExperienceSection>

        </Experience>
      </div>
    );
  }
}

export default Portfolio;