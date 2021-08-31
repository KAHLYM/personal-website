import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { Github, Gmail, Linkedin } from '@icons-pack/react-simple-icons';

class Social extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { bottom, size } = this.props;
    return (
      <div className="SocialWrapper" style={{ marginBottom: bottom }}>
        <a
          className="SocialIcon animated fadeIn animatedDelay500ms"
          href="https://www.github.com/KAHLYM"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github
            color={'rgba(31, 31, 31, 0.64)'}
            size={size}
            id="IconGithub"
          />
        </a>
        <a
          className="SocialIcon animated fadeIn animatedDelay500ms"
          href="https://www.linkedin.com/in/callum-wright-81baa3127/"
          target="_blank"
          rel="noopener noreferrer"
          >
          <Linkedin
            color={'rgba(31, 31, 31, 0.64)'}
            size={size}
            id="IconLinkedin"
          />
        </a>
        <a
          className="SocialIcon animated fadeIn animatedDelay500ms"
          href="mailto:wrightci01w@gmail.com"
          style={{ marginRight: '0px' }}
        >
          <Gmail
            color={'rgba(31, 31, 31, 0.64)'}
            size={size}
            id="IconGmail"
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
