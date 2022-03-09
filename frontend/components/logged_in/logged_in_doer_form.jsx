import React from 'react';
import Task from '../tasks/task';
import Geocode from "react-geocode";
import NavbarContainer from '../navbar/navbar_container';


class LoggedInDoerForm extends React.Component {
		constructor(props) {
		super(props);
	
		this.state = {
			categoryId: 0
		}

			const apiKey = window.googleAPIKey;

			Geocode.setApiKey(apiKey);
			Geocode.fromAddress("698 Lombard St san francisco").then(
				(response) => {
					const { lat, lng } = response.results[0].geometry.location;
					console.log(lat, lng);
				},
				(error) => {
					console.error(error);
				}
			);

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(task) {

		task.task_doer_id = this.props.currentUser.id;
		
		this.props.updateTask(task).then(() => this.props.fetchTasks());
	}

	componentDidMount() {
		this.props.fetchTasks();
	}



	render() {
		let tasksToDo = [];
		let tasksSelected = [];

		// sends makers to maker dashboard page
		if (this.props.tasks.length > 0 && !this.props.currentUser.is_tasker)
			this.props.history.push("/maker");
		
		(this.props.tasks.length > 0) && this.props.tasks.forEach( (task) => {
			if (this.state.categoryId === task.category_id && task.completed === false && task.task_doer_id === null) 
			{
				tasksSelected.push(task);
			}

			if (this.props.currentUser.id === task.task_doer_id) {
				tasksToDo.push(task);
			}
		})


		let welcome;
		if (tasksToDo.length === 0) welcome = "Welcome " + this.props.currentUser.username + ". You've agreed to do no tasks so far."
		else welcome = "Welcome " + this.props.currentUser.username + ". You've agreed to do these tasks:";
		
		let instructions = "Click on category for more available tasks.";
		return (
			<div >
				<header>
					<NavbarContainer />
				</header>

				<div className="logged-in-doer-main">
					<div className = "after-main">
						<div className="tasks-cat-greeting-doer" style={{ width: welcome.length * 12.7 + "px" }}>
							<h2 className="task-cat-greeting">{welcome}</h2>
						</div>

						<div className="parent-task-doer-container">
							{this.props.tasks.length > 0 && tasksToDo.map((task) => {
								return (
									<Task task={task} />
								)	
							})}
						</div>
						<div className="tasks-cat-greeting-doer2" style={{ width: instructions.length * 12.7 + "px" }}>
							<h2 className="task-cat-greeting">{instructions}</h2>
						</div>
						
						<div className = "available-tasks">
							<div className="buttons-all">

								<form onSubmit={() => this.setState({ categoryId: 1 })}>
									<button className="category-doer-button" type="submit" >Mounting & Installation</button>
								</form>
						
								<form onSubmit={() => this.setState({ categoryId: 2 })}>
									<button className="category-doer-button" type="submit" >Moving & Packing</button>
								</form>
						
								<form onSubmit={() => this.setState({ categoryId: 3 })}>
									<button className="category-doer-button" type="submit">Furniture Assembly</button>
								</form>
							
								<form onSubmit={() => this.setState({ categoryId: 4 })}>
									<button className="category-doer-button" type="submit">Home Improvement</button>
								</form>

								<form onSubmit={() => this.setState({ categoryId: 5 })}>
									<button className="category-doer-button" type="submit">General Handyman</button>
								</form>

								<form onSubmit={() => this.setState({ categoryId: 6 })}>
									<button className="category-doer-button"type="submit" type="submit">Heavy Lifting</button>
								</form>

							</div>

							<div className="logged-in-doer-right">
								{this.props.tasks.length > 0 && tasksSelected.map((task) => {
									return (
										<form key = {task.id} onSubmit=	{() => {
											if (window.confirm('Agree to do this task?')) 
												this.handleSubmit(task)}} className='doer-task-container2' id = {task.id}>
											<div className= "outside-task-cont-with-button">
												<Task task={task} />

												< button className="task-accept-button" type="submit" > Accept Task</button>
											</div>
										</form>
									)

							})}
							</div>
						</div>
					</div>
				</div>

			</div>
		)
	}
}


export default LoggedInDoerForm