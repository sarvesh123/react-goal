import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';

class Menu extends Component {
	render() {
		return (
			<div>
				<ul>
					<li><Link to="/login">Login</Link></li>
					<li><Link to="/signup">Signup</Link></li>
				</ul>
				<Route path="/login" component={Login} />
				<Route path="/signup" component={Signup} />
      		</div>
		);
	}
}

export default Menu;