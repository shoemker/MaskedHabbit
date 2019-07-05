import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
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
		this.props.processForm(user);
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

	render() {
		return (
			<div className = "signup-background">
				<div className = "signup-form-container">
					<form onSubmit={this.handleSubmit} className="signup-form-box">
						<h2 className="signup-form-title">Become a Masker</h2>
						<div>Create an account to get started. All fields required.	</div>

					
						<div className="signup-form">
						
							<label>
								<input type="text"
									placeholder = "username"
									value={this.state.username}
									onChange={this.update('username')}
									className="signup-input"
								/>
							</label>
							<br />
							
							<label>
								<input type="password"
									placeholder = "password"
									value={this.state.password}
									onChange={this.update('password')}
									className="signup-input"
								/>
							</label>
							<br />

							<label>
								<input type="text"
									placeholder="e-mail"
									value={this.state.password}
									onChange={this.update('email')}
									className="signup-input"
								/>
							</label>
							<br />

							<label>
								<input type="text"
									placeholder="price per hour"
									value={this.state.password}
									onChange={this.update('email')}
									className="signup-input"
								/>
							</label>
														<br />
							<input className="signup-submit" type="submit" value={this.props.formType} />
							<br></br>Already have an account? <br></br>{this.props.navLink}
							{this.renderErrors()}
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default withRouter(SignupForm);