import React from 'react';
import { Link } from 'react-router-dom';



const Navbar = ({ currentUser, logout }) => {
	const loggedOutNavBar = () => (
      <nav className="login-signup navbar-container" >
				<Link to="/">
					<img className='nav-logo' src={window.logoURL} />
				</Link>
				
				<Link to="/login" style={{ textDecoration: 'none' }}>
					<div className='nav-log-text'>Log in</div>
				</Link>


        <Link to="/signup">
					<button type="button" className="become-tasker-button  navbar-button">
						Become a Masker
     			</button>
				</Link>
      </nav>
    );
    const loggedInNavBar = () => {
			if (currentUser.is_tasker) {
				return (
				<nav className="header-group navbar-container">
					<Link to="/">
						<img className='nav-logo' src={window.logoURL} />
					</Link>

					<Link to="/doer">			
						<div className="loggedin-name">Dashboard: {currentUser.username}</div>
					</Link>

					<Link to="/">			
						<button className="navbar-logout-button navbar-button" onClick={logout}>Log out</button>
					</Link>
				</nav>
			)}
			else {
				return (
					<nav className="header-group navbar-container">
						<Link to="/">
							<img className='nav-logo' src={window.logoURL} />
						</Link>

						<Link to="/maker">
							<div className="loggedin-name">Dashboard: {currentUser.username}</div>
						</Link>

						<Link to="/">
							<button className="navbar-logout-button navbar-button" onClick={logout}>Log out</button>
						</Link>
					</nav>
				)
			};
		} 

	return currentUser ? loggedInNavBar() : loggedOutNavBar();
};




export default Navbar;