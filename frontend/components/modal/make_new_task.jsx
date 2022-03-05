import React from 'react';


class MakeNewTaskForm extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			task_maker_id: this.props.currentUser.id,
			brief: '',
			description: '',
			location: '',
			category_id: 1,
			completed: false,
			photoFile: null,
			photoUrl: null
		};
	
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	componentWillUnmount() {
	}


	handleSubmit(e) {
		e.preventDefault();
		const formData = new FormData();
		formData.append('task[task_maker_id]', this.state.task_maker_id);
		formData.append('task[brief]', this.state.brief);
		formData.append('task[description]', this.state.description);
		formData.append('task[location]', this.state.location);
		formData.append('task[category_id]', this.state.category_id);
		formData.append('task[completed]', this.state.completed);
		
		if (this.state.photoFile) formData.append('task[photo]', this.state.photoFile);
		
		$.ajax({
			url: '/api/tasks',
			method: 'POST',
			data: formData,
			contentType: false,
			processData: false
		}).then(
			(response) =>  { 
				console.log(response.message);
				console.log(response.responseJSON);
				this.props.fetchTasks()
		});

		this.props.closeModal()
	}

	handleClick(e) {
		
		this.props.closeModal();
	}

	handleFile(e) {
		const file = e.currentTarget.files[0];
		const fileReader = new FileReader();
		fileReader.onloadend = () => {
			this.setState({ photoFile: file, photoUrl: fileReader.result });
		};
		if (file) {
			fileReader.readAsDataURL(file);
		}
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	render() {
		return (

			<div className = "modal-background">
				<div className= "maker-form-container">
					<div className = "closing-x" onClick = {this.handleClick}>X</div>
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
									<option>Category</option>
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
							<div className = "pic-upload-label">
								<input type="file"
									className = "custom-file-input"
									onChange={this.handleFile.bind(this)} />
									
							</div>
							<input className="signup-submit" type="submit" value="Create New Task" />
						
							<br></br>
						</div>
					</form>
				
				</div>
			</div>
		)
	}
}


export default MakeNewTaskForm