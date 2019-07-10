
import { connect } from 'react-redux';
import TasksByCat from './tasks_by_category_form';
import { fetchTasks } from '../../actions/task_actions';

const mapStateToProps = (state, ownProps) => {

	let tasks = Object.values(state.entities.tasks);
	let categoryId = ownProps.match.params.categoryId;
	let currentUser = state.entities.users[state.session.id];

	return ({
		categoryId: categoryId,
		tasks: tasks,
		currentUser:currentUser
	})
}




const mapDispatchToProps = dispatch => {
	return ({
		fetchTasks: () => dispatch(fetchTasks())
	})
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksByCat)