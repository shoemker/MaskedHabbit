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


		
	

		return (
			<div className="tasks-by-cat-background">
				<header>
					<NavbarContainer />
				</header>
				{this.greeting()}
				<div className = 'parent-task-container'> 
					{this.props.tasks.length > 0 && this.props.tasks.map( (task) => {
						return (
							<div className='task-container'>
								<h3 id='task'>Task</h3>
									<p> {task.brief}</p> 
							
							</div>
							)
					})}
				</div>
				
			</div>
		)
	}
}

export default TasksByCat;