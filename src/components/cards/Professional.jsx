import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import Card from './Card';

class Professional extends Card {
  render() {
    const {
      children, color, componentName, dateOverride, description, image, title,
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
                !dateOverride
                && `${this.dateStartAsString} - ${this.dateEndAsString} · ${this.durationAsString}`
              }
              {
                dateOverride
                && `${dateOverride} · ${this.durationAsString}`
              }
            </p>
          </div>
        </div>
        <div className="CardActionContainer">
          <NavLink to={`/${componentName}`} activeClassName="IsActive" className="CardAction">
            READ MORE
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
  dateOverride: PropTypes.string,
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
  dateOverride: '',
  datePresent: false,
};

export default Professional;
