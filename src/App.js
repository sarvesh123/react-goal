import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import MyAccount from './MyAccount';
import Chat from './Chat'
import {reactLocalStorage} from 'reactjs-localstorage'
import Signout from './Signout'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInState: false
    }
    this.updateRender = this.updateRender.bind(this);
  }

  updateRender() {
    let loggedInState = reactLocalStorage.get('isLoggedIn')
    if (loggedInState === 'loggedIn') {
      this.setState({
        loggedInState: true
      })
    }
    else {
      this.setState({
        loggedInState: false
      })
    }
  }
  render() {
    let authMenu = null;
    if (this.state.loggedInState === false) {
      authMenu = <ul className="navbar-nav"><li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li><li className="nav-item"><Link className="nav-link" to="/signup">Signup</Link></li></ul>
    }
    else {
      authMenu = <ul className="navbar-nav"><li className="nav-item"><Link className="nav-link" to="/users/{this.props.userId}">MyAccount</Link></li><li className="nav-item"><Link className="nav-link" to="/signout">Sign Out</Link></li></ul>
    }
    return (
      <Router>
        <div className="row">
          <div className="col-12">
            <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
              <div className="collapse navbar-collapse">
                {authMenu}
              </div>
            </nav>
          </div>
          <div className="col-12">
            <Route exact path="/" component={Home} />
            <Route path="/login" render={() => <Login callback={this.updateRender} />} />
            <Route path="/signup" component={Signup} />
            <Route path="/users/:id" component={MyAccount} isLoggedIn={this.state.isLoggedIn} />
            <Route path="/chat/:sender/user/:receiver" component={Chat} />
            <Route path="/signout" render={() => <Signout callback={this.updateRender} />} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
