import React, { Component } from 'react';

import Social from './Social';

import PersonalWebsiteLogo from '../assets/personal-website.png';
import Profile from '../assets/profile.jpg';
import SophosLogo from '../assets/sophos.png';
import WhanalysisLogo from '../assets/whanalysis.png';

export class Home extends Component {
  componentDidMount() {
    document.title = 'Callum Wright';
  }

  nextPath(path) {
    const { history } = this.context;
    history.push(path);
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
              <span className="animated fadeIn" style={{ color: 'var(--color-accent)' }}>Callum Wright</span>
              <span className="animated fadeIn animatedDelay500ms"> currently works as a </span>
              <span className="animated fadeIn noWrap" style={{ color: 'var(--color-accent)' }}>Software </span>
              <span
                className="animated fadeIn noWrap"
                style={{ color: 'var(--color-accent)', 'white-space': 'nowrap' }}
              >
                Engineer III
              </span>
              <span className="animated fadeIn animatedDelay500ms"> at </span>
              <a
                className="animated fadeIn Highlight"
                style={{ color: 'var(--color-accent)' }}
                href="https://www.sophos.com/en-us.aspx"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sophos
              </a>
              <span className="animated fadeIn animatedDelay500ms">, Abingdon.</span>
            </div>
            <div>
              <Social size="2rem" />
            </div>
          </div>
        </div>
        <div className="ExperienceContainer animated fadeIn animatedDelay500ms">
          <div className="Professional">
            <p>Professional</p>
            <div style={{ borderRight: '8px solid #225a99' }}>
              <div className="Title">
                <div>
                  <img src={SophosLogo} alt="Sophos Logo" />
                </div>
                <div>
                  <p>Sophos</p>
                  <p>cybersecurity</p>
                  <p>3 yrs 3 mos</p>
                  <button type="button" onClick={() => this.nextPath('sophos')}>Read More</button>
                </div>
              </div>
              <div className="Details">
                <p>Software Engineer III</p>
                <p>Jul 2021 - Present · 1 mos</p>
                <p>Abingdon, United Kingdon</p>
              </div>
              <div className="Details">
                <p>Software Engineer II</p>
                <p>Aug 2019 - Jul 2021 · 2 yrs</p>
                <p>Abingdon, United Kingdon</p>
              </div>
              <div className="Details">
                <p>Software Engineer Intern</p>
                <p>Jun 2017 - Aug 2018 · 1 yr 3 mos</p>
                <p>Abingdon, United Kingdon</p>
              </div>
            </div>
          </div>
          <div className="Personal">
            <p>Personal</p>
            <div style={{ borderRight: '8px solid #4285f4' }}>
              <div className="Title">
                <div>
                  <img src={PersonalWebsiteLogo} alt="Personal Website Logo" />
                </div>
                <div>
                  <p>Personal Website</p>
                  <p>this website</p>
                  <p>Jun 2020 - Jul 2020</p>
                  <button type="button" onClick={() => this.nextPath('portfolio')}>Read More</button>
                </div>
              </div>
            </div>
            <div style={{ borderRight: '8px solid #128c7e' }}>
              <div className="Title">
                <div>
                  <img src={WhanalysisLogo} alt="Whanlysis Logo" />
                </div>
                <div>
                  <p>Whanalysis</p>
                  <p>whatsapp analysis</p>
                  <p>Dec 2019 - May 2020</p>
                  <button type="button" onClick={() => this.nextPath('whanalysis')}>Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Home;
