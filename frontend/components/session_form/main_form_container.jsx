import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, signup } from '../../actions/session_actions';

import MainForm from './session_form';

const mapStateToProps = ({ errors }) => {
	return {
		errors: errors.session,
		formType: 'main',
		navLink: <Link to="/signup">sign up instead</Link>,
		navLink: <Link to="/login">log in instead</Link>,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		login: (user) => dispatch(login(user)),
		signup: (user) => dispatch(signup(user)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MainForm);