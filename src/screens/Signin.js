import React from 'react';
import { Link } from 'react-router-dom';

import NavBarTop from '../components/NavBarTop';
import Footer from '../components/Footer';


function Signin () {
    return (
        <div className="flex-wrapper">
        <div className="container">
          <NavBarTop />
          <div className="loginPage">
            <h2 className="text-center signin-title">Log in to your account</h2>
            <form action className="box">
              <input type="text" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <Link to="/resetPassword">Forgot password?</Link>
              <button>Sign in</button>
              <p className="text-center">Don't have an account yet? <Link className="signup-link" to="/signup">Sign Up for Free.</Link></p>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    )
}

export default Signin;