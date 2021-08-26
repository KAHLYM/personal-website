import React, { Component } from 'react';

import PropTypes from 'prop-types';

import RciMap from './RciMap';

class Experience extends Component {
  constructor(props) {
    super(props);
    this.refExperienceSkills = React.createRef();
  }

  showWebsite = () => {
    const { type, url } = this.props;
    return ((type === 'personal project') && (url));
  }

  render() {
    const {
      children, skills, time, title, type, url,
    } = this.props;
    return (
      <div className="Experience">
        <div className="ExperienceTitle">{title}</div>
        <div className="ExperienceType">
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
            <div className="ExperienceSkills">
              { skills.sort().map((skill) => React.createElement(RciMap[skill][0], { color: RciMap[skill][1] }, '')) }
            </div>
          ) : null
        }
        {this.showWebsite() ? (
          <div className="ExperienceVisitWrapper">
            <a
              className="ExperienceChip ExperienceVisit"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              visit website
            </a>
          </div>
        ) : null}
        <div>{children}</div>
      </div>
    );
  }
}

Experience.propTypes = {
  children: PropTypes.node,
  time: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  skills: PropTypes.arrayOf(PropTypes.string),
  url: PropTypes.string,
};

Experience.defaultProps = {
  children: '',
  time: 0,
  title: '',
  type: '',
  skills: [],
  url: '',
};

export default Experience;
