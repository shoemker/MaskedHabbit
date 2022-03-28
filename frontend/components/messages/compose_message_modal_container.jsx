import { connect } from 'react-redux';

import { closeModal } from '../../actions/modal_actions';
import { createMessage } from '../../actions/message_actions';
import ComposeMessageModal from './compose_message_modal';


const mapStateToProps = (state, ownProps) => {
  
  let currentUser = state.entities.users[state.session.id];
  return ({
    currentUser: currentUser,
    errors: state.errors.session
  })
}



const mapDispatchToProps = dispatch => {
  return ({
    closeModal: () => dispatch(closeModal()),
    createMessage: (message) => dispatch(createMessage(message)),
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(ComposeMessageModal)