import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import MessageListWindow from '../messages/message_list_window';

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
				<div className = "container-email-list-tasks">
					<MessageListWindow
						messages = {this.props.messages} 
						currentUser = {this.props.currentUser}
					/>
					<div className="parent-task-maker-container">
						<nav className="new-task">
							<div id="new-task-maker-button" className="category-button" onClick={() => this.props.openModal({type:'newTask'})}>Create New Task</div>
						</nav>
						<div className="tasks-cat-greeting-maker" style={{ width: welcome.length * 13 + "px" }}>
							<h2 className="task-cat-greeting">{welcome}</h2>
						</div>
						{this.props.tasks.length > 0 && tasksSelected.map((task) => {
							return (
								<div className='doer-task-container2'>
									<form onSubmit={() => {
										if (window.confirm('Are you sure you wish to delete this task?')) 
										this.delete(task.id)}} className='maker-task-container2' id = {task.id}>
												<Task task={task} />

												< button className="task-accept-button" type="submit" >Delete Task</button>

									</form>
								</div>
							)	

						})}
					</div>
				</div>		
			</div>
		)}
	

};

export default LoggedInMaker;