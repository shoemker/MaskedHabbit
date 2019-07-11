import React from 'react';

import NavbarContainer from '../navbar/navbar_container'


class LoggedInDoerForm extends React.Component {
		constructor(props) {
		super(props);

		this.catId = 1;
	}

	componentDidMount() {
		this.props.fetchTasks();
	}

	handleCatSubmit(catNum) {
		this.catId = catNum

	}

	render() {
		let tasks = this.props.tasks.map( task => {
			return(
				task.brief
			)
		})
		return (
			<div >
				<header>
					<NavbarContainer />
				</header>
				<div className="logged-in-doer-main">
					<div className="buttons-all">

						<form onSubmit={this.handleCatSubmit(1)}>
							<button className="category-doer-button">Mounting & Installation</button>
						</form>
				
						<form onSubmit={this.handleCatSubmit(2)}>
							<button className="category-doer-button">Moving & Packing</button>
						</form>
				
						<form onSubmit={this.handleCatSubmit(3)}>
							<button className="category-doer-button">Furniture Assembly</button>
						</form>
					
						<form onSubmit={this.handleCatSubmit(4)}>
							<button className="category-doer-button">Home Improvement</button>
						</form>

						<form onSubmit={this.handleCatSubmit(5)}>
							<button className="category-doer-button">General Handyman</button>
						</form>

						<form onSubmit={this.handleCatSubmit(6)}>
							<button className="category-doer-button">Heavy Lifting</button>
						</form>

					</div>

					<div className="logged-in-doer-right">
						<ul>
							{tasks}
						</ul>

					</div>
				</div>
			
			</div>
		)
	}
}


export default LoggedInDoerForm