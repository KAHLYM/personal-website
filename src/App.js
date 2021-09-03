import './App.scss';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import About from './components/About.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Portfolio from './components/Portfolio.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Sophos from './components/Sophos.jsx';
import Whanalysis from './components/Whanalysis.jsx';

import './components/cards/Card.scss';
import './components/About.scss';
import './components/Animation.scss';
import './components/Colors.scss';
import './components/Experience.scss';
import './components/ExperienceSection.scss';
import './components/Fonts.scss';
import './components/Footer.scss';
import './components/Header.scss';
import './components/Home.scss';
import './components/Social.scss';
import './components/ThemeToggle.scss';
import './components/Width.scss';

require('dotenv').config();

function App() {
  return (
    <div className="App">
      <div className="AppContainer">
        <Router>
          <ScrollToTop />
          <Header className="Header"></Header>
          <div className="Container">
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/about' component={About} />
              <Route path='/sophos' component={Sophos} />
              <Route path='/portfolio' component={Portfolio} />
              <Route path='/whanalysis' component={Whanalysis} />
            </Switch>
          </div>
          <Footer className="Footer"></Footer>
        </Router>
      </div>
    </div>
  );
}

export default App;
