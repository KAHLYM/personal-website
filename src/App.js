import './App.scss';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import About from './components/About.js'
import Home from './components/Home.js'
import Portfolio from './components/Portfolio.js';
import Sophos from './components/Sophos.js';
import Whanalysis from './components/Whanalysis.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/sophos' component={Sophos} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/whanalysis' component={Whanalysis} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
