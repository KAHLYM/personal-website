import React, { Component } from 'react';

import Experience from './Experience.jsx';
import ExperienceSection from './ExperienceSection';

import HumaaansSophos from '../assets/humaaans-sophos.png';

export class Sophos extends Component {
  componentDidMount() {
    document.title = 'Callum Wright - Sophos';
  }

  render() {
    return (
      <div>
        <Experience
          title="Sophos"
          type="work"
          skills={['C++', 'Python']}
          time="2"
        >

          <div className="ExperienceDescription">
            <a className="Highlight" href="https://www.sophos.com/en-us.aspx" target="_blank" rel="noopener noreferrer">Sophos Group plc</a>
            {' '}
            is a British
            <span className="Highlight">security software</span>
            {' '}
            and hardware company that develops network, end user and server protection. More than 200 million users in 150 countries rely on Sophos to provide
            <span className="Highlight">end-to-end protection</span>
            {' '}
            against threats and data loss.
          </div>

          <ExperienceSection title="Role">
            <p className="ExperienceSectionSubTitle">Internship</p>
            My career at Sophos began as a Software Engineer Intern during my university year in industry. I worked alongside other software engineers of varying levels from graduate to senior. The team that I was assigned to -
            {' '}
            <a className="Highlight" href="https://www.sophos.com/en-us/products/server-security.aspx" target="_blank" rel="noopener noreferrer">Windows Cloud Server</a>
            , developed three products: Update Cache, Message Relay and Server Lockdown.
            <br />
            <br />
            <p className="ExperienceSectionSubTitle">Post Graduation</p>
            Subsequently, after graduating I returned to Sophos as a Software Engineer II and to a different team, I was introduced to
            {' '}
            <a className="Highlight" href="https://www.hitmanpro.com/en-us/alert" target="_blank" rel="noopener noreferrer">HitmanPro.Alert</a>
            ; a behavioural based exploit mitigation product. Being behavioural based, the product was susceptible to false positives. My initial focus was to accommodate existing customer requirements and develop features to
            <span className="Highlight">support and streamline implementation</span>
            {' '}
            of similar requirements in future.
            <p className="ExperienceSectionSubTitle">Further Experience</p>
            As my understanding of the product increased I developed broader aspects of work i.e refactoring the tracking of system proceses and associated metadata to reduce complexity and increase maintainability while eliminating various edge cases.
          </ExperienceSection>

          <img className="ExperienceSectionBody" src={HumaaansSophos} alt="Sophos" />

          <ExperienceSection title="Learnings">
            <p className="ExperienceSectionSubTitle">Internship</p>
            The placement provided a valuable introduction to the software industry, allowing me to gain a clear understanding of industry practices i.e. Agile Methodology and appropriate software and processes. Writing predominantly in C++ allowed me to consolidate my understanding of object orientated programming concepts which can be translated across many languages.
            <br />
            <br />
            <p className="ExperienceSectionSubTitle">Post Graduation and Further Experience</p>
            Working on
            {' '}
            <a className="Highlight" href="https://www.hitmanpro.com/en-us/alert" target="_blank" rel="noopener noreferrer">HitmanPro.Alert</a>
            , low level driver features highlighted the importance of writing high quality code with thorough error handling to accommodate edge cases that could result in critical failure. This further enforced the
            <span className="Highlight">importance of testing</span>
            .
          </ExperienceSection>

        </Experience>
      </div>
    );
  }
}

export default Sophos;
