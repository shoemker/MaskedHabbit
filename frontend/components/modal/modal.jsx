import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import MakeNewTaskContainer from './make_new_task_container';
import MessageModalContainer from '../messages/message_modal_container';
import ComposeMessageModalContainer from '../messages/compose_message_modal_container';

function Modal({ modal, closeModal }) {
	if (!modal) {
		return null;
	}
	
	let component;
	switch (modal.type) {
		case 'newTask':
			component = <MakeNewTaskContainer />;
			break;
		case 'message':
			component = <MessageModalContainer message = {modal.data} />;
			break;
		case 'composeMessage':
			component = <ComposeMessageModalContainer />;
			break;
		default:
			return null;
	}


	return (
		<div className="modal-background" onClick={closeModal}>
			<div className="modal-child" onClick={e => e.stopPropagation()}>
				{component}
			</div>
		</div>
	);

}

const mapStateToProps = state => {
	return {
		modal: state.modal
	};
};

const mapDispatchToProps = dispatch => {
	return {
		closeModal: () => dispatch(closeModal())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);