import React from 'react';

import Footer from '../components/Footer';
import NavBarTop from '../components/NavBarTop';

function PrivacyPolicy() {
    return (
        <div className="flex-wrapper">
            <div className="container">
               <NavBarTop />
                <div className="row mt-5">
                    <div className="col-lg-12 privacy-page">
                        <h2 className="text-center privacy-title">Our Privacy Policy</h2>
                        <p className="text-center"> UiRoute does not share personal information of any kind with anyone. We will not sell or rent your name or personal information to any third party. We DO NOT sell, rent or provide outside access to our mailing list or any data we store. Any data that a user stores via our facilities is wholly owned by that user or business. At any time a user or business is free to take their data and leave, or to simply delete their data from our facilities. </p>
                        <p className="text-center">UiRoute only collects such personal information that is necessary for you to access and use our services. This personal information includes, but is not limited to, first and last name, email address and other personal information necessary to generate proper legal documents. </p>
                        <p className="text-center">UiRoute may release personal information if UiRoute is required to by law, search warrant, subpoena, court order or fraud investigation. We may also use personal information in a manner that does not identify you specifically nor allow you to be contacted but does identify certain criteria about our Site's users in general (such as we may inform third parties about the number of registered users, number of unique visitors, and the pages most frequently browsed).</p>
                        <h2 className="text-center privacy-subtitle">Privacy Changes</h2>
                        <p>If we change our privacy policy we will post those changes on this page. Registered users will be sent an email that outlines changes made to the privacy policy.</p>
                        <p className="text-center">UiRoute is not responsible for any technological delays beyond our control. If your spam blocker blocks our emails from reaching you or you do not provide a valid email address where you can be reachable then you can access your download from the Downloads page.</p>
                        <hr className="text-center" />
                        <div className="text-center">
                            <p className="font-weight-light">Got a question? <a href="https://uiroute.com/contact" className="text-primary">Contact us</a>.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default PrivacyPolicy;
