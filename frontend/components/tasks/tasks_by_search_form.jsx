import React from 'react';
import NavbarContainer from '../navbar/navbar_container'
import { Link } from 'react-router-dom';
import Task from '../tasks/task';


class TasksBySearch extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			search: "",
			newSearch: ""
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
		console.log("hi")
		e.preventDefault();
		// this.setState({newSearch: this.state.search.trim().toLowerCase()});
		this.setState((state, props) => {
			return { newSearch: state.search.trim().toLowerCase() };
		});
	}

	componentDidMount() {
		this.props.fetchTasks();
		
	}

	greeting() {
		const welcome = "Please Log In to do these tasks.";

		if (!this.props.currentUser) {
			return (
				<div className="tasks-cat-greeting-con" style={{ width: welcome.length * 12.7 + "px" }}>
					<Link to="/login" style={{ textDecoration: 'none' }} >
						<h2 className="task-cat-greeting">{welcome}</h2>
					</Link>
				</div>
			)
		}
	}


	render() {
		console.log(this.state.newSearch)

		let searchWords = "";
		
		// in case search term had been replaced
		if (this.state.newSearch != "") {
			searchWords = this.state.newSearch.split(" ");
			sessionStorage.setItem('search', JSON.stringify({
				search: this.state.newSearch
			}));
		// in case the the search term comes from main form
		} else if (this.props.searchTerm.search && this.props.searchTerm.search.length > 0) {
			searchWords = this.props.searchTerm.search.split(" ");
			sessionStorage.setItem('search', JSON.stringify( { 
				search: this.props.searchTerm.search
			}));
			// in caseof refresh
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
									<Task task={task} />

								)})}
					</div>

					) }
				</div>
			)
	}

}

export default TasksBySearch;