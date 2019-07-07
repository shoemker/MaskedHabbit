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
    const loggedInNavBar = () => (
			<nav className="header-group navbar-container">
				<Link to="/"><img className='nav-logo' src="/images/Logo1.jpg" /></Link>
            
				<div className="loggedin-name">Account: {currentUser.username}</div>
        <button className="navbar-logout-button navbar-button" onClick={logout}>Log out</button>
      </nav>
    );

	return currentUser ? loggedInNavBar() : loggedOutNavBar();
};




export default Navbar;