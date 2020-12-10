import React from 'react';
import { Link } from 'react-router-dom';

import Footer from '../components/Footer';


function NotFoundPage() {
    return (
        <div className="flex-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <div className="text-center">
                            <img src="img/PageNotFound.png" className="img-fluid img-404" alt="Not Found" />
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <h2 className="notFound-title text-center">Woops! Page Not Found!</h2>
                        <Link to="/">
                            <button className="primary with-shadow"> Go back home </button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default NotFoundPage;