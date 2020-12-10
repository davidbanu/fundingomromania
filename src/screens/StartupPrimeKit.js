import React, { useState } from "react";

import Footer from "../components/Footer";
import NavBarTop from "../components/NavBarTop";
import ProductTabBar from "../components/ProductTabBar";

import {productData} from '../productData';

function StartupPrimeKit() {
  const [tab, setTab] = useState("overview");

  const changeTab = (clickedTab) => setTab(clickedTab);

  return (
    <div className="flex-wrapper">
      <div className="container product-page">
        <NavBarTop />
        <div className="product-intro text-center">
          <h1 className="title text-center">Startup Prime Kit</h1>
          <p className="kit-subtitle">Best UI Kit for startups</p>
          <div className="product-intro__actions">
            <a href="#">
              <button
                className="demo-btn shadow"
                style={{ marginRight: "10px" }}
              >
                View Demo
              </button>
            </a>
            <a href="#download">
              <button className="download-btn shadow">Download</button>
            </a>
          </div>
          <ProductTabBar changeTab={changeTab} />
          <div className="row">
            <div className="col-12 col-md-8 product-description">
              {tab === "overview" ? (
                <>
                  <p>
                    Startup Prime is a free, fully responsive and modern
                    Bootstrap 4 UI Kit that will help you build creative and
                    professional websites. Use our components and sections,
                    switch some Sass variables to build and arrange pages to
                    best suit your needs.
                  </p>
                  <h3>Premium components</h3>
                  <p>
                    Buttons, timelines, blog cards, profile cards, tables,
                    accordions... you name it and we have it. Our components are
                    a perfect extension of Bootstrap 4 so you will find it very
                    easy to work with our code if you're familiar with their
                    class names and styles. Furthermore, we've made sure to that
                    all components are well documented. Our components are
                    created by the Object Oriented CSS principle, which means
                    that the classes can be combined each other. You want to
                    make a rounded button, but with the secondary color and an
                    animation? Great! All you have to do is add .btn,
                    .btn-rounded, .btn-secondary and .animate-up-2. How awesome
                    is that?
                  </p>
                  <h3>Example pages</h3>
                  <p>
                    These are the last building blocks to build an awesome
                    website. We made sure to offer you a few example pages to
                    prove how useful and great our UI Kit is. You'll find
                    landing pages for app presentations, to showcase your
                    freelancer profile and even a cryptocurrency themed page.
                    Additionally you will get many secondary utility pages, such
                    as pricing, about, contact, support center, careers,
                    authentication pages and many more
                  </p>
                  <h3>Dashboard</h3>
                  <p>
                    Startup Prime Kit also comes with a user dashboard
                    containing charts, vectorial maps, statistics, cards,
                    messaging, user settings, billing and many more. You can use
                    this dashboard for a user control panel for almost any
                    scenario.
                  </p>
                  <h3>Complete Documentation</h3>
                  <p>
                    Startup Prime Kit is thoroughly documented on how to get
                    started, how to use the building tools, components, plugins
                    and many more. Learn how to get started with Startup Prime
                    Kit by clicking
                    <a href="#"> here.</a>
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
                    href="https://uiroute.github.io/docs/startup-prime-kit/introduction.html"
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
                    Get Free Demo{" "}
                  </a>{" "}
                </div>
              </div>
              {productData.map((data) => {
                  if(data.title==='Startup Prime Kit'){
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
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default StartupPrimeKit;
