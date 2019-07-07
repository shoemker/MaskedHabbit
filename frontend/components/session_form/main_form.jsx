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
				<div className="splash-main">
					<div className= "splash-first">
						The convenient & affordable way <br></br>to get things done around the home.
					</div>
					<div className="splash-choose-txt">
						Choose from over 140,000 background checked Maskers for help without breaking the bank.
					</div>
					<div className="buttons-first-row">
						<button className="category-button">Mounting & Installation</button>
						<button className="category-button">Moving & Packing</button>
						<button className="category-button">Furniture Assembly</button>

					</div>
					<div className="buttons-second-row">
						<button className="category-button">Home Improvement</button>
						<button className="category-button">General Handyman</button>
						<button className="category-button">Heavy Lifting</button>

					</div>
					<div class="magnifying-parent">

						<input type="text"
							value="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Need something different?"
							// onChange={this.update('username')}
							id="main-page-search"
						/>
						<span>
							<img id='mag' src={window.magURL} />
						</span>
					</div>

				</div>
				<div className="how-it-works">
					How It Works
				</div>
				<div className="second-part">
					<div className="steps">
						<img id='describe' src={window.describeURL} />
					</div>
					<div className="steps">
						<img id='describe' src={window.chooseURL} />
					</div>					
					<div className="steps">
						<img id='describe' src={window.getURL} />
					</div>
				</div>
			</div>

		)
	}
}

export default MainForm;