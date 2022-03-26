import { connect } from 'react-redux';

import { closeModal } from '../../actions/modal_actions';
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
	})
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageModal)