import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

const DOER_NAMES = ['jacob',
									'frank',
									'peter',
									'ridley',
									'becky']

const MAKER_NAMES = ['francine',
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
		this.handleDemoMakerSubmit = this.handleDemoMakerSubmit.bind(this);
		this.handleDemoDoerSubmit = this.handleDemoDoerSubmit.bind(this);
		// this.props.errors=[];
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = Object.assign({}, this.state);
		this.props.processForm(user).then( () => {
			debugger
			this.props.history.push("/doer")
		});
		
	}

	handleDemoMakerSubmit(e) {
		e.preventDefault();
		let name = MAKER_NAMES[Math.floor(Math.random() * MAKER_NAMES.length)];
		let user = {username: name, password: '123456'}
		this.props.processForm(user).then(() => this.props.history.push("/maker"));
	}

	handleDemoDoerSubmit(e){
		e.preventDefault();
		let name = DOER_NAMES[Math.floor(Math.random() * DOER_NAMES.length)];
		let user = { username: name, password: '123456' }
		this.props.processForm(user).then(() => this.props.history.push("/doer"));
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
						<Link to="/">
							<img className='login-logo' src={window.logoURL} />
						</Link>
						<br />
						{/* Please {this.props.formType} or {this.props.navLink} */}
						{/* {this.renderErrors()} */}
						<div className="login-form">
							<br />
							<label><span className='login-txt'>Username</span>
								<input type="text"
									value={this.state.username}
									onChange={this.update('username')}
									className="login-input"
									id = "login-username"
								/>
								{this.renderIndErrors('username')}
							</label>
							<br />
							<label><span className='login-txt'>Password</span>
								<input type="password"
									value={this.state.password}
									onChange={this.update('password')}
									className="login-input"
								/>
								{this.renderIndErrors('password')}
							</label>
							<br />
							<input className="login-submit" type="submit" value="Log In" />
						</div>
					</form>
					<form onSubmit ={this.handleDemoMakerSubmit}>
						<input className="demo-submit login-submit" type="submit" value="Demo Task Maker Log In" />
					</form>
					<form onSubmit={this.handleDemoDoerSubmit}>
						<input className="demo-submit login-submit" type="submit" value="Demo Task Doer Log In" />
					</form>
				</div>
			</div>
		);
	}
}

export default withRouter(LoginForm);