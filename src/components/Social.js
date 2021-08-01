import React, { Component } from 'react'

import './Social.scss';

import { Github, Gmail, Linkedin } from '@icons-pack/react-simple-icons';

export class Social extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className='SocialWrapper' style={{marginBottom: this.props.bottom + 'px'}}>
                <a className='SocialIcon animated fadeIn animatedDelay500ms' href={'https://www.github.com/KAHLYM'} target='_blank' rel='noopener noreferrer'>
                    <Github color={this.state.socialIconGithub} size={this.props.size} onMouseEnter={() => this.setState({ socialIconGithub: '#181717' })} onMouseLeave={() => this.setState({ socialIconGithub: "rgba(31, 31, 31, 0.64)" })} />
                </a>
                <a className='SocialIcon animated fadeIn animatedDelay500ms' href={'https://www.linkedin.com/in/callum-wright-81baa3127/'} target='_blank' rel='noopener noreferrer'>
                    <Linkedin color={this.state.socialIconLinkedin} size={this.props.size} onMouseEnter={() => this.setState({ socialIconLinkedin: '#0077B5' })} onMouseLeave={() => this.setState({ socialIconLinkedin: "rgba(31, 31, 31, 0.64)" })} />
                </a>
                <a className='SocialIcon animated fadeIn animatedDelay500ms' href={'mailto:wrightci01w@gmail.com'} style={{marginRight: '0px'}}>
                    <Gmail color={this.state.socialIconGmailColor} size={this.props.size} onMouseEnter={() => this.setState({ socialIconGmailColor: '#D14836' })} onMouseLeave={() => this.setState({ socialIconGmailColor: "rgba(31, 31, 31, 0.64)" })} />
                </a>
            </div>
        )
    }
}

export default Social