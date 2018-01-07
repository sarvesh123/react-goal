import React, { Component } from 'react';
import Pagetitle from './Pagetitle';
import { Redirect } from 'react-router-dom';
import { reactLocalStorage } from 'reactjs-localstorage'

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			redirectToDashboard: false,
			userId: '',
			loginMessage: ''
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
		event.preventDefault();
		fetch('http://localhost:3000/api/users/login', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: this.state.email,
				password: this.state.password
			})
		}).then((response) => response.json())
		.then((responseJson) => {
			if (responseJson.status === true) {
				reactLocalStorage.set('isLoggedIn', 'loggedIn')
				reactLocalStorage.set('userId', responseJson.user.id)
				this.props.callback()
				this.setState({ 
					redirectToDashboard: true,
					userId: responseJson.user.id
				});
			}
			else {
				this.setState({
					loginMessage: responseJson.message
				})
			}
		})
		.catch((error) => {
			console.log(error);
		})
	}

	render() {
		if (this.state.redirectToDashboard) {
			return (
				<Redirect to={'/users/' + this.state.userId} />
			)
		}
		else {
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
					<span>{this.state.loginMessage}</span>
				</div>
			)
		}
	}
}

export default Login;