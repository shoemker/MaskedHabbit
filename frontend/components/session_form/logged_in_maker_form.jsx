import React from 'react';
import NavbarContainer from '../navbar/navbar_container'


class LoggedInMaker extends React.Component {

	render() {
		return(
			<div className = "maker-background">
				<header>
					<NavbarContainer />
				</header>

			<nav className="login-signup">
				<button onClick={() => this.props.openModal()}>New Task</button>
			</nav>
			</div>
		)}
	

};

export default LoggedInMaker;