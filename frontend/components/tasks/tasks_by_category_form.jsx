import React from 'react';
import NavbarContainer from '../navbar/navbar_container'
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
							<div className='task-container'>
								<div className="center"><p className="task-brief"> {task.brief}</p> </div>
								<div className="after-brief">
									<div>
										<img src={task.photoUrl} className = "taskPhoto"></img>

									</div>
									<div>
										<p className = 'task-fields-1'>Desc: {task.description}	</p>
										<p className = 'task-fields-2'>At: {task.location}</p>
										<p className = 'task-fields-3'>Need a Vehicle? : {task.vehicle_needed ? "yes" : "no"}</p>
									</div>
								</div>
							</div>
							)
					})}
				</div>
				
			</div>
		)
	}
}

export default TasksByCat;