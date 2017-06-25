import React, { Component } from 'react';

class Signup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			password: '',
			gender: '',
			genderMale: 'male',
			genderFemale: 'female'
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		const target = event.target;
		const name = target.name;
		const value = target.value;

		this.setState({
			[name]: value
		});

		console.log(name, value, this.state);
	}

	handleSubmit(event) {
		alert('A name was submitted: ' + this.state.email);
		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit} >
				<div>
					<label>Name:</label>
					<input type="text" name="name" onChange={this.handleChange} value={this.state.name} />
				</div>
				<div>
					<label>Email:</label>
					<input type="email" name="email" onChange={this.handleChange} value={this.state.email} />
				</div>
				<div>
					<label>Password:</label>
					<input type="password" name="password" onChange={this.handleChange} value={this.state.password} />
				</div>
				<div>
					<input type="radio" name="gender" onChange={this.handleChange} value={this.state.genderMale} />Male
					<input type="radio" name="gender" onChange={this.handleChange} value={this.state.genderFemale} />Female
				</div>
				<div><input type="submit" value="Create Account" /></div>
			</form>
		)
	}
}

export default Signup;