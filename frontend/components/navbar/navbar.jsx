import React from 'react';
import { Link } from 'react-router-dom';



const Navbar = ({ currentUser, logout }) => {
    const sessionLinks = () => (
      <nav className="login-signup navbar-containger" >
				<img className='nav-logo' src="/images/Logo1.jpg" />
            <Link to="/login">Login</Link>
            &nbsp;or&nbsp;
            <Link to="/signup">Sign up!</Link>
      </nav>
    );
    const personalGreeting = () => (
			<nav className="header-group navbar-containger">
				<img className='nav-logo' src="/images/Logo1.jpg" />
            <h2 className="header-name">Hi, {currentUser.username}!</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
      </nav>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};




export default Navbar;