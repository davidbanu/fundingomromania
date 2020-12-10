import React from 'react';
import { Link } from 'react-router-dom';


function HomeTabBar() {
    return (
        <div className="nav-templates shadow text-center">
              <Link to="/" className="nav-item all-active">All Themes</Link>
              <Link to="/products/premium" className="nav-item premium-active">Premium Themes</Link>
              <Link to="/products/free" className="nav-item free-active">Free Themes</Link>
              <Link to="/products/kits" className="nav-item kits-active">UI Kits</Link>
            </div>
    )
}

export default HomeTabBar;