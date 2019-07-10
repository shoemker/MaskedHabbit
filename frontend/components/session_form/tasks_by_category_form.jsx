import React from 'react';
import NavbarContainer from '../navbar/navbar_container'
import { Link } from 'react-router-dom';

class TasksByCat extends React.Component {

	componentDidMount() {
		this.props.fetchTasks();
		this.props.fetchCategory(this.props.match.params.categoryId);
	}


	greeting() {

		if (!this.props.currentUser) {
			return (
				<div id="tasks-cat-greeting-con">
					<Link to="/login" style={{ textDecoration: 'none' }} >
						<h2 className = "task-cat-greeting">Please Log In to do these tasks</h2>
					</Link>
				</div>
				)
		}	
	}

	

	render() {
		let catId = this.props.match.params.categoryId;
		let tasks = [];
		
		this.props.tasks.forEach(function(task) {
			if (parseInt(catId,10) === task.category_id) tasks.push(task.brief)
		});
		

		return (
			<div className="tasks-by-cat-background">
				<header>
					<NavbarContainer />
				</header>
				{this.greeting()}
				<div>
					<ul>
						{tasks}
					</ul>
				</div>
			</div>
		)
	}
}

export default TasksByCat;