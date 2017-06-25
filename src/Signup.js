import React, { Component } from 'react';
import Pagetitle from './Pagetitle.js';

class Signup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			password: '',
			gender: '',
			genderMale: 'male',
			genderFemale: 'female',
			errorName: '',
			errorEmail: '',
			errorPassword: '',
			errorGender: ''
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
	}

	checkEmpty(val) {
		return val.trim() === '';
	}

	handleFormErrors() {
		this.setState({
			errorName: '',
			errorEmail: '',
			errorPassword: '',
			errorGender: ''
		});
		if (this.checkEmpty(this.state.name)) {
			this.setState({errorName: 'Enter Name'});
		}
		if (this.checkEmpty(this.state.email)) {
			this.setState({errorEmail: 'Enter Email'});
		}
		if (this.checkEmpty(this.state.password)) {
			this.setState({errorPassword: 'Enter Password'});
		}
		if (!this.state.gender) {
			this.setState({errorGender: 'Select Gender'});
		}
	}

	handleSubmit(event) {
		this.handleFormErrors();
		event.preventDefault();
	}

	render() {
		const nameError = this.state.errorName;
		const emailError = this.state.errorEmail;
		const passwordError = this.state.errorPassword;
		const genderError = this.state.errorGender;

		let nameErrorElem = null;
		let emailErrorElem = null;
		let passwordErrorElem = null;
		let genderErrorElem = null;

		if (nameError) {
			nameErrorElem = <p className="alert alert-danger">{nameError}</p>;
		}
		if (emailError) {
			emailErrorElem = <p className="alert alert-danger">{emailError}</p>;
		}
		if (passwordError) {
			passwordErrorElem = <p className="alert alert-danger">{passwordError}</p>;
		}
		if (genderError) {
			genderErrorElem = <p className="alert alert-danger">{genderError}</p>
		}
		return (
			<div className="col-6">
				<Pagetitle title="Signup" />
				<form onSubmit={this.handleSubmit} noValidate>
					<div className="form-group">
						<label>Name:</label>
						<input type="text" className="form-control" name="name" onChange={this.handleChange} value={this.state.name} />
						{nameErrorElem}
					</div>
					<div className="form-group">
						<label>Email:</label>
						<input type="email" className="form-control" name="email" onChange={this.handleChange} value={this.state.email} />
						{emailErrorElem}
					</div>
					<div className="form-group">
						<label>Password:</label>
						<input type="password" className="form-control" name="password" onChange={this.handleChange} value={this.state.password} />
						{passwordErrorElem}
					</div>
					<div className="form-check">
						<label className="form-check-label">
							<input type="radio" className="form-check-input" name="gender" 
							onChange={this.handleChange} value={this.state.genderMale} />
							&nbsp;Male
						</label>
					</div>
					<div className="form-check">
						<label className="form-check-label">
							<input type="radio" className="form-check-input" name="gender" onChange={this.handleChange} value={this.state.genderFemale} />
							&nbsp;Female
						</label>
					</div>
					{genderErrorElem}
					<button type="submit" className="btn btn-primary">Create Account</button>
				</form>
			</div>
		)
	}
}

export default Signup;