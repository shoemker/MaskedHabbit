// frontend/entry.jsx
//import * as PostApiUtil from './util/session_api_util.js'
import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store'

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
  //  const store = configureStore();
    ReactDOM.render(<h1>Welcome to maskedHabbit</h1>, root);
});