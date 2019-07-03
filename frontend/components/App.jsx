import React from 'react';
import GreetingContainer from './greeting/greeting_container'
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import { Route } from 'react-router-dom'

const App = () => (
    <div>
      <header>
        <h2>App for mr!</h2>
        <GreetingContainer />
      </header>
			<Route path="/login" component={LoginFormContainer} />
			<Route path="/signup" component={SignupFormContainer} />
    </div>
);


export default App;