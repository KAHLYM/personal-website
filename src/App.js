import './App.scss';

import { useEffect } from 'react';
import { BrowserRouter, useHistory, Switch, Route } from 'react-router-dom'

import About from './components/About.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Portfolio from './components/Portfolio.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Sophos from './components/Sophos.jsx';
import University from './components/University.jsx';
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

import { initializeApp } from 'firebase/app'
import { getAnalytics, logEvent } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBn6hxxiWlrkfqjRw_2KS9MqjLIdcSuWss",
  authDomain: "personal-website-2d0be.firebaseapp.com",
  projectId: "personal-website-2d0be",
  storageBucket: "personal-website-2d0be.appspot.com",
  messagingSenderId: "1003861772544",
  appId: "1:1003861772544:web:bede1ba23a8c1d30444be5",
  measurementId: "G-SYK8S6TJB7"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const logCurrentScreen = () => {
  logEvent(analytics, 'screen_view', {
    firebase_screen: window.location.pathname
  });
};

const AnalyticsComponent = () => {
  const history = useHistory();
  useEffect(() => {
    logCurrentScreen(); // log the first page visit
    history.listen(() => {
      logCurrentScreen();
    });
  }, [history]);
  return (null);
};

function App() {
  return (
    <div className="App">
      <div className="AppContainer">
        <BrowserRouter>
          <AnalyticsComponent />
          <ScrollToTop />
          <Header className="Header"></Header>
          <div className="Container">
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/about' component={About} />
              <Route path='/portfolio' component={Portfolio} />
              <Route path='/sophos' component={Sophos} />
              <Route path='/university' component={University} />
              <Route path='/whanalysis' component={Whanalysis} />
            </Switch>
          </div>
          <Footer className="Footer"></Footer>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
