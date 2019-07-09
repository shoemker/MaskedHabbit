import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import tasksReducer from './tasks_reducer';

const entitiesReducer = combineReducers({
		users: usersReducer,
		tasks: tasksReducer
});

export default entitiesReducer;