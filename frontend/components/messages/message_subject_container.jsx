import { connect } from 'react-redux';

import { openModal, closeModal } from '../../actions/modal_actions';
import MessageSubjectForm from './message_subject_form';
import { updateMessage, fetchMessages } from '../../actions/message_actions';

const mapStateToProps = (state, ownProps) => {

  let currentUser = state.entities.users[state.session.id];

  return ({
    currentUser: currentUser,
  })
}

const mapDispatchToProps = dispatch => {
  return {

    openModal: (type) => dispatch(openModal(type)),
    closeModal: () => dispatch(closeModal()),
    updateMessage: (message) => dispatch(updateMessage(message)),
    // fetchMessages: () => dispatch(fetchMessages()),

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageSubjectForm);