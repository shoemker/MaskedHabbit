import React from 'react';
import { withRouter } from 'react-router-dom';
import NavbarContainer from '../navbar/navbar_container'

class MainForm extends React.Component {



	render() {
		return (
			<div>
				{/* <style>
					<link rel="stylesheet" type="text/css" 
						href="../../../app/assets/stylesheets/api/splash.css">

					</link>
				</style> */}
				<header>
					<NavbarContainer />
				</header>
				<div className = "splash">
					<h2>main form</h2>
				</div>

			</div>
		)
	}
}

export default MainForm;