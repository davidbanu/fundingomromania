import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-uiroute">
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-3 col-sm-6 col-12 brand-footer mb-5">
            <h3 className="text-center title-footer">Funding OM Romania</h3>
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
          <div className="col-md-3 col-sm-6 col-12 resources-footer">
            <h3 className="text-center title-footer">Resurse</h3>
            <ul>
              <li>
                <Link to="https://www.om.org/en/country-profile/romania">
                  OM Romania
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <p className="text-center copyright-footer">© 2020 Funding OM Romania</p>
    </footer>
  );
}

export default Footer;
