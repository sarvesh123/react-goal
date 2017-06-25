import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';

class Menu extends Component {
	render() {
		return (
			<nav class="navbar navbar-light bg-faded">
				<ul class="navbar-nav">
					<li class="nav-item"><Link to="/login">Login</Link></li>
					<li class="nav-item"><Link to="/signup">Signup</Link></li>
				</ul>
				<Route path="/login" component={Login} />
				<Route path="/signup" component={Signup} />
      		</nav>
		);
	}
}

export default Menu;