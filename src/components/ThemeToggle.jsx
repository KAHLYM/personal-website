import React, { Component } from 'react';

import ModeDark from '../assets/mode-dark.png';
import ModeLight from '../assets/mode-light.png';

class ThemeToggle extends Component {
    switchTheme = () => {
      const app = document.getElementsByClassName('App')[0];

      const themeToggleButton = document.getElementById('ThemeToggleButton');
      const themeToggleButtonLight = document.getElementById('ThemeToggleButtonLight');
      const themeToggleButtonDark = document.getElementById('ThemeToggleButtonDark');

      if (app.classList.contains('Dark')) {
        app.classList.remove('Dark');
        themeToggleButton.style.backgroundColor = 'rgba(0, 0, 0, .1)';
        themeToggleButtonLight.style.transform = 'translateY(0px)';
        themeToggleButtonDark.style.transform = 'translateY(-50px)';
      } else {
        app.classList.add('Dark');
        themeToggleButton.style.backgroundColor = 'rgba(255, 255, 255, .1)';
        themeToggleButtonLight.style.transform = 'translateY(50px)';
        themeToggleButtonDark.style.transform = 'translateY(0px)';
      }
    }

    render() {
      return (
        <div className="ThemeToggle">
          <button id="ThemeToggleButton" onClick={this.switchTheme} type="button">
            <img id="ThemeToggleButtonLight" src={ModeLight} alt="light theme" />
            <img id="ThemeToggleButtonDark" src={ModeDark} alt="dark theme" />
          </button>
        </div>
      );
    }
}

export default ThemeToggle;
