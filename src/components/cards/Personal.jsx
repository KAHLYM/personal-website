import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import Card from './Card';

class Personal extends Card {
    onClickVisit = () => {
      const { url } = this.props;
      window.open(url, '_blank');
    }

    render() {
      const {
        color, componentName, description, image, title, url,
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
            {
              url
                        && (
                          <button
                            className="CardAction"
                            onClick={this.onClickVisit}
                            onMouseEnter={this.onMouseEnter}
                            onMouseLeave={this.onMouseLeave}
                            type="button"
                          >
                            visit
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
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
};

Personal.defaultProps = {
  dateEndMonth: 0,
  dateEndYear: 1970,
  url: '',
};

export default Personal;
