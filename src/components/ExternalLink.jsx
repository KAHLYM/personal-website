import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { LogEventExternalLink } from './Analytics';

class ExternalLink extends Component {
  constructor(props) {
    super(props);

    this.classNamesAsString = 'ExternalLink';
    const { classNames } = this.props;
    classNames.array.forEach((className) => {
      this.classNamesAsString += ' ';
      this.classNamesAsString += className;
    });
  }

  render() {
    const { children, href } = this.props;
    return (
      <a
        className={this.classNamesAsString}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => LogEventExternalLink(href)}
      >
        {children}
      </a>
    );
  }
}

ExternalLink.propTypes = {
  children: PropTypes.node.isRequired,
  classNames: PropTypes.arrayOf(PropTypes.string),
  href: PropTypes.string.isRequired,
};

ExternalLink.defaultProps = {
  classNames: '',
};

export default ExternalLink;
