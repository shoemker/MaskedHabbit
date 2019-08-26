import { connect } from 'react-redux';
import TasksBySearch from './tasks_by_search_form';
import { fetchTasks } from '../../actions/task_actions';

const mapStateToProps = (state, ownProps) => {
	let tasks = Object.values(state.entities.tasks)

	let currentUser = state.entities.users[state.session.id];
	let searchTerm = state.entities.search;
	
	return ({
		currentUser: currentUser,
		tasks: tasks,
		searchTerm: searchTerm
	})
}

const mapDispatchToProps = dispatch => {
	return ({
		fetchTasks: () => dispatch(fetchTasks()),

	})
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksBySearch)