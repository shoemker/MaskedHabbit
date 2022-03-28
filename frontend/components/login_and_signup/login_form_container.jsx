
import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';
import { clearAllErrors } from '../../actions/message_actions';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'login',
        navLink: <Link to="/signup">sign up instead</Link>,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        clearAllErrors: () => dispatch(clearAllErrors()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);