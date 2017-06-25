import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Home.js';
import Login from './Login';
import Signup from './Signup';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div>
            <span><Link to="/login">Login</Link></span>
            <span><Link to="/signup">Signup</Link></span>
          </div>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </div>
      </Router>
    );
  }
}

export default App;
