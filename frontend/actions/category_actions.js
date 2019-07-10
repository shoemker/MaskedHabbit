import * as CategoryApiUtil from '../util/category_api_util.js'

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY';

const receiveCategories = (categories) => ({
	type: RECEIVE_CATEGORIES,
	categories: categories
});

const receiveCategory = (category) => ({
	type: RECEIVE_CATEGORY,
	category: category
});


export const fetchCategories = () => (dispatch) => (
	CategoryApiUtil.fetchCategories().then(categories => dispatch(receiveCategories(categories)))
)

export const fetchCategory = (id) => (dispatch) => (
	CategoryApiUtil.fetchCategory(id).then(category => dispatch(receiveCategory(category)))
)

