import React, { Component } from 'react';

import Education from './cards/Education';
import Personal from './cards/Personal';
import Professional from './cards/Professional';
import Social from './Social';

import LoughboroughUniversityLogo from '../assets/loughborough-university.png';
import PersonalWebsiteLogo from '../assets/personal-website.png';
import Profile from '../assets/profile.jpg';
import SophosLogo from '../assets/sophos.png';
import WhanalysisLogo from '../assets/whanalysis.png';
import ExternalLink from './ExternalLink';

export class Home extends Component {
  constructor() {
    super();

    const sophosDateEnd = new Date(Date.now());
    const sophosDateStart = new Date(Date.UTC(2021, 6, 1));
    const sophosDuration = new Date(sophosDateEnd - sophosDateStart);
    this.sophosDurationAsString = '';

    const sophosDurationYear = sophosDuration.getFullYear() - 1970;
    switch (sophosDurationYear) {
    case 0:
      break;
    case 1:
      this.sophosDurationAsString += (`${sophosDurationYear} yr`);
      break;
    default:
      this.sophosDurationAsString += (`${sophosDurationYear} yrs`);
      break;
    }

    const sophosDurationMonth = sophosDuration.getMonth() + 1;
    if (sophosDurationYear > 0 && sophosDurationMonth > 0) {
      this.sophosDurationAsString += ' ';
    }
    switch (sophosDurationMonth) {
    case 0:
      break;
    case 1:
      this.sophosDurationAsString += (`${sophosDurationMonth} mon`);
      break;
    default:
      this.sophosDurationAsString += (`${sophosDurationMonth} mos`);
      break;
    }
  }

  componentDidMount() {
    document.title = 'Callum Wright';
  }

  render() {
    return (
      <div>
        <div className="Preface">
          <div className="PrefaceProfile animated fadeIn animatedDelay500ms">
            <img src={Profile} alt="Profile" />
          </div>
          <div>
            <div className="PrefaceText">
              {/* Callum Wright currently works as a Software Engineer III at Sophos, Abingdon. */}
              <span className="animated fadeIn HomeHighlight">Callum Wright</span>
              <span className="animated fadeIn animatedDelay500ms"> currently works as a </span>
              <span className="animated fadeIn noWrap HomeHighlight">Software </span>
              <span
                className="animated fadeIn noWrap HomeHighlight"
                style={{ whiteSpace: 'nowrap' }}
              >
                Engineer III
              </span>
              <span className="animated fadeIn animatedDelay500ms"> at </span>
              <ExternalLink
                classNames={["animated", "fadeIn", "Highlight", "HomeHighlight"]}
                href="https://www.sophos.com/en-us.aspx"
                text="Sophos"
              />
              <span className="animated fadeIn animatedDelay500ms">, Abingdon.</span>
            </div>
            <div>
              <Social size="2rem" />
            </div>
          </div>
        </div>
        <div className="ExperienceContainer animated fadeIn animatedDelay500ms">
          <div>
            <p>Professional</p>
            <Professional
              color="#225a99"
              componentName="sophos"
              datePresent
              dateStartMonth={3}
              dateStartYear={2018}
              dateOverride="Jun 2017 - present"
              description="cybersecurity"
              image={SophosLogo}
              title="Sophos"
            >
              <div className="SophosChild">
                <p>Software Engineer III</p>
                <p>
                  Jul 2021 - Present ·&nbsp;
                  {
                    this.sophosDurationAsString
                  }
                </p>
                <p>Abingdon, United Kingdom</p>
              </div>
              <div className="SophosChild">
                <p>Software Engineer II</p>
                <p>Aug 2019 - Jul 2021 · 2 yrs</p>
                <p>Abingdon, United Kingdom</p>
              </div>
              <div className="SophosChild">
                <p>Software Engineer Intern</p>
                <p>Jun 2017 - Aug 2018 · 1 yr 3 mos</p>
                <p>Abingdon, United Kingdom</p>
              </div>
            </Professional>
          </div>
          <div>
            <p>Personal</p>
            <Personal
              color="#4285F4"
              componentName="portfolio"
              dateEndMonth={6}
              dateEndYear={2020}
              dateStartMonth={5}
              dateStartYear={2020}
              description="this website"
              github="https://github.com/KAHLYM/personal-website"
              image={PersonalWebsiteLogo}
              title="Personal Website"
            />
            <Personal
              color="#128C7E"
              componentName="whanalysis"
              dateEndMonth={4}
              dateEndYear={2020}
              dateStartMonth={11}
              dateStartYear={2019}
              description="whatsapp analysis"
              image={WhanalysisLogo}
              title="Whanalysis"
              visit="https://whanalysis.com"
            />
          </div>
          <div>
            <p>Education</p>
            <Education
              color="#4A1863"
              componentName="university"
              dateEndYear={2019}
              dateStartYear={2015}
              description="bachelor's degree, computer science, second class honours, upper division"
              image={LoughboroughUniversityLogo}
              title="Loughborough University"
            />
          </div>
        </div>
      </div>

    );
  }
}

export default Home;
