import { connect } from 'react-redux';

import { openModal, closeModal } from '../../actions/modal_actions';
import MessageSubjectForm from './message_subject_form';

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

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageSubjectForm);