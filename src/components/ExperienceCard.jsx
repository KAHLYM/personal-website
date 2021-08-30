import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export class ExperienceCard extends Component {
    constructor(props) {
        super(props);

        const { dateEndMonth, dateEndYear, datePresent, dateStartMonth, dateStartYear } = this.props;
        
        var dateEndAsDate, dateStartAsDate;
        const dateFormat = { year: 'numeric', month: 'short' };
        if (datePresent)
        {
            dateEndAsDate = new Date(Date.now());
            dateStartAsDate = new Date(Date.UTC(dateStartYear, dateStartMonth, 1));
            this.dateEndAsString = "present";
            this.dateStartAsString = new Intl.DateTimeFormat('en-US', dateFormat).format(dateStartAsDate);
        }
        else
        {
            dateEndAsDate = new Date(Date.UTC(dateEndYear, dateEndMonth, 1));
            dateStartAsDate = new Date(Date.UTC(dateStartYear, dateStartMonth, 1));
            this.dateEndAsString = new Intl.DateTimeFormat('en-US', dateFormat).format(dateEndAsDate);
            this.dateStartAsString = new Intl.DateTimeFormat('en-US', dateFormat).format(dateStartAsDate);
        }

        const duration = new Date(dateEndAsDate - dateStartAsDate);
        this.durationAsString = "";

        const durationYear = duration.getFullYear() - 1970;
        switch (durationYear) {
            case 0:
                break;
            case 1:
                this.durationAsString += (durationYear + " yr");
                break;
            default:
                this.durationAsString += (durationYear + " yrs");
                break;
        }

        const durationMonth = duration.getMonth() + 1;
        if (durationYear > 0 && durationMonth > 0)
        {
            this.durationAsString += " ";
        }
        switch (durationMonth) {
            case 0:
                break;
            case 1:
                this.durationAsString += (durationMonth + " mon");
                break;
            default:
                this.durationAsString += (durationMonth + " mos");
                break;
        }
    }

    onClickVisit = (e) => {
        const { url } = this.props;
        window.open(url, "_blank");
    }

    onMouseEnter = (e) => {
        const { color } = this.props;
        e.target.style.color = color;
    }

    onMouseLeave(e) {
        e.target.style.color = "white";
    }

    render() {
        const { children, color, componentName, dateOverride, description, image, title, url} = this.props;
        return (
            <div className="ExperienceCard" style={{ backgroundColor: color }}>
                <div className="ExperienceCardContainer">
                    <div className="ExperienceCardImageContainer">
                        <img className="ExperienceCardImage" src={image} alt="image" />
                    </div>
                    <div className="ExperienceCardTextContainer">
                        <p className="ExperienceCardTitle">{title}</p>
                        <p className="ExperienceCardDescription">{description}</p>
                        <p className="ExperienceCardDate">
                            {
                                dateOverride &&
                                dateOverride + " · " + this.durationAsString
                            }
                            {
                                !dateOverride &&
                                this.dateStartAsString + " - " + this.dateEndAsString + " · " + this.durationAsString
                            }
                        </p>
                    </div>
                    <div className="ExperienceCardActionContainer">
                        <NavLink to={"/" + componentName} activeClassName="IsActive">
                            <button
                                className="ExperienceCardAction"
                                onMouseEnter={this.onMouseEnter}
                                onMouseLeave={this.onMouseLeave}
                            >
                                read more
                            </button>
                        </NavLink>
                        {
                            url &&
                            <button
                                className="ExperienceCardAction"
                                onClick={this.onClickVisit}
                                onMouseEnter={this.onMouseEnter}
                                onMouseLeave={this.onMouseLeave}
                            >
                                visit
                            </button>
                        }
                    </div>
                </div>
                <div className="ExperienceCardChildren">
                    {children}
                </div>
            </div>
        );
    }
}

ExperienceCard.propTypes = {
    children: PropTypes.node,
    color: PropTypes.string,
    componentName: PropTypes.string,
    dateOverride: PropTypes.string,
    datePresent: PropTypes.bool,
    dateStartMonth: PropTypes.number,
    dateStartYear: PropTypes.number,
    description: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string,
};

export default ExperienceCard;
