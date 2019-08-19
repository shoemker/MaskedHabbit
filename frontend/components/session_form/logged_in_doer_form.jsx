import React from 'react';

import NavbarContainer from '../navbar/navbar_container'


class LoggedInDoerForm extends React.Component {
		constructor(props) {
		super(props);
	
		this.state = {
			categoryId: 0
		}

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		let task;
		for (let i = 0; i < this.props.tasks.length; i++) {
			if (this.props.tasks[i].id === parseInt(e.target.id,10)){
				task = this.props.tasks[i];
			}			
		}

		task.task_doer_id = this.props.currentUser.id;
		this.props.updateTask(task);
	}

	componentDidMount() {
		this.props.fetchTasks();
	}




	render() {
		let tasksSelected = [];
		
		(this.props.tasks.length > 0) && this.props.tasks.forEach( (task) => {
			
			if (this.state.categoryId === task.category_id && task.completed === false)// && task.task_doer_id === null) 
			{
				tasksSelected.push(task);
			}
		})
	
		return (
			<div >
				<header>
					<NavbarContainer />
				</header>
				<div className="logged-in-doer-main">
					<div className="buttons-all">

						<form onSubmit={() => this.setState({ categoryId: 1 })}>
							<button className="category-doer-button" type="submit" >Mounting & Installation</button>
						</form>
				
						<form onSubmit={() => this.setState({ categoryId: 2 })}>
							<button className="category-doer-button" type="submit" >Moving & Packing</button>
						</form>
				
						<form onSubmit={() => this.setState({ categoryId: 3 })}>
							<button className="category-doer-button" type="submit">Furniture Assembly</button>
						</form>
					
						<form onSubmit={() => this.setState({ categoryId: 4 })}>
							<button className="category-doer-button" type="submit">Home Improvement</button>
						</form>

						<form onSubmit={() => this.setState({ categoryId: 5 })}>
							<button className="category-doer-button" type="submit">General Handyman</button>
						</form>

						<form onSubmit={() => this.setState({ categoryId: 6 })}>
							<button className="category-doer-button"type="submit" type="submit">Heavy Lifting</button>
						</form>

					</div>

					<div className="logged-in-doer-right">
						{this.props.tasks.length > 0 && tasksSelected.map((task) => {
							return (
								<form onSubmit={this.handleSubmit} className='doer-task-container' id = {task.id}>
										<p className="task-brief">Task: {task.brief}</p>
										<p className='task-fields'>Description: {task.description}	</p>
										<p className='task-fields'>Location: {task.location}</p>
										<p className='task-fields'>Need a Vehicle? : {task.vehicle_needed ? "yes" : "no"}</p>
										<p className='task-fields'>Task Doer : {task.task_doer_id}</p>										
									<button className="task-accept-button" type="submit">Accept Task</button>
								</form>
							)
						})}

					

					</div>
				</div>
			
			</div>
		)
	}
}


export default LoggedInDoerForm