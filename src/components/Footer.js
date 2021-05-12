import React from "react";
import { Link } from "react-router-dom";
import logo from '../logo-circle.png';

function Footer() {
  return (
    <footer className="footer-uiroute">
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-3 col-sm-6 col-12 brand-footer mb-5">
            <h3 className="text-center title-footer"> <img src={logo} className="logo-om" alt="Logo" /> Romania</h3>
            <p className="text-center">
            România, țara cu cei mai mulți credincioși evanghelici din Europa (după ultimele statistici), n-a aflat încă ce poate să facă Dumnezeu în/prin Bisericile Sale locale
            </p>
          </div>
          <div className="col-md-3 col-sm-6 col-12 company-footer">
            <h3 className="text-center title-footer">Campanii</h3>
            <ul>
              <li>
                <Link to="/">Misiunea din Dobrogea</Link>
              </li>
              <li>
                <Link to="/">Misiunea din Sud-Estul României</Link>
              </li>
              <li>
                <Link to="/">Misiunea din Oltenia</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 col-12 legal-footer">
            <h3 className="text-center title-footer">Campanii</h3>
            <ul>
              <li>
                <Link to="/">Instruirea misionarilor străini și români</Link>
              </li>
              <li>
                <Link to="/">Misiunea de susținere a misionarilor români</Link>
              </li>
              <li>
                <Link to="/">Misiunea din Ghimbav</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 col-12 contact-footer">
            <h3 className="text-center title-footer">Contact:</h3>
            <ul className="text-center">
              <p>
              info.ro@om.org
              </p>
              <p>
              +40 268 253613
              </p>
              <p>
              Str. Morii 109 Ghimbav, BV
              </p>
              <p>
              CP 17, OP Ghimbav, BV, 507075
              </p>
            </ul>
          </div>
        </div>
      </div>
      
      <p className="text-center copyright-footer">© 2021 OM România</p>
    </footer>
  );
}

export default Footer;
