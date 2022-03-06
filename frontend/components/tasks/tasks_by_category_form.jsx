import React from 'react';
import NavbarContainer from '../navbar/navbar_container'
import Task from '../tasks/task';
import { Link } from 'react-router-dom';

class TasksByCat extends React.Component {

	componentDidMount() {
		this.props.fetchTasks();
		this.props.fetchCategory(this.props.match.params.categoryId);
		// let catId = this.props.match.params.categoryId;
	}


	greeting() {
		const welcome = "Please Log In to do these tasks:";

		if (!this.props.currentUser) {
			return (
				<div style={{ height: "50px" }}>
					<div className="tasks-cat-greeting-con" style={{ width: welcome.length * 12.7 + "px" }}>
						<Link to="/login" style={{ textDecoration: 'none' }} >
							<h2 className = "task-cat-greeting">{welcome}</h2>
						</Link>
					</div>
				</div>
				)
		}	
	}


	render() {

		return (
			<div className="tasks-by-cat-background">
				<header>
					<NavbarContainer />
				</header>
				{this.greeting()}
				<div className = 'parent-task-container'> 
					{this.props.tasks.length > 0 && this.props.tasks.map( (task) => {
						return (
							<Task task={task} />

							)
					})}
				</div>
				
			</div>
		)
	}
}

export default TasksByCat;