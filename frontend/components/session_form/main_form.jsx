import React from 'react';
import { withRouter } from 'react-router-dom';
import NavbarContainer from '../navbar/navbar_container'

class MainForm extends React.Component {



	render() {
		return (
			<div>
				<header>
					<NavbarContainer />
				</header>
				<h2>main form</h2>
			</div>
		)
	}
}

export default MainForm;