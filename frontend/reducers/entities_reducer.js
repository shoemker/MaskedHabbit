import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import tasksReducer from './tasks_reducer';
import categoryReducer from './categories_reducer';

const entitiesReducer = combineReducers({
		users: usersReducer,
		tasks: tasksReducer,
		categories: categoryReducer
});

export default entitiesReducer;