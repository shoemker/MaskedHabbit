import React from 'react';

import NavbarContainer from '../navbar/navbar_container'


class LoggedInDoerForm extends React.Component {


	render() {
		return (
			<div >
				<header>
					<NavbarContainer />
				</header>
				<div className="splash-main">
					<div className="buttons-all">


							<form action="">
							<button className="category-doer-button">Mounting & Installation</button>
							</form>
					
							<form action="">
								<button className="category-doer-button">Moving & Packing</button>
							</form>
					
							<form action="">
								<button className="category-doer-button">Furniture Assembly</button>
							</form>
			
						
							<form action="">
								<button className="category-doer-button">Home Improvement</button>
							</form>

							<form action="">
								<button className="category-doer-button">General Handyman</button>
							</form>

							<form action="">
								<button className="category-doer-button">Heavy Lifting</button>
							</form>

					</div>


				</div>
			</div>
		)
	}
}


export default LoggedInDoerForm