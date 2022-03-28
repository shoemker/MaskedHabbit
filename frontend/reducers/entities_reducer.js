import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import tasksReducer from './tasks_reducer';
import categoryReducer from './categories_reducer';
import searchReducer from './search_reducer';
import messagesReducer from './messages_reducer';

const entitiesReducer = combineReducers({
		users: usersReducer,
		tasks: tasksReducer,
		categories: categoryReducer,
		search: searchReducer,
		messages: messagesReducer
});

export default entitiesReducer;