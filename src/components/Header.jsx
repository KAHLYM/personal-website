import React from 'react';
import { NavLink } from 'react-router-dom';

import resume from '../assets/Resume.pdf';
import ExternalLink from './ExternalLink';

import ThemeToggle from './ThemeToggle';

function Header() {
  return (
    <div className="Header animated fadeIn animatedDelay500ms">
      <div className="HeaderLeft">
        <ThemeToggle />
        <ExternalLink
          classNames={['HeaderNavLink']}
          href={resume}
        >
          RÉSUMÉ
        </ExternalLink>
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

export default Header;
