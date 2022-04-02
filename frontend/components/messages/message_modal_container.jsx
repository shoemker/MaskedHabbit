import { connect } from 'react-redux';

import { openModal, closeModal } from '../../actions/modal_actions';
import MessageModal from './message_modal';


const mapStateToProps = (state, ownProps) => {
	let currentUser = state.entities.users[state.session.id];

	return ({
		currentUser: currentUser,
		message: ownProps.message
	})
}



const mapDispatchToProps = dispatch => {
	return ({
		closeModal: () => dispatch(closeModal()),
		openModal: (data) => dispatch(openModal(data)),
	})
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageModal)