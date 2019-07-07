import React from 'react';
import { Link } from 'react-router-dom';



const Navbar = ({ currentUser, logout }) => {
    const sessionLinks = () => (
      <nav className="login-signup navbar-containger" >
				<Link to="/"><img className='nav-logo' src="/images/Logo1.jpg" /></Link>
				
				<Link to="/login" style={{ textDecoration: 'none' }}>
					<div className='nav-log-text'>Log in</div>
				</Link>

				{/* <button>Become a Tasker</button> */}
        <Link to="/signup">Become a Tasker</Link>
      </nav>
    );
    const personalGreeting = () => (
			<nav className="header-group navbar-containger">
				<Link to="/"><img className='nav-logo' src="/images/Logo1.jpg" /></Link>
            <h2 className="header-name">Hi, {currentUser.username}!</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
      </nav>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};




export default Navbar;