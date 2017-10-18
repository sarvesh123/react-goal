import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import MyAccount from './MyAccount';
import Chat from './Chat'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="row">
          <div className="col-12">
            <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                  <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/signup">Signup</Link></li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="col-12">
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/users/:id" component={MyAccount} />
            <Route path="/chat/:userId" component={Chat} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
