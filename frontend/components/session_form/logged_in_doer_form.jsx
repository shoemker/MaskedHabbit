import React from 'react';

import NavbarContainer from '../navbar/navbar_container'


class LoggedInDoerForm extends React.Component {
		constructor(props) {
		super(props);
	
		this.state = {catId: 1}
	
	}


	componentDidMount() {
		this.props.fetchTasks();
	}



	render() {
		let tasksSelected = [];
	

		(this.props.tasks.length > 0) && this.props.tasks.forEach( (task) => {

			if (this.state.catId === task.category_id && task.completed === false) {
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

						<form onSubmit={() => this.setState({catId: 1})}>
							<button className="category-doer-button" type="submit" >Mounting & Installation</button>
						</form>
				
						<form onSubmit={() => this.setState({ catId: 2 })}>
							<button className="category-doer-button" type="submit" >Moving & Packing</button>
						</form>
				
						<form onSubmit={() => this.setState({ catId: 3 })}>
							<button className="category-doer-button" type="submit">Furniture Assembly</button>
						</form>
					
						<form onSubmit={() => this.setState({ catId: 4 })}>
							<button className="category-doer-button" type="submit">Home Improvement</button>
						</form>

						<form onSubmit={() => this.setState({ catId: 5 })}>
							<button className="category-doer-button" type="submit">General Handyman</button>
						</form>

						<form onSubmit={() => this.setState({ catId: 6 })}>
							<button className="category-doer-button"type="submit" type="submit">Heavy Lifting</button>
						</form>

					</div>

					<div className="logged-in-doer-right">
						<ul>
							
							{this.state.catId}
						</ul>

					</div>
				</div>
			
			</div>
		)
	}
}


export default LoggedInDoerForm