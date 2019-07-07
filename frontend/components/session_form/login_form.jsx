import React from 'react';
import { withRouter } from 'react-router-dom';

const USERNAMES = ['jacob',
									'frank',
									'peter',
									'ridley',
									'becky',
									'francine',
									'abe',
									'zach',
									'craig',
									'dan']

class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleDemoSubmit = this.handleDemoSubmit.bind(this);

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

	handleDemoSubmit(e) {
		e.preventDefault();
		const name = USERNAMES[Math.floor(Math.random() * USERNAMES.length)];
		const user = {username: name, password: '123456'}
		this.props.processForm(user).then(() => this.props.history.push("/"));
	}

	renderIndErrors(type) {

		for (let i = 0; i < this.props.errors.length; i++) {

			if (this.props.errors[i].includes(type)) {
				return (
					<div className='error-display'>
						{this.props.errors[i]}
					</div>
				);
			}
		}
	}

	render() {
		return (
			<div className="login-background">
				<div className="login-form-container">
					<form onSubmit={this.handleSubmit} className="login-form-box">
						{/* <img src={logo} alt="image error"></img> */}
						<img className = 'login-logo' src="/images/Logo1.jpg" />
						<br />
						{/* Please {this.props.formType} or {this.props.navLink} */}
						{/* {this.renderErrors()} */}
						<div className="login-form">
							<br />
							<label><span className='tasker-txt login-txt'>Username</span>
								<input type="text"
									value={this.state.username}
									onChange={this.update('username')}
									className="login-input"
									id = "login-username"
								/>
								{this.renderIndErrors('Username')}
							</label>
							<br />
							<label><span className='tasker-txt login-txt'>Password</span>
								<input type="password"
									value={this.state.password}
									onChange={this.update('password')}
									className="login-input"
								/>
								{this.renderIndErrors('Password')}
							</label>
							<br />
							<input className="login-submit" type="submit" value="Log In" />
						</div>
					</form>
					<form onSubmit ={this.handleDemoSubmit}>
						<input className="demo-submit login-submit" type="submit" value="Demo Log In" />
					</form>
				</div>
			</div>
		);
	}
}

export default withRouter(LoginForm);