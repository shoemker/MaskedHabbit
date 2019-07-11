
import { connect } from 'react-redux';
import TasksByCat from './tasks_by_category_form';
import { fetchTasks } from '../../actions/task_actions';
import LoggedInDoerForm from './logged_in_doer_form';

import { filterTasksByCategoryId } from '../../store/selectors.js';

const mapStateToProps = (state, ownProps) => {

	let categoryId = ownProps.match.params.categoryId;
	let tasks = filterTasksByCategoryId(state, categoryId);
	// let currentUser = state.entities.users[state.session.id];

	return ({
		categoryId: categoryId,
		tasks: tasks,
		// currentUser: currentUser
	})
}




const mapDispatchToProps = dispatch => {
	return ({
		fetchTasks: () => dispatch(fetchTasks()),
	})
}

export default connect(mapStateToProps, mapDispatchToProps)(LoggedInDoerForm)