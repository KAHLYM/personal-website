import React, { Component } from 'react';

import './Animation.scss';
import './ExperienceSection.scss';

export class ExperienceSection extends Component {
  render() {
    return (
      <div className="ExperienceSection">
        <div className="ExperienceSectionTitle">{this.props.title}</div>
        <div className="ExperienceSectionBody">{this.props.children}</div>
      </div>
    );
  }
}

export default ExperienceSection;
