import { connect } from 'react-redux';

import { closeModal } from '../../actions/modal_actions';
import ComposeMessageModal from './compose_message_modal';


const mapStateToProps = (state, ownProps) => {
  let currentUser = state.entities.users[state.session.id];
  return ({
    currentUser: currentUser,
  })
}



const mapDispatchToProps = dispatch => {
  return ({
    closeModal: () => dispatch(closeModal()),
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(ComposeMessageModal)