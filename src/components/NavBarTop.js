import React from 'react';
import { Link } from 'react-router-dom';

function NavBarTop() {
    return (
        <nav>
            <input type="checkbox" id="nav" className="d-none" />
            <label htmlFor="nav" className="nav-btn">
                <i />
                <i />
                <i />
            </label>
            <div className="logo">
                <Link to="/">UiRoute</Link>
            </div>
            <div className="nav-wrapper">
                <ul>
                    <li><Link to="/">Themes</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/termspolicies">Resources</Link></li>
                    <li><Link to="/signin">Sign In</Link></li>
                    <li><Link to="/signup" className="signup-btn-menu">Sign Up</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBarTop;