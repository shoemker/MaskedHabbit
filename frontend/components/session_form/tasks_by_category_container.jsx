
import { connect } from 'react-redux';
import TasksByCat from './tasks_by_category_form';
import { fetchTasks } from '../../actions/task_actions';

const mapStateToProps = (state, ownProps) => {
	let categoryId = ownProps.match.params.categoryId;
	return ({
		categoryId: categoryId
	})
}




const mapDispatchToProps = dispatch => {
	return ({
		fetchTasks: () => dispatch(fetchTasks())
	})
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksByCat)