import React, { Component } from 'react';

import ModeDark from '../assets/mode-dark.png';
import ModeLight from '../assets/mode-light.png';
import { LogEventTheme } from './Analytics';

class ThemeToggle extends Component {
  componentDidMount() {
    const now = new Date();
    const hours = now.getHours();

    this.isComponentMounted = false;

    this.updateTheme(hours >= 9 && hours <= 18);

    this.isComponentMounted = true;
  }

  switchTheme = () => {
    const app = document.getElementsByClassName('App')[0];
    this.updateTheme(app.classList.contains('Dark'));
  }

  updateTheme = (enableLightTheme) => {
    const app = document.getElementsByClassName('App')[0];

    const themeToggleButton = document.getElementById('ThemeToggleButton');
    const themeToggleButtonLight = document.getElementById('ThemeToggleButtonLight');
    const themeToggleButtonDark = document.getElementById('ThemeToggleButtonDark');

    const metaThemeColor = document.querySelector('meta[name=theme-color]');

    if (enableLightTheme) {
      app.classList.remove('Dark');
      themeToggleButton.style.backgroundColor = 'rgba(0, 0, 0, .1)';
      themeToggleButtonLight.style.transform = 'translateY(0px)';
      themeToggleButtonDark.style.transform = 'translateY(-50px)';
      if (metaThemeColor) {
        metaThemeColor.setAttribute('content', '#FFFFFF');
      }
    } else {
      app.classList.add('Dark');
      themeToggleButton.style.backgroundColor = 'rgba(255, 255, 255, .1)';
      themeToggleButtonLight.style.transform = 'translateY(50px)';
      themeToggleButtonDark.style.transform = 'translateY(0px)';
      if (metaThemeColor) {
        metaThemeColor.setAttribute('content', '#121212');
      }
    }

    // LogEventTheme if user input and not initial componentDidMount
    if (this.isComponentMounted) {
      LogEventTheme(enableLightTheme ? 'light' : 'dark');
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
