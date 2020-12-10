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
        </nav>
    )
}

export default NavBarTop;