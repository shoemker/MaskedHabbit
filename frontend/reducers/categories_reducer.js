import merge from 'lodash/merge';

import { RECEIVE_CATEGORIES, RECEIVE_CATEGORY } from '../actions/category_actions.js'

const categoryReducer = (oldState = {}, action) => {
	Object.freeze(oldState);
	let newState;

	switch(action.type) {

		case RECEIVE_CATEGORIES:
			return action.categories;

		case RECEIVE_CATEGORY:
			newState = merge({}, oldState, {[action.category.id]: action.category});
			return newState;

		default:
			return oldState;
	}
}




export default categoryReducer;