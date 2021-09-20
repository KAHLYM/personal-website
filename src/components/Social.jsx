import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { Github, Gmail, Linkedin } from '@icons-pack/react-simple-icons';
import ExternalLink from './ExternalLink';

// eslint-disable-next-line react/prefer-stateless-function
class Social extends Component {
  render() {
    const { bottom, size } = this.props;
    return (
      <div className="SocialWrapper" style={{ marginBottom: bottom }}>
        <ExternalLink
          classNames={["SocialIcon", "animated", "fadeIn", "animatedDelay500ms"]}
          href="https://www.github.com/KAHLYM"
        >
          <Github
            color="rgba(31, 31, 31, 0.64)"
            size={size}
            id="IconGithub"
          />
        </ExternalLink>
        <ExternalLink
          classNames={["SocialIcon", "animated", "fadeIn", "animatedDelay500ms"]}
          href="https://www.linkedin.com/in/callum-wright-81baa3127"
        >
          <Linkedin
            color="rgba(31, 31, 31, 0.64)"
            size={size}
            id="IconLinkedin"
          />
        </ExternalLink>
        <ExternalLink
        classNames={["SocialIcon", "animated", "fadeIn", "animatedDelay500ms"]}
          href="mailto:wrightci01w@gmail.com"
          style={{ marginRight: '0px' }}
        >
          <Gmail
            color="rgba(31, 31, 31, 0.64)"
            size={size}
            id="IconGmail"
          />
        </ExternalLink>
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
