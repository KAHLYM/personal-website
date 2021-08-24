import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Colors.scss';
import './Header.scss';

import resume from '../assets/Resume.pdf';

export class Header extends Component {
  render() {
    return (
      <div className="Header animated fadeIn animatedDelay500ms">
        <div className="HeaderLeft">
          <NavLink to="/resume" activeClassName="IsActive">
            <a className="HeaderNavLink" href={resume} target="_blank" rel="noopener noreferrer">RÉSUMÉ</a>
          </NavLink>
          <NavLink to="/about" activeClassName="IsActive">
            <span className="HeaderNavLink">ABOUT</span>
          </NavLink>
        </div>
        <div className="HeaderRight">
          <NavLink to="/" exact activeClassName="IsActive">
            <span className="HeaderNavLink">HOME</span>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Header;
