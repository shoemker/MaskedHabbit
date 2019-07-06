import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = Object.assign({}, this.state);
		this.props.processForm(user).then( () => this.props.history.push("/"));
	}

	renderErrors() {
		return (
			<ul>
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	// renderErrors(type) {

	// 	for (let i = 0; i < this.props.errors.length; i++) {

	// 		if (this.props.errors[i].includes(type)) {
	// 			return (
	// 				<div className='error-display'>
	// 					{this.props.errors[i]}
	// 				</div>
	// 			);
	// 		}
	// 	}
	// }

	render() {
		return (
			<div className="login-background">
				<div className="login-form-container">
					<form onSubmit={this.handleSubmit} className="login-form-box">
						Welcome to MaskedHabbit login
						<br />
						Please {this.props.formType} or {this.props.navLink}
						{this.renderErrors()}
						<div className="login-form">
							<br />
							<label>Username:
								<input type="text"
									value={this.state.username}
									onChange={this.update('username')}
									className="login-input"
								/>
							</label>
							<br />
							<label>Password:
								<input type="password"
									value={this.state.password}
									onChange={this.update('password')}
									className="login-input"
								/>
							</label>
							<br />
							<input className="login-submit" type="submit" value={this.props.formType} />
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default withRouter(LoginForm);