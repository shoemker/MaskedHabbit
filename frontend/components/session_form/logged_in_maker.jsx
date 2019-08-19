import React from 'react';

import NavbarContainer from '../navbar/navbar_container'


class LoggedInMakerForm extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			task_maker_id: this.props.currentUser.id,
			brief: '',
			description: '',
			location: '',
			category_id: 0,
			completed: false
		};
	
		this.handleSubmit = this.handleSubmit.bind(this);
	}


	handleSubmit(e) {
		e.preventDefault();
		debugger
		// const user = Object.assign({}, this.state);
		// this.props.processForm(user).then(() => this.props.history.push("/doer"));

	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	render() {
		return (
			<div>
				<header>
					<NavbarContainer />
				</header>
					<div className="maker-background">
						<div className= "maker-form-container">
							<form onSubmit={this.handleSubmit} className="signup-form-box">

								<div className="signup-form">

									<dir className="maker-form-title">Describe a New Task</dir>
									<label>
										<input type="text"
											placeholder="  Brief Description"
								
											onChange={this.update('brief')}
											className="signup-input"
										/>
									</label>
									{/* {this.renderErrors('Brief')} */}
									<br />

									<label>
										<input type="text"
											placeholder="  Longer Description"

											onChange={this.update('description')}
											className="signup-input"
										/>
									</label>
									{/* {this.renderErrors('Brief')} */}
									<br />

									<label>
										<input type="Location"
											placeholder="  Location"

											onChange={this.update('location')}
											className="signup-input"
										/>
									</label>
									{/* {this.renderErrors('Brief')} */}
									<br />
									<label>
										<select name="Category" id="cat_selector" onChange={this.update('category_id')}>
											<option value="1">Mounting & Installation</option>
											<option value="2">Moving & Packing</option>
											<option value="3">Furniture Assembly</option>
											<option value="4">Home Improvement</option>
											<option value="5">General Handyman</option>
											<option value="6">Heavy Lifting</option>
										</select>

									</label>
									<br></br>
									<span className='tasker-txt'>Vehicle Needed?</span>
									<input type="checkbox"
										className="tasker-checkbox" 
										value="true"
										onChange={this.check}></input>
									<input className="signup-submit" type="submit" value="Create New Task" />
								
									<br></br>
								</div>
							</form>
						
						</div>
					</div>
			</div>
		)
	}
}


export default LoggedInMakerForm