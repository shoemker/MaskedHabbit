export const RECEIVE_SEARCH = 'RECEIVE_SEARCH';

export const receiveSearch = search => {
	
	return {
		type: RECEIVE_SEARCH,
		search
	};
};