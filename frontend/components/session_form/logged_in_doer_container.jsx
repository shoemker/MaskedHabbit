
import { connect } from 'react-redux';

import { updateTask, fetchTasks } from '../../actions/task_actions';
import LoggedInDoerForm from './logged_in_doer_form';


const mapStateToProps = (state, ownProps) => {

	let tasks = Object.values(state.entities.tasks)

	let currentUser = state.entities.users[state.session.id];

	return ({
		currentUser: currentUser,
		tasks:tasks
	})
}




const mapDispatchToProps = dispatch => {
	return ({
		fetchTasks: () => dispatch(fetchTasks()),
		updateTask: (task) => dispatch(updateTask(task))
	})
}

export default connect(mapStateToProps, mapDispatchToProps)(LoggedInDoerForm)