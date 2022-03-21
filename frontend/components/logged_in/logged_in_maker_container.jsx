import { connect } from 'react-redux';

import LoggedInMakerForm from './logged_in_maker_form';
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchTasks, deleteTask } from '../../actions/task_actions';
import { fetchMessages } from '../../actions/message_actions';


const mapStateToProps = (state, ownProps) => {
	let tasks = Object.values(state.entities.tasks);
	let messages = Object.values(state.entities.messages);

	let currentUser = state.entities.users[state.session.id];

	return ({
		currentUser: currentUser,
		tasks: tasks,
		messages: messages
	})
}



const mapDispatchToProps = dispatch => {
	return {
		fetchTasks: () => dispatch(fetchTasks()),
		deleteTask: (id) => dispatch(deleteTask(id)),

		fetchMessages: () => dispatch(fetchMessages()),
		openModal: () => dispatch(openModal('newTask')),
		closeModal: () => dispatch(closeModal()),

	};
}

export default connect(mapStateToProps, mapDispatchToProps)(LoggedInMakerForm)