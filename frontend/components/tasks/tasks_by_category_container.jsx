
import { connect } from 'react-redux';
import TasksByCat from './tasks_by_category_form';
import { fetchTasks } from '../../actions/task_actions';
import { fetchCategory } from '../../actions/category_actions';
import { filterTasksByCategoryId } from '../../store/selectors.js';

const mapStateToProps = (state, ownProps) => {

	let categoryId = ownProps.match.params.categoryId;
	let tasks = filterTasksByCategoryId(state, categoryId);
	let currentUser = state.entities.users[state.session.id];

	return ({
		categoryId: categoryId,
		tasks: tasks,
		currentUser:currentUser
	})
}




const mapDispatchToProps = dispatch => {
	return ({
		fetchTasks: () => dispatch(fetchTasks()),
		fetchCategory: (id) => dispatch(fetchCategory(id))
	})
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksByCat)