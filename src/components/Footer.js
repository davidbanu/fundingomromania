import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-uiroute">
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-3 col-sm-6 col-12 brand-footer mb-5">
            <h3 className="text-center title-footer">UiRoute</h3>
            <p className="text-center">
              Web Elements and UI Templates designed and built for awesome
              developers
            </p>
          </div>
          <div className="col-md-3 col-sm-6 col-12 company-footer">
            <h3 className="text-center title-footer">Company</h3>
            <ul>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/products/free">Freebies</Link>
              </li>
              <li>
                <Link to="/products/premium">Premium</Link>
              </li>
              <li>
                <Link to="/">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 col-12 legal-footer">
            <h3 className="text-center title-footer">Legal</h3>
            <ul>
              <li>
                <Link to="/termsconditions">Terms and Conditions</Link>
              </li>
              <li>
                <Link to="/privacypolicy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/cookiepolicy">Cookie Policy</Link>
              </li>
              <li>
                <Link to="/licensing">Licensing</Link>
              </li>
              <li>
                <Link to="/refundpolicy">Refund Policy</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 col-12 resources-footer">
            <h3 className="text-center title-footer">Resources</h3>
            <ul>
              <li>
                <Link to="/product/bootstrap/startup-prime-kit">
                  Startup Prime Kit
                </Link>
              </li>
              <li>
                <Link to="/product/bootstrap/startup-prime-pro-kit">
                  Startup Prime Pro Kit
                </Link>
              </li>
              <li>
                <Link to="/product/bootstrap/lansera">Lansera Theme</Link>
              </li>
              <li>
                <Link to="/product/bootstrap/saas-master">SaaS Master</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="social-icons text-center">
        <ul>
          <li>
            <a
              href="https://github.com/UiRoute/"
              className="github-icon"
              aria-label="Github"
            >
              <i className="fa fa-github" aria-hidden />
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/ui.route"
              className="instagram-icon"
              aria-label="Instagram"
            >
              <i className="fa fa-instagram" aria-hidden />
            </a>
          </li>
          <li>
            <a
              href="https://dribbble.com"
              className="dribbble-icon"
              aria-label="Dribbble"
            >
              <i className="fa fa-dribbble" aria-hidden />
            </a>
          </li>
          <li>
            <a
              href="https://facebook.com"
              className="facebook-icon"
              aria-label="Facebook"
            >
              <i className="fa fa-facebook" aria-hidden />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/ui_route"
              className="twitter-icon"
              aria-label="Twitter"
            >
              <i className="fa fa-twitter" aria-hidden />
            </a>
          </li>
        </ul>
      </div>
      <p className="text-center copyright-footer">© 2020 UiRoute</p>
    </footer>
  );
}

export default Footer;
