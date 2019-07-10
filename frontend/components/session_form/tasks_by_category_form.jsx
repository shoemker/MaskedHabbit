import React from 'react';
import NavbarContainer from '../navbar/navbar_container'

class TasksByCat extends React.Component {

	componentDidMount() {
		this.props.fetchTasks();
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
				<h1>{this.props.match.params.categoryId}</h1>

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