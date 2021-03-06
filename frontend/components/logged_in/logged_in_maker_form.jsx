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
							<div className='task-container'>
								<div className="center"><p className="task-brief"> {task.brief}</p> </div>
								<div className="after-brief">
									<div>
										<img src={task.photoUrl} className="taskPhoto"></img>

									</div>
									<div>
										<p className='task-fields-1'>Descr: {task.description}	</p>
										<p className='task-fields-2'>At: {task.location}</p>
										<p className='task-fields-3'>Need a Vehicle? : {task.vehicle_needed ? "yes" : "no"}</p>
										< p className='task-fields-4' > Task Maker: {this.props.currentUser.username}</p>
									</div>
								</div>
							</div>
						)	

					})}
				</div>
				
		
			</div>
		)}
	

};

export default LoggedInMaker;