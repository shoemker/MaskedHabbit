import React from 'react';
import { withRouter } from 'react-router-dom';
import NavbarContainer from '../navbar/navbar_container'

class MainForm extends React.Component {



	render() {
		return (
			<div className="splash-background">
				<header>
					<NavbarContainer />
				</header>


			</div>
		)
	}
}

export default MainForm;