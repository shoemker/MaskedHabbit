import React from 'react';
import MakeTaskError from "./make_task_error"
import Geocode from "react-geocode";

class MakeNewTaskForm extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			task_maker_id: this.props.currentUser.id,
			brief: '',
			description: '',
			location: '',
			category_id: 1,
			vehicle_needed: false,
			completed: false,
			photoFile: null,
			photoUrl: null,
			latitude: null,
			longitude: null,
			errorDescription: null,
			errorBrief: null,
			errorPic:null,
			errorLocation:null
		};
	
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.errorCheck = this.errorCheck.bind(this);
	}


	handleSubmit(e) {
		e.preventDefault();

		
		if (this.errorCheck()) {
			this.getLatLng();
		}
		
	}

	getLatLng = () => {
		const apiKey = window.googleAPIKey;
		Geocode.setApiKey(apiKey);
		Geocode.fromAddress(this.state.location + " San Francisco").then(
			(response) => {
				const { lat, lng } = response.results[0].geometry.location;
				// console.log(lat, lng);
				this.addToDB(lat,lng);
			},
			(error) => {
				console.error(error);
			}
		);
	}


	addToDB = (lat,lng) => {

		const formData = new FormData();
		formData.append('task[task_maker_id]', this.state.task_maker_id);
		formData.append('task[brief]', this.state.brief);
		formData.append('task[description]', this.state.description);
		formData.append('task[location]', this.state.location);
		formData.append('task[category_id]', this.state.category_id);
		formData.append('task[completed]', this.state.completed);
		formData.append('task[vehicle_needed]', this.state.vehicle_needed);
		formData.append('task[longitude]', lng);
		formData.append('task[latitude]', lat);


		if (this.state.photoFile) formData.append('task[photo]', this.state.photoFile);

		$.ajax({
			url: '/api/tasks',
			method: 'POST',
			data: formData,
			contentType: false,
			processData: false
		}).then(
			(response) => {
				// console.log(response.message);
				// console.log(response.responseJSON);
				this.props.fetchTasks();
			});
		this.props.closeModal();
	}



	errorCheck() {

		if (!this.state.brief) this.setState({ errorBrief: "Brief can't be blank"});
		else this.setState({errorBrief: null});

		if (!this.state.description) this.setState({ errorDescription: "Description can't be blank" });
		else this.setState({ errorDescription: null });

		if (!this.state.location) this.setState({ errorLocation: "Location can't be blank" });
		else this.setState({ errorLocation: null });

		if (!this.state.photoFile) this.setState({ errorPic: "Picture required" });
		else this.setState({ errorPic: null });


		if (this.state.brief && this.state.description && this.state.location && this.state.photoFile)
			return true;
		else return false;

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

	render() {		return (

			<div className = "modal-background">
				<div className= "maker-form-container">
					<div className="closing-x-container">
						<div className="closing-x" onClick = {this.handleClick}>X</div>
					</div>
					<form onSubmit={this.handleSubmit} className="signup-form-box">

						<div className="signup-form">

							<dir className="maker-form-title">Describe a New Task</dir>
							<label>
								<input type="text"
									placeholder="  Brief Description"
						
									onChange={this.update('brief')}
									className="new_task_input"
								/>
								<MakeTaskError error={this.state.errorBrief} />

							</label>
							<br />

							<label>
								<input type="text"
									placeholder="  Longer Description"

									onChange={this.update('description')}
									className="new_task_input"
								/>
							</label>
							{/* {this.renderErrors('Brief')} */}
							<MakeTaskError error={this.state.errorDescription} />

							<br />

							<label>
								<input type="Location"
									placeholder="  Street Address in San Francisco"
									onChange={this.update('location')}
									className="new_task_input"
								/>
							</label>
							{/* {this.renderErrors('Brief')} */}
							<MakeTaskError error={this.state.errorLocation} />

							<br />
							
							<label >
								<select name="Category" className="cat_selector"  onChange={this.update('category_id')}>
									<option>Category</option>
									<option value="1">Mounting & Installation</option>
									<option value="2">Moving & Packing</option>
									<option value="3">Furniture Assembly</option>
									<option value="4">Home Improvement</option>
									<option value="5">General Handyman</option>
									<option value="6">Heavy Lifting</option>
								</select>

							</label>

							<label >
								<select name="Vehicle Needed?" className="cat_selector" id="vehicle_selector" onChange={this.update('vehicle_needed')}>
									<option>Vehicle Needed?</option>
									<option value="true">Yes, vehicle is necessary.</option>
									<option value="false">No, vehicle is not necessary.</option>
								</select>

							</label>



							<div className = "pic-upload-label">
								<input type="file"
									className = "custom-file-input"
									onChange={this.handleFile.bind(this)} />
									
							</div>
							<MakeTaskError error={this.state.errorPic} />


							<input className="signup-submit" id = "new_task_button" type="submit" value="Create New Task" />
						
							<br></br>
						</div>
					</form>
				
				</div>
			</div>
		)
	}
}


export default MakeNewTaskForm;