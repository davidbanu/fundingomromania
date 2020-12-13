import React from 'react';
import logo  from '../om-logo-2x.png';

function NavBarTop() {
    return (
        <nav>
            <input type="checkbox" id="nav" className="d-none" />
            <div className="logo">
            <img src={logo} alt="Logo" />
            </div>
        </nav>
    )
}

export default NavBarTop;