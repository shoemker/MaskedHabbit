import React from 'react';

import NavbarContainer from '../navbar/navbar_container'


class LoggedInMakerForm extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		brief: '',
	// 		desription: '',
	// 		location: '',
	// 		completed: false,
	// 		category_id: 0
	// 	};
	// 	this.handleSubmit = this.handleSubmit.bind(this);
	// }


	render() {

		return (
			<div>
				<header>
					<NavbarContainer />
				</header>
				<h2>Logged In Maker</h2>


			</div>
		)
	}
}


export default LoggedInMakerForm