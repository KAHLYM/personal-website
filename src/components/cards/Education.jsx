import PropTypes from 'prop-types';

import Card from '../cards/Card';

class Education extends Card {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            color, date, description, duration, image, title
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
                                `${date} · ${duration}`
                            }
                        </p>
                    </div>
                </div>
                <div className="CardActionContainer">

                </div>

            </div>
        );
    }
}

Education.propTypes = {
    color: PropTypes.string.isRequired,
    componentName: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default Education;
