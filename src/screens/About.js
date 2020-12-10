import React from 'react';

import Footer from '../components/Footer';
import NavBarTop from '../components/NavBarTop';
import AboutList from '../components/AboutList';

function About() {
    return (
        <div className="flex-wrapper">
            <div className="container">
                <NavBarTop />
                <div className="text-center all-products-img">
                    <img src="img/all-templates.png" className="img-fluid" alt="Presenting part of the themes that we have" />
                </div>
                <AboutList />
                <div className="row">
                    <div className="col-12 col-md-6 text-center">
                        <img src="img/code.png" className="img-about-presentation img-fluid" alt="Code snippet showing clean code practices" />
                    </div>
                    <div className="col-12 col-md-6">
                        <h1 className="about-title">Clean Code &amp; Premium Design</h1>
                        <p className="text-center about-subtitle">Our templates are made specifically to be used by developers, which means that we know how important it is to use clean, quality and standardized code.
                        UiRoute templates are an extension of Bootstrap 4's CSS framework that comes with a modern look and extra components, utilities and plugins.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6">
                    <h1 className="about-title text-center">Well documented</h1>
                    <p className="text-center about-subtitle-2">Components, pages, plugins and build tools are all well documented with live examples and explanations.
                    If you purchase one of our products and if we missed something from the documentation, our core team will happily help you out.</p>
                </div>
                <div className="col-12 col-md-6 text-center">
                    <img src="img/primepro-docs.png" className="img-about-presentation" alt="Documentation page with nice layout" />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About;