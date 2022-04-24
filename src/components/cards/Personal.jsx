import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import Card from './Card';
import ExternalLink from '../ExternalLink';

class Personal extends Card {
  render() {
    const {
      color, componentName, description, github, image, title, visit,
    } = this.props;
    return (
      <div className="Card" style={{ borderColor: `${color}` }}>
        <div className="CardContainer">
          <div className="CardImageContainer">
            <img className="CardImage Filter" src={image} alt="" />
          </div>
          <div className="CardTextContainer">
            <p className="CardTitle">{title}</p>
            <p className="CardDescription">{description}</p>
            <p className="CardDate">
              {
                `${this.dateStartAsString} - ${this.dateEndAsString} · ${this.durationAsString}`
              }
            </p>
          </div>
        </div>
        <div className="CardActionContainer">
          <NavLink to={`/${componentName}`} activeClassName="IsActive" className="CardAction">
            READ MORE
          </NavLink>
          {
            visit
            && (
              <ExternalLink
                classNames={['CardAction']}
                href={visit}
              >
                WEBSITE
              </ExternalLink>
            )
          }
          {
            github
            && (
              <ExternalLink
                classNames={['CardAction']}
                href={github}
              >
                GITHUB
              </ExternalLink>
            )
          }
        </div>
      </div>
    );
  }
}

Personal.propTypes = {
  color: PropTypes.string.isRequired,
  componentName: PropTypes.string.isRequired,
  dateEndMonth: PropTypes.number,
  dateEndYear: PropTypes.number,
  dateStartMonth: PropTypes.number.isRequired,
  dateStartYear: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  github: PropTypes.string,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  visit: PropTypes.string,
};

Personal.defaultProps = {
  dateEndMonth: 0,
  dateEndYear: 1970,
  github: '',
  visit: '',
};

export default Personal;
