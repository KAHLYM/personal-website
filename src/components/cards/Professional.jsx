import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import Card from './Card';

class Professional extends Card {
  render() {
    const {
      children, color, componentName, description, image, title,
    } = this.props;
    return (
      <div className="Card" style={{ backgroundColor: color }}>
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
          <NavLink to={`/${componentName}`} activeClassName="IsActive">
            <button
              className="CardAction"
              onMouseEnter={this.onMouseEnter}
              onMouseLeave={this.onMouseLeave}
              type="button"
            >
              read more
            </button>
          </NavLink>
        </div>
        <div className="CardChildren">
          {children}
        </div>
      </div>
    );
  }
}

Professional.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string.isRequired,
  componentName: PropTypes.string.isRequired,
  dateEndMonth: PropTypes.number,
  dateEndYear: PropTypes.number,
  datePresent: PropTypes.bool,
  dateStartMonth: PropTypes.number.isRequired,
  dateStartYear: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

Professional.defaultProps = {
  children: '',
  dateEndMonth: 0,
  dateEndYear: 1970,
  datePresent: false,
};

export default Professional;
