
import merge from 'lodash/merge'; 

import { RECEIVE_SEARCH } from '../actions/search_actions';

const searchReducer = (oldState = {}, action) => {
	Object.freeze(oldState);
	let newState;
	
	switch (action.type) {
		case RECEIVE_SEARCH:
			newState = merge({}, oldState, { search: action.search });
			
			return newState;

		default:
			
			return oldState;
	}
};

export default searchReducer;