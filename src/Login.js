import React, { Component } from 'react';

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
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>
						Name:
						<input type="text" name="email" onChange={this.handleChange} value={this.state.email} />
					</label>
					<label>
						Password:
						<input type="password" name="password" onChange={this.handleChange} value={this.state.password} />
					</label>
					<input type="submit" value="Submit"/>
				</form>
			</div>
		)
	}
}

export default Login;