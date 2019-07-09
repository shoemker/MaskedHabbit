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
					{/* <img className='splash-img' src={window.splashUrl} /> */}
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
					<div className="magnifying-parent">

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
						<img className='steps-img' src={window.describeURL} />
				
						<p className="task-text">&#9312; Describe Your Mask</p>
						<p className="task-lower-text">Tell us what you need done, when and where it works for you. </p>
					</div>
					<div className="steps">
						<img className='steps-img' src={window.chooseURL} />
			
						<p className="task-text">&#9313; Choose Your Masker</p>	
						<p className="task-lower-text">Browse trusted Maskers by skills, reviews, and price. Select the right person for the job and chat to confirm details.</p>		
					</div>					
					<div className="steps">
						<img className='steps-img' src={window.getURL} />
				
						<p className="task-text">&#9314; Get It Done</p>	
						<p className="task-lower-text">Your Masker arrives and gets the job done. Pay securely and leave a review, all through MaskedHabbit.</p>
					</div>

				</div>

			</div>
		

		)
	}
}

export default MainForm;