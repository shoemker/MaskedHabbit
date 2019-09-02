import React from 'react';
import NavbarContainer from '../navbar/navbar_container'
import { Link } from 'react-router-dom';

class TasksBySearch extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			search: ""
		};

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	moveCaret(e) {
		e.target.value = "      "
	}

	handleSubmit(e) {
		if (this.state.search.trim().length > 0) {
			 e => this.setState({ 
				search: this.state.search.trim().toLowerCase()
			});
		}
	}

	componentDidMount() {
		this.props.fetchTasks();
		
	}

	greeting() {

		if (!this.props.currentUser) {
			return (
				<div className="tasks-cat-greeting-con">
					<Link to="/login" style={{ textDecoration: 'none' }} >
						<h2 className="task-cat-greeting">Please Log In to do these tasks</h2>
					</Link>
				</div>
			)
		}
	}


	render() {
	
		let searchWords = "";
		
		// session storage makes sure info persists after refresh
		// if (this.state.search)
		if (this.props.searchTerm.search && this.props.searchTerm.search.length > 0) {
			searchWords = this.props.searchTerm.search.split(" ");
			sessionStorage.setItem('search', JSON.stringify( { 
				search: this.props.searchTerm.search
			}));
		} else {
			if (sessionStorage.getItem('search') != null)
				searchWords = JSON.parse(sessionStorage.getItem('search')).search.split(" ");
		}

		const ignore = ["the", "a", "an", "for"]

		let tasksSelected = [];

		(this.props.tasks.length > 0) && this.props.tasks.forEach((task) => {
			for (let i = 0; i < searchWords.length; i++) {
				if (!ignore.includes(searchWords[i]) &&
					 (task.brief.toLowerCase().includes(searchWords[i]) ||
							task.description.toLowerCase().includes(searchWords[i])))
					tasksSelected.push(task);					
			}
		})

		let result = (this.props.tasks.length > 0 && tasksSelected.length === 0)
		
			return(
				<div className="tasks-by-cat-background">
					<header>
						<NavbarContainer />
					</header>
					{this.greeting()}

					{/* search bar */}
					<div className="magnifying-parent2">
						<form onSubmit={this.handleSubmit}>
							<input type="text"
								placeholder={"      " + searchWords.join(" ")}
								onFocus={this.moveCaret}
								value={this.state.search}

								onChange={this.update('search')}
								className="main-page-search" />
							<span>
								<img id='mag' src={window.magURL} onClick={this.handleSubmit} />
							</span>
						</form>
					</div>


					{/* trinary operator for if search was successful */}
					{result ? ( 
					<div>
						<h2>Sorry, no result for {searchWords}</h2>
					</div> ) : (
					<div className='parent-task-container'>
							{this.props.tasks.length > 0 && tasksSelected.map((task) => {
								return (
									<div className='task-container'>

										<p className="task-brief"> {task.brief}</p>
										<p className='task-fields-1'>Description: {task.description}	</p>
										<p className='task-fields-2'>Location: {task.location}</p>
										<p className='task-fields-3'>Need a Vehicle? : {task.vehicle_needed ? "yes" : "no"}</p>

									</div>
								)
							})}
						</div>

					) }
				</div>
			)
	}

}

export default TasksBySearch;