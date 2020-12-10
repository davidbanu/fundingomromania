import React from 'react';
import { Link } from 'react-router-dom';


function HomeTabBar() {
    return (
        <div className="nav-templates shadow text-center">
              <Link to="/" className="nav-item all-active">Toate echipele</Link>
              <Link to="/" className="nav-item premium-active">Echipele locale</Link>
              <Link to="/" className="nav-item free-active">Ghimbav</Link>
              <Link to="/" className="nav-item kits-active">Misionari romani</Link>
              <Link to="/" className="nav-item">Instruire</Link>
            </div>
    )
}

export default HomeTabBar;