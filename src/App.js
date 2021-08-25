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

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Header class="Header"></Header>
        <div class="Container">
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' component={About} />
            <Route path='/sophos' component={Sophos} />
            <Route path='/portfolio' component={Portfolio} />
            <Route path='/whanalysis' component={Whanalysis} />
          </Switch>
        </div>
        <Footer class="Footer"></Footer>
      </Router>
    </div>
  );
}

export default App;
