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
                    <a
                        className="ExperienceChip ExperienceVisit animated fadeIn"
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        visit website
                      </a>
                  </div>
              ) : null}
            <div className="ExperienceChildren animated fadeIn animatedDelay500ms">{children}</div>
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
