import React from 'react';
import PropTypes from 'prop-types';

import Card from './Card';

class Education extends Card {
  render() {
    const {
      color, description, image, title,
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
      </div>
    );
  }
}

Education.propTypes = {
  color: PropTypes.string.isRequired,
  dateEndYear: PropTypes.number.isRequired,
  dateStartYear: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Education;
