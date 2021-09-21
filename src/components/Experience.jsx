import React, { Component } from 'react';

import PropTypes from 'prop-types';

import RciMap from './RciMap';

import ExternalLink from './ExternalLink';

class Experience extends Component {
  constructor(props) {
    super(props);
    this.refExperienceSkills = React.createRef();
  }

  showWebsite = () => {
    const { type, url } = this.props;
    return ((type === 'personal project') && (url));
  }

  showGitHub = () => {
    const { type, github } = this.props;
    return ((type === 'personal project') && (github));
  }

  render() {
    const {
      children, github, skills, time, title, type, url,
    } = this.props;
    return (
      <div className="Experience">
        <div className="ExperienceTitle animated fadeIn">{title}</div>
        <div className="ExperienceType animated fadeIn">
          {type}
          {' '}
          ·
          {' '}
          {time}
          {' '}
          min read
        </div>
        {
          skills ? (
            <div className="ExperienceSkills animated fadeIn">
              { skills.sort().map((skill) => React.createElement(RciMap[skill][0], { color: RciMap[skill][1] }, '')) }
            </div>
          ) : null
        }
        {this.showWebsite() ? (
          <div className="ExperienceVisitWrapper animated fadeIn">
            <ExternalLink
              classNames={['ExperienceChip', 'ExperienceVisit', 'animated', 'fadeIn']}
              href={url}
            >
              visit website
            </ExternalLink>
          </div>
        ) : null}
        {this.showGitHub() ? (
          <div className="ExperienceVisitWrapper animated fadeIn">
            <ExternalLink
              classNames={['ExperienceChip', 'ExperienceVisit', 'animated', 'fadeIn']}
              href={github}
            >
              github
            </ExternalLink>
          </div>
        ) : null}
        <div className="ExperienceChildren animated fadeIn animatedDelay500ms">{children}</div>
      </div>
    );
  }
}

Experience.propTypes = {
  children: PropTypes.node,
  github: PropTypes.string,
  time: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  skills: PropTypes.arrayOf(PropTypes.string),
  url: PropTypes.string,
};

Experience.defaultProps = {
  children: '',
  github: '',
  time: 0,
  title: '',
  type: '',
  skills: [],
  url: '',
};

export default Experience;
