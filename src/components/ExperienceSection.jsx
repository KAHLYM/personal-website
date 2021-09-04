import React, { Component } from 'react';

import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class ExperienceSection extends Component {
  render() {
    const { children, title } = this.props;
    return (
      <div className="ExperienceSection">
        <div className="ExperienceSectionTitle">{title}</div>
        <div className="ExperienceSectionBody">{children}</div>
      </div>
    );
  }
}

ExperienceSection.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

ExperienceSection.defaultProps = {
  children: '',
  title: '',
};

export default ExperienceSection;
