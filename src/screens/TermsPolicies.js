import React from 'react';
import {Link} from 'react-router-dom';

import NavBarTop from '../components/NavBarTop';
import Footer from '../components/Footer';

function TermsPolicies () {

    return (
      <div className="flex-wrapper">
        <div className="container">
          <NavBarTop />
          <h1 className="title text-center">Terms and Policies</h1>
          <p className="text-center terms-sub-title">This is where you will find information about what you can and can’t do with UiRoute products, how we protect your privacy and the general conditions on using this website. 
            We try to make them as clear and readable as possible.</p>
          <div className="terms-links text-center">
            <ul>
              <li><Link to="/termsconditions">Terms and Conditions</Link></li>
              <li><Link to="/privacypolicy">Privacy Policy</Link></li>
              <li><Link to="/cookiepolicy">Cookie Policy</Link></li>
              <li><Link to="/licensing">Licensing</Link></li>
              <li><Link to="/refundpolicy">Refund Policy</Link></li>
            </ul>
          </div>    
        </div>
        <Footer />
      </div>
    )

}

export default TermsPolicies;