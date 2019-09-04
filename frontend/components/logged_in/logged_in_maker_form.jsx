import React from 'react';
import NavbarContainer from '../navbar/navbar_container'


class LoggedInMaker extends React.Component {


	componentDidMount() {
		this.props.fetchTasks();
	}


	render() {
		let tasksSelected = [];
	

		(this.props.tasks.length > 0) && this.props.tasks.forEach((task) => {
			if (this.props.currentUser.id === task.task_maker_id && task.completed === false)// && task.task_doer_id === null) 
			{
				tasksSelected.push(task);
			}
		})
		return(
			<div className = "maker-background">
				<header>
					<NavbarContainer />
				</header>

				<nav className="new-task">
					<button className="new-task-maker-button" onClick={() => this.props.openModal()}>Create New Task</button>
				</nav>

				<div className="tasks-cat-greeting-maker">
					<h2 className = "task-cat-greeting">Welcome Task-Maker. Here are the tasks you've created</h2>
				</div>

			

				<div className="parent-task-maker-container">
					{this.props.tasks.length > 0 && tasksSelected.map((task) => {
						return (
							<form  className='doer-task-container' id={task.id}>
								<p className="task-brief">Task: {task.brief}</p>
								<p className='task-fields-1'>Description: {task.description}	</p>
								<p className='task-fields-2'>Location: {task.location}</p>
								<p className='task-fields-3'>Need a Vehicle? : {task.vehicle_needed ? "yes" : "no"}</p>
								<p className='task-fields-4'>Task Maker : {this.props.currentUser.username}</p>
								
							</form>
						)
					})}
				</div>
				
		
			</div>
		)}
	

};

export default LoggedInMaker;