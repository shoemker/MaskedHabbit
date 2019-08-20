import { connect } from 'react-redux';

import LoggedInMakerForm from './logged_in_maker_form';
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchTasks } from '../../actions/task_actions';


const mapStateToProps = (state, ownProps) => {

	let currentUser = state.entities.users[state.session.id];

	return ({
		currentUser: currentUser
	})
}



const mapDispatchToProps = dispatch => {
	return {
		fetchTasks: () => dispatch(fetchTasks()),

		openModal: () => dispatch(openModal('newTask')),
		closeModal: () => dispatch(closeModal())
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(LoggedInMakerForm)