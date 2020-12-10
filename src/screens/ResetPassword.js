import React from 'react';

import Footer from '../components/Footer';
import NavBarTop from '../components/NavBarTop';


function ResetPassword() {
    return (
        <div className="flex-wrapper">
            <div className="container">
                <NavBarTop />
                <div className="resetPage">
                    <h2 className="text-center resetpass-title">
                        Reset Your Password
                    </h2>
                    <p className="text-center reset-pass-instructions">Please insert your email in the input below and we will send an
                        email with the link to reset your password.</p>
                    <form action className="box">
                        <input type="text" placeholder="Email" />
                        <button>Reset Password</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ResetPassword;