// frontend/entry.jsx
//import * as PostApiUtil from './util/session_api_util.js';
// import * as sessionActions from './actions/session_actions';
// import * as taskActions from './actions/task_actions'
// import * as categoryActions from './actions/category_actions'
// import * as messageActions from './actions/message_actions'

// import * as TaskApiUtil from './util/task_api_util.js'
// import * as CategoryApiUtil from './util/category_api_util.js'

import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store'

document.addEventListener('DOMContentLoaded', () => {

	// this block keeps you logged in even after refreshing
	let store;
	if (window.currentUser) {
		const preloadedState = {
			entities: {
				users: { [window.currentUser.id]: window.currentUser }
			},
			session: { id: window.currentUser.id }
		};
		store = configureStore(preloadedState);
		delete window.currentUser;
	} else {
		store = configureStore();
	}

	// window.fetchTasks = TaskApiUtil.fetchTasks;
	// window.fetchTask = TaskApiUtil.fetchTask;
	// window.fetchCategories = CategoryApiUtil.fetchCategories;
	// window.fetchCategory = CategoryApiUtil.fetchCategory;

  // window.getState = store.getState; // for testing
	// window.dispatch = store.dispatch; // just for testing!  
	// window.fetchCategories = categoryActions.fetchCategories; 
	// window.fetchMessages = messageActions.fetchMessages;
  // window.login = sessionActions.login;
  // window.signup = sessionActions.signup;
	// window.logout = sessionActions.logout;


	const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});

