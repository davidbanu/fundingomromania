import React, { useState } from "react";
import { Link } from "react-router-dom";

import Footer from "../components/Footer";
import NavBarTop from "../components/NavBarTop";
import ProductTabBar from "../components/ProductTabBar";
import PriceCards from "../components/PriceCards";

import {productData} from '../productData';

function SaasMaster() {

  const [tab, setTab] = useState("overview");

  const changeTab = (clickedTab) => setTab(clickedTab);

  

  return (
    <div className="flex-wrapper">
      <div className="container product-page">
        <NavBarTop />
        <div className="product-intro text-center">
          <h1 className="title text-center">SaaS Master</h1>
          <p className="kit-subtitle">Premium Template for SaaS Businesses</p>
          <div className="product-intro__actions">
            <Link to="/">
              <button
                className="demo-btn shadow"
                style={{ marginRight: "10px" }}
              >
                View Demo
              </button>
            </Link>
            <a href="#pricing">
              <button className="download-btn shadow">Pricing</button>
            </a>
          </div>
          <ProductTabBar changeTab={changeTab} />
          <div className="row">
            <div className="col-12 col-md-8 product-description">
              {tab === "overview" ? (
                <>
                  <p>
                    SaaS Master is a premium Bootstrap 5 Template featuring
                    over 40 pages, 300 components and sections. Using beautifully vibrant colors and illustrations
                    you can create a stunning website for your
                    SaaS app.
                  </p>

                  <h3>Built with Bootstrap 5 &amp; Vanilla JS</h3>
                  <p>
                    SaaS Master is built using the latest version of Bootstrap 5
                    meaning that jQuery is not a required dependency neither for
                    Bootstrap nor Swipe. We used good old vanilla Javascript for
                    components such as the navigation bar, tooltips, and the
                    smooth scrolling feature.
                  </p>

                  <h3>Sass source files</h3>
                  <p>
                    Although a very simple to use template, SaaS Master is powered by
                    Sass source files that can make changing colors, sizing and
                    fonts so much easier. The variables are an extension of the
                    core values of Bootstrap 5.
                  </p>
                </>
              ) : null}

              {tab === "pages" ? (
                <>
                  <h3>Pages</h3>
                  <p>Our pages</p>
                </>
              ) : null}

              {tab === "fileStructure" ? (
                <>
                  <h3>FileStructure</h3>
                  <p>Our FileStructure</p>
                </>
              ) : null}

              {tab === "reviews" ? (
                <>
                  <h3>Reviews</h3>
                  <p>Our Reviews</p>
                </>
              ) : null}

              {tab === "changelog" ? (
                <>
                  <h3>Changelog</h3>
                  <p>Our Changelog</p>
                </>
              ) : null}

              {tab === "questions" ? (
                <>
                  <h3>Questions</h3>
                  <p>Our Questions</p>
                </>
              ) : null}
            </div>
            <div className="col-12 col-md-4 mt-5 mt-xl-0 docs-card-container">
              <div className="card bg-soft card-product-docs col-centered shaddow p-5 mb-3">
                <div className="text-center mb-3 mb-lg-0">
                  {" "}
                  <a
                    href="https://github.com/uiroute/Lansera#readme"
                    target="_blank"
                    rel="noopener noreferrer"
                    role="button"
                    className="btn btn-gray animate-up-2 btn-block"
                  >
                    {" "}
                    <span className="btn-inner-text">Docs v1.0</span>{" "}
                  </a>{" "}
                  <a
                    href="#"
                    role="button"
                    className="btn btn-block btn-outline-dark animate-up-2 mt-3"
                  >
                    {" "}
                    🚀 Get Free Demo{" "}
                  </a>{" "}
                </div>
              </div>
              {productData.map((data)=> {
                  if(data.title === 'SaaS Master'){
                    return (
                      <div className="card bg-soft card-product-stats col-centered shaddow p-5 mb-3">
                        <h4 className="text-center">{data.downloads} Downloads</h4>
                        <p>Price: {data.pricing.basicPrice}</p>
                        <p>Released: {data.released.substring(0,10)}</p>
                        <p>Updated: {data.updated.substring(0,10)}</p>
                        <p>Version: {data.version}</p>
                        <p>Category: {data.category}</p>
                      </div>
                    )
                  }
                })} 
            </div>
          </div>
          <div className="container">
              <h2 id="pricing" className="text-center">
                Pricing
              </h2>
              <p className="pricing-subtitle text-center">
                Are you ready to take your project to the next level?
              </p>
              <PriceCards />
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SaasMaster;
