  
import React, { Component } from 'react'

import './Experience.scss';

import RciMap from './RciMap.js';

export class Experience extends Component {

    constructor(props) {
        super(props)
        this.refExperienceSkills = React.createRef();
    }

    showWebsite = () => {
        return ((this.props.type === 'personal project') && (this.props.url));
    }

    render() {
        return (
            <div className='Experience'>
                <div className='ExperienceTitle'>{this.props.title}</div>
                <div className='ExperienceType'>{this.props.type} · {this.props.time} min read</div>
                {this.props.skills ? <div className='ExperienceSkills'>{this.props.skills.sort().map(skill => React.createElement(RciMap[skill][0], { 'color': RciMap[skill][1] }, ''))}</div> : null}
                {this.showWebsite() ? <div className='ExperienceVisitWrapper'><a className='ExperienceChip ExperienceVisit' href={this.props.url} target='_blank' rel='noopener noreferrer'>visit website</a></div>: null}
                <div>{this.props.children}</div>
            </div>
        )
    }
}

export default Experience
