import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import Task from '../tasks/task';

class LoggedInMaker extends React.Component {
	constructor(props){
		super(props);
		
		this.delete = this.delete.bind(this);
	}

	componentDidMount() {
		this.props.fetchTasks();
		this.props.fetchMessages();
	}

	delete(id){
		this.props.deleteTask(id).then(() => this.props.fetchTasks());
	}


	render() {
		let tasksSelected = [];

		(this.props.tasks.length > 0) && this.props.tasks.forEach((task) => {
			if (this.props.currentUser.id === task.task_maker_id && task.completed === false)// && task.task_doer_id === null) 
			{
				tasksSelected.push(task);
			}
		})



		const welcome = "Welcome " + this.props.currentUser.username + ". Here are the tasks you've created:";

		// if (this.props.messages.length > 0 ) debugger;
		// if (this.props.tasks.length > 0 ) debugger;
		return(
			<div className = "maker-background">
				<header>
					<NavbarContainer />
				</header>

				<nav className="new-task">
					<div id="new-task-maker-button" className="category-button" onClick={() => this.props.openModal()}>Create New Task</div>
				</nav>

				<div className="tasks-cat-greeting-maker" style ={{width: welcome.length*13 +"px"}}>
					<h2 className = "task-cat-greeting">{welcome}</h2>
				</div>


				<div className="parent-task-maker-container">
					{this.props.tasks.length > 0 && tasksSelected.map((task) => {
						return (
			
								<form onSubmit={() => {
									if (window.confirm('Are you sure you wish to delete this task?')) 
									this.delete(task.id)}} className='doer-task-container2' id = {task.id}>
											<Task task={task} />

											< button className="task-accept-button" type="submit" >Delete Task</button>

								</form>
						)	

					})}
				</div>
						
			</div>
		)}
	

};

export default LoggedInMaker;