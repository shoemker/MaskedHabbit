
import { connect } from 'react-redux';

import { createTask } from '../../actions/task_actions';
import LoggedInMakerForm from './logged_in_maker';


const mapStateToProps = (state, ownProps) => {

	let currentUser = state.entities.users[state.session.id];

	return ({
		currentUser: currentUser
	})
}




const mapDispatchToProps = dispatch => {
	return ({
		createTask: (task) => dispatch(createTask(task))
	})
}

export default connect(mapStateToProps, mapDispatchToProps)(LoggedInMakerForm)