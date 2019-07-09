import merge from 'lodash/merge';

import {
	RECEIVE_TASKS,
	RECEIVE_TASK ,
	REMOVE_TASK
} from '../actions/task_actions';

const tasksReducer = (oldState = {}, action) => {
	Object.freeze(oldState);
	let newState;

	switch(action.type) {
		case RECEIVE_TASKS:
			return action.tasks;
		case RECEIVE_TASK:
			newState = merge({}, oldState, {[action.task.id]: action.task});
			return newState;
		case REMOVE_TASK:
			newState = merge({}, oldState);
			delete newState[action.taskId];
			return newState;
		default:
			return oldState;
	}
};

export default tasksReducer;