import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import Card from './Card';

class Education extends Card {
  render() {
    const {
      color, componentName, description, image, title,
    } = this.props;
    return (
      <div className="Card" style={{ backgroundColor: color }}>
        <div className="CardContainer">
          <div className="CardImageContainer">
            <img className="CardImage" src={image} alt="" />
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
        </div>
      </div>
    );
  }
}

Education.propTypes = {
  color: PropTypes.string.isRequired,
  componentName: PropTypes.string.isRequired,
  dateEndYear: PropTypes.number.isRequired,
  dateStartYear: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Education;
