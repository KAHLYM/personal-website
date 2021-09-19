import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { LogEventExternalLink } from './Analytics';

class ExternalLink extends Component {
  constructor(props) {
    super(props);

    this.classNamesAsString = "ExternalLink";
    for (const className of this.props.classNames) {
        this.classNamesAsString += " ";
        this.classNamesAsString += className;
    }
  }

  render() {
    const {
        href, text
    } = this.props;
    return (
      <a
        className={ this.classNamesAsString }
        href={ href }
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => LogEventExternalLink(href)}
      >
        { text }
      </a>
    );

  }
}

ExternalLink.propTypes = {
  classNames: PropTypes.arrayOf(PropTypes.string),
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

ExternalLink.defaultProps = {
    classNames: '',
};

export default ExternalLink;
