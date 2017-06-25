import React, { Component } from 'react';
import Pagetitle from './Pagetitle';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	}

	handleSubmit(event) {
		alert('A name was submitted: ' + this.state.email);
		event.preventDefault();
	}

	render() {
		return (
			<div className="col-6">
				<Pagetitle title="Login" />
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label>Email:</label>
						<input type="text" name="email" className="form-control" onChange={this.handleChange} value={this.state.email} />
					</div>
					<div className="form-group">
						<label>Password:</label>
						<input type="password" name="password" className="form-control" onChange={this.handleChange} value={this.state.password} />
					</div>
					<button type="submit" className="btn btn-primary">Login</button>
				</form>
			</div>
		)
	}
}

export default Login;