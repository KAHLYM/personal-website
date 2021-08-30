import React, { Component } from 'react';

import ModeDark from '../assets/mode-dark.png';
import ModeLight from '../assets/mode-light.png';

class ThemeToggle extends Component {
    switchTheme = () => {
        var app = document.getElementsByClassName("App")[0];

        var themeToggleButton = document.getElementById("ThemeToggleButton");
        var themeToggleButtonLight = document.getElementById("ThemeToggleButtonLight");
        var themeToggleButtonDark = document.getElementById("ThemeToggleButtonDark");
        
        if (app.classList.contains("Dark"))
        {
            app.classList.remove("Dark");
            themeToggleButton.style.backgroundColor = "rgba(0, 0, 0, .1)";
            themeToggleButtonLight.style.transform = "translateY(0px)";
            themeToggleButtonDark.style.transform = "translateY(-50px)";
        }
        else
        {
            app.classList.add("Dark");
            themeToggleButton.style.backgroundColor = "rgba(255, 255, 255, .1)";
            themeToggleButtonLight.style.transform = "translateY(50px)";
            themeToggleButtonDark.style.transform = "translateY(0px)";
        }
    }
      
    render() {
        return (
            <div className="ThemeToggle">
                <button id="ThemeToggleButton" onClick={this.switchTheme}>
                    <img id="ThemeToggleButtonLight" src={ModeLight}/>
                    <img id="ThemeToggleButtonDark" src={ModeDark}/>
                </button>
            </div>
        );
    }
}

export default ThemeToggle;
