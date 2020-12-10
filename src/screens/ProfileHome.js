import React from 'react';
import { Link } from 'react-router-dom';

import NavBarTop from '../components/NavBarTop';
import Footer from '../components/Footer';

function ProfileHome () {
return (
<div className="flex-wrapper">
        <div className="container product-page">
          <NavBarTop />
          <div className="download-intro text-center">
            <h1 className="title text-center">Downloads</h1>   
            <div className="nav-templates shadow text-center">
              <a href="#" className="nav-item">Premium </a>
              <a href="#" className="nav-item">Free</a>
              <a href="#" className="nav-item">Bundle</a>
            </div>
            <p className="text-center">It seems that you don't have any product yet. Access this <Link to="/products/premium">link</Link> to see our premium templates!</p>
          </div>
        </div>
        <Footer />
      </div>
)
}

export default ProfileHome;
