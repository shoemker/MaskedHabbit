import React from 'react';
import { withRouter } from 'react-router-dom';

import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			email: '',
			price_per_hour: '',
			is_tasker: false
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

		this.props.processForm(user).then(() => {
			
			if (user.is_tasker) this.props.history.push("/doer");
			else this.props.history.push("/maker");							// doesn't work
		
		});

		// if (user.is_tasker) {
		// 	this.props.processForm(user).then(() => this.props.history.push("/doer"));
		// }
		// else {
		// 	this.props.processForm(user).then(() => this.props.history.push("/maker"));
		// }
	}


	renderErrors(type) {
	
		for(let i = 0; i< this.props.errors.length; i++){
			if (this.props.errors[i].includes(type)) return this.props.errors[i];		
		}
	}

	render() {
		return (
			<div>
				<header>
					<nav className="navbar-container" >
						<Link to="/">
							<img className='nav-logo' src={window.logoURL} />

						</Link>
					</nav>
				</header>
				<div className = "signup-background">

				<div className = 'left-text'>
					<div className="text-white left-1">Start Tasking.</div>
					<div className="text-white left-2">Earn money your way.</div>
					<div className="text-white left-3">Be someone's hero today. Earn money by helping people with their everyday to-dos.</div>
				</div>
				<div className = "signup-form-container">
					<form onSubmit={this.handleSubmit} className="signup-form-box">
						<h2 className="signup-form-title">Become a Masker</h2>
						<div className="all-fields-required">Create an account to get started. All fields required.	</div>

					
						<div className="signup-form">
						
							<label>
								<input type="text"
									placeholder = " Username"
									value={this.state.username}
									onChange={this.update('username')}
									className="signup-input"
								/>
							</label>
							<div className='error-display'>
								{this.renderErrors('Username')}
							</div>
							<br />
							
							<label>
								<input type="password"
									placeholder = " Password"
									value={this.state.password}
									onChange={this.update('password')}
									className="signup-input"
								/>
							</label>

							<div className='error-display'>
								{this.renderErrors('Password')}
							</div>
							<br />

							<label>
								<input type="text"
									placeholder=" E-mail"
									value={this.state.email}
									onChange={this.update('email')}
									className="signup-input"
								/>
							</label>
							<div className='error-display'>

								{this.renderErrors('Email')}
							</div>
							<br />

							<label>
								<input type="text"
									placeholder=" Price Per Hour"
									value={this.state.price_per_hour}
									onChange={this.update('price_per_hour')}
									className="signup-input"
								/>
							</label>
							<div className='error-display'>

								{this.renderErrors('Price')}
							</div>
							<br />
								<label >
									<select name="Role?" className="role_selector" onChange={this.update('is_tasker')}>
										<option>Role?</option>
										<option value="false">Task-Maker</option>
										<option value="true">Task-Doer</option>
									</select>

								</label>

								<br></br>
							<input className="signup-submit" type="submit" value="Registration" />
								<br></br><div id='account-question'>Already have an account?</div>
							<div id= "link-dark">
								<Link to="/login" className="link-get-rid-of-underline">
										<div className='login-link'>Log in to continue</div>
								</Link>
							</div>
							{/* {this.renderErrors()} */}
						</div>
					</form>
				</div>
			</div>
			</div>
		);
	}
}

export default withRouter(SignupForm);