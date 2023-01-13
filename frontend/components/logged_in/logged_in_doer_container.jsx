
import { connect } from 'react-redux';

import { updateTask, fetchTasks } from '../../actions/task_actions';
import { fetchMessages } from '../../actions/message_actions';
import LoggedInDoerForm from './logged_in_doer_form';
import { openModal } from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => {

	let tasks = Object.values(state.entities.tasks)
	let messages = Object.values(state.entities.messages);

	let currentUser = state.entities.users[state.session.id];

	return ({
		currentUser: currentUser,
		tasks: tasks,
		messages: messages
	})
}

 


const mapDispatchToProps = dispatch => {
	return ({
		fetchTasks: () => dispatch(fetchTasks()),
		updateTask: (task) => dispatch(updateTask(task)),
		openModal: (type) => dispatch(openModal(type)),
		fetchMessages: () => dispatch(fetchMessages()),
	})
}

export default connect(mapStateToProps, mapDispatchToProps)(LoggedInDoerForm)