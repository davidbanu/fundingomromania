import React from 'react';

import Footer from '../components/Footer';
import NavBarTop from '../components/NavBarTop';

function Contact () {
    return (
        <div className="flex-wrapper">
        <div className="container">
          <NavBarTop />
          <h2 className="text-center contact-title">Contact us</h2> 
          <p className="text-center contact-subtitle">You have a question? Let us know and we'll answer in no time!</p>
          <div className="contactPage">
            <form action className="box">
              <input type="text" placeholder="Your Name" />
              <input type="text" placeholder="Your Email" />
              <textarea type="text" placeholder="Your Message" className="input-message-box text-center" defaultValue={""} />
              <button>Send message</button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    )
}

export default Contact;