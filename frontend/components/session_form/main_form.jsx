import React from 'react';
import { withRouter } from 'react-router-dom';
import NavbarContainer from '../navbar/navbar_container'
import { Link } from 'react-router-dom';

class MainForm extends React.Component {



	moveCaret(e) {
		e.target.value = "      "
	}


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

						<Link to = {`/tasks/1`}>
							<form action="">
								<button className="category-button">Mounting & Installation</button>
							</form>
						</Link>
						<Link to={`/tasks/2`}>
							<form action="">
								<button className="category-button">Moving & Packing</button>
							</form>
						</Link>
						<Link to={`/tasks/3`}>
							<form action="">
								<button className="category-button">Furniture Assembly</button>
							</form>
						</Link>
					</div>
					<div className="buttons-second-row">
						<Link to={`/tasks/4`}>
							<form action="">
								<button className="category-button">Home Improvement</button>
							</form>
						</Link>
						<Link to={`/tasks/5`}>
							<form action="">
								<button className="category-button">General Handyman</button>
							</form>
						</Link>
						<Link to={`/tasks/6`}>
							<form action="">
								<button className="category-button">Heavy Lifting</button>
							</form>
						</Link>
					</div>
					<div className="magnifying-parent">
						<form>
							<input type="text"
								placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Need something different?"
								onFocus = {this.moveCaret}
								// onChange={this.update('username')}
								id="main-page-search"/>
							<span>
								<img id='mag' src={window.magURL} />
							</span>
						</form>
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