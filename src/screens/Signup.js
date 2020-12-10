import React from 'react';
import { Link } from 'react-router-dom';

import NavBarTop from '../components/NavBarTop';
import Footer from '../components/Footer';

function Signup () {
    return (
        <div className="flex-wrapper">
            <div className="container">
                <NavBarTop />
                <div className="loginPage">
                    <h2 className="text-center signin-title">Join Other Developers</h2>
                    <form action className="box">
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email Address" />
                        <input type="password" placeholder="Password" />
                        <input type="password" placeholder="Confirm Password" />
                        <button>Create Account</button>
                    </form>
                    <p className="text-center agreeText-signup">By clicking Create Account, you agree to our <Link to="/termsconditions"> Terms </Link>
              and <Link to="/privacypolicy">Privacy Policy</Link>.</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Signup;