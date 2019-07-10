import React from 'react';
import NavbarContainer from '../navbar/navbar_container'

class TasksByCat extends React.Component {

	componentDidMount() {
		this.props.fetchTasks();
	}

	render() {
		
		let tasks = this.props.tasks.map( task => {

			return(
				task.brief
			)
		})

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