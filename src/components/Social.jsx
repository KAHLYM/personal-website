import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { Github, Gmail, Linkedin } from '@icons-pack/react-simple-icons';

class Social extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socialIconGithub: 'rgba(31, 31, 31, 0.64)',
      socialIconLinkedin: 'rgba(31, 31, 31, 0.64)',
      socialIconGmailColor: 'rgba(31, 31, 31, 0.64)',
    };
  }

  render() {
    const { bottom, size } = this.props;
    const { socialIconGithub, socialIconGmailColor, socialIconLinkedin } = this.state;
    return (
      <div className="SocialWrapper" style={{ marginBottom: bottom }}>
        <a
          className="SocialIcon animated fadeIn animatedDelay500ms"
          href="https://www.github.com/KAHLYM"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github
            color={socialIconGithub}
            size={size}
            onMouseEnter={() => this.setState({ socialIconGithub: '#181717' })}
            onMouseLeave={() => this.setState({ socialIconGithub: 'rgba(31, 31, 31, 0.64)' })}
          />
        </a>
        <a
          className="SocialIcon animated fadeIn animatedDelay500ms"
          href="https://www.linkedin.com/in/callum-wright-81baa3127/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin
            color={socialIconLinkedin}
            size={size}
            onMouseEnter={() => this.setState({ socialIconLinkedin: '#0077B5' })}
            onMouseLeave={() => this.setState({ socialIconLinkedin: 'rgba(31, 31, 31, 0.64)' })}
          />
        </a>
        <a
          className="SocialIcon animated fadeIn animatedDelay500ms"
          href="mailto:wrightci01w@gmail.com"
          style={{ marginRight: '0px' }}
        >
          <Gmail
            color={socialIconGmailColor}
            size={size}
            onMouseEnter={() => this.setState({ socialIconGmailColor: '#D14836' })}
            onMouseLeave={() => this.setState({ socialIconGmailColor: 'rgba(31, 31, 31, 0.64)' })}
          />
        </a>
      </div>
    );
  }
}

Social.propTypes = {
  bottom: PropTypes.string,
  size: PropTypes.string,
};

Social.defaultProps = {
  bottom: '0rem',
  size: '1rem',
};

export default Social;
