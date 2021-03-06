import { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  constructor(props) {
    super(props);

    // Undocumented Component Properties:
    // - dateEndAsString
    // - dateStartAsString
    // - durationAsString

    const {
      dateEndMonth, dateEndYear, datePresent, dateStartMonth, dateStartYear,
    } = this.props;

    if ((dateEndMonth && dateEndYear && dateStartMonth && dateStartYear)
        || (dateStartMonth && dateStartYear && datePresent)) {
      // Format Dates as strings
      let dateEndAsDate;
      let dateStartAsDate;
      const dateFormat = { year: 'numeric', month: 'short' };
      if (datePresent) {
        dateEndAsDate = new Date(Date.now());
        dateStartAsDate = new Date(Date.UTC(dateStartYear, dateStartMonth, 1));
        this.dateEndAsString = 'present';
        this.dateStartAsString = new Intl.DateTimeFormat('en-US', dateFormat).format(dateStartAsDate);
      } else {
        dateEndAsDate = new Date(Date.UTC(dateEndYear, dateEndMonth, 1));
        dateStartAsDate = new Date(Date.UTC(dateStartYear, dateStartMonth, 1));
        this.dateEndAsString = new Intl.DateTimeFormat('en-US', dateFormat).format(dateEndAsDate);
        this.dateStartAsString = new Intl.DateTimeFormat('en-US', dateFormat).format(dateStartAsDate);
      }

      const duration = new Date(dateEndAsDate - dateStartAsDate);
      this.durationAsString = '';

      // Calculate Duration Year(s)
      const durationYear = duration.getFullYear() - 1970;
      switch (durationYear) {
      case 0:
        break;
      case 1:
        this.durationAsString += (`${durationYear} yr`);
        break;
      default:
        this.durationAsString += (`${durationYear} yrs`);
        break;
      }

      // Calculate Duration Month(s)
      const durationMonth = duration.getMonth() + 1;
      if (durationYear > 0 && durationMonth > 0) {
        this.durationAsString += ' ';
      }
      switch (durationMonth) {
      case 0:
        break;
      case 1:
        this.durationAsString += (`${durationMonth} mon`);
        break;
      default:
        this.durationAsString += (`${durationMonth} mos`);
        break;
      }
      // Assume Education Component
    } else if (dateEndYear && dateStartYear) {
      const durationYear = dateEndYear - dateStartYear;
      this.durationAsString = '';

      switch (durationYear) {
      case 0:
        break;
      case 1:
        this.durationAsString += (`${durationYear} yr`);
        break;
      default:
        this.durationAsString += (`${durationYear} yrs`);
        break;
      }

      this.dateEndAsString = dateEndYear.toString();
      this.dateStartAsString = dateStartYear.toString();
    }
  }
}

Card.propTypes = {
  dateEndMonth: PropTypes.string.isRequired,
  dateEndYear: PropTypes.string.isRequired,
  datePresent: PropTypes.number,
  dateStartMonth: PropTypes.number.isRequired,
  dateStartYear: PropTypes.string.isRequired,
};

Card.defaultProps = {
  datePresent: false,
};

export default Card;
