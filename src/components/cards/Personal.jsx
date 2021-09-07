import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import Card from './Card';

class Personal extends Card {
  onClick = (url) => {
    window.open(url, '_blank');
  }

  render() {
    const {
      color, componentName, description, github, image, title, visit,
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
          <NavLink to={`/${componentName}`} activeClassName="IsActive" className="CardAction">
            READ MORE
          </NavLink>
          {
            visit
            && (
              <button
                className="CardAction"
                onClick={() => this.onClick(visit)}
                type="button"
              >
                WESBITE
              </button>
            )
          }
          {
            github
            && (
              <button
                className="CardAction"
                onClick={() => this.onClick(github)}
                type="button"
              >
                GITHUB
              </button>
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
