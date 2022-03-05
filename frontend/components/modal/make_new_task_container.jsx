
import { connect } from 'react-redux';

import { createTask, fetchTasks } from '../../actions/task_actions';
import { closeModal } from '../../actions/modal_actions';
import MakeNewTaskForm from './make_new_task';


const mapStateToProps = (state, ownProps) => {

	let currentUser = state.entities.users[state.session.id];

	return ({
		currentUser: currentUser
	})
}




const mapDispatchToProps = dispatch => {
	return ({
		createTask: (task) => dispatch(createTask(task)),
		closeModal: () => dispatch(closeModal()),
		fetchTasks: () => dispatch(fetchTasks()),
	})
}

export default connect(mapStateToProps, mapDispatchToProps)(MakeNewTaskForm)