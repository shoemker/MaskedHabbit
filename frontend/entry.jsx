// frontend/entry.jsx
//import * as PostApiUtil from './util/session_api_util.js'

import * as sessionActions from './actions/session_actions';
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

  // window.getState = store.getState; // for testing
  //  window.dispatch = store.dispatch; // just for testing!    
  // window.login = sessionActions.login;
  // window.signup = sessionActions.signup;
	// window.logout = sessionActions.logout;
	const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});

