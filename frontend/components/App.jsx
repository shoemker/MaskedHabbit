import React from 'react';
import SignupFormContainer from './login_and_signup/signup_form_container';
import LoginFormContainer from './login_and_signup/login_form_container';
import MainFormContainer from './main/main_form_container';
import TasksByCatContainer from './tasks/tasks_by_category_container';
import LoggedInDoerContainer from './logged_in/logged_in_doer_container'
import LoggedInMakerForm from './logged_in/logged_in_maker_container'
import Modal from './modal/modal'
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

const App = () => (
	<div>
		<Modal />
		<Switch>
			<Route path="/maker" component={LoggedInMakerForm} />
			<Route path="/doer" component={LoggedInDoerContainer}/>
			<Route path="/tasks/:categoryId" component={TasksByCatContainer}/>
			<AuthRoute exact path="/login" component={LoginFormContainer} />
			<AuthRoute exact path="/signup" component={SignupFormContainer} />
			<Route exact path="/" component={MainFormContainer} />	

		</Switch>
	</div>
);


export default App;