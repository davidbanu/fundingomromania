import { getAllByDisplayValue } from "@testing-library/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import Footer from "../components/Footer";
import NavBarTop from "../components/NavBarTop";
import ProductTabBar from "../components/ProductTabBar";

import { productData } from "../productData";

function Lansera() {
  const [tab, setTab] = useState("overview");

  const changeTab = (clickedTab) => setTab(clickedTab);

  function convertDate(date) {
    const today = new Date();
    const originalDay = new Date(date);
    const timeDifference = today.getTime() - originalDay.getTime();
    const dayDifference = Math.round(timeDifference / (1000*3600*24));
    let timeMessage = "";
    if (dayDifference < 7) {
      timeMessage = dayDifference + " days ago";
    }
    else if (dayDifference > 7 && dayDifference < 30) {
      const weekDifference = Math.round(dayDifference / 7);
      if(weekDifference === 1) {
        timeMessage = weekDifference + " week ago";
      }
      else {
        timeMessage = weekDifference + " weeks ago";
      } 
    }
    else if (dayDifference > 30 && dayDifference < 365) {
      const noOfWeeks = Math.round(dayDifference / 7);
      const monthDifference = Math.round(noOfWeeks / 4);
      if (monthDifference === 1) {
        timeMessage = monthDifference + " month ago";
      }
      else {
        timeMessage = monthDifference + " months ago";
      } 
    }
    else if (dayDifference > 365) {
      const yearDifference = Math.round(dayDifference / 365);
      if (yearDifference === 1) {
        timeMessage = yearDifference + " year ago"; 
      }
      else {
        timeMessage = yearDifference + " years ago"; 
      }
    }
    return timeMessage;
  }

  return (
    <div className="flex-wrapper">
      <div className="container product-page">
        <NavBarTop />
        <div className="product-intro text-center">
          <h1 className="title text-center">Lansera</h1>
          <p className="kit-subtitle">Free One Page Template for Mobile Apps</p>
          <div className="product-intro__actions">
            <Link to="/">
              <button
                className="demo-btn shadow"
                style={{ marginRight: "10px" }}
              >
                View Demo
              </button>
            </Link>
            <a href="https://github.com/uiroute/lansera"target="_blank" rel="noopener noreferrer"> 
              <button className="download-btn shadow">Download</button>
            </a>
          </div>
          <ProductTabBar changeTab={changeTab} />
          <div className="row">
            <div className="col-12 col-md-8 product-description">
              {tab === "overview" ? (
                <>
                  <p>
                    Lansera is a free mobile application One Page Bootstrap 4
                    Template featuring sections such as about, features, frequently asked questions, and two
                    app download CTA sections. Using beautifully vibrant colors
                    and illustrations you can create a stunning presentational
                    page for your mobile app.
                  </p>
                  <h3>Sass source files</h3>
                  <p>
                    Although a very simple template, Lansera is powered by Sass
                    source files that can make changing colors, sizing and fonts
                    so much easier. The variables are an extension of the core
                    values of Bootstrap 4.
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
                <div>
                 <div className="row">
                   <div className="col-md-12">
                      <h3 className="folderStructure-title">File Structure</h3>
                   </div>
                 </div>
                 <ul className="folder-structure">
                      <li data-toggle="tooltip" data-placement="left" title data-original-title="Main folder that you will be working with"><span className="fa fa-folder mr-2" />assets</li>
                      <li>
                        <ul className="list-style-none folder-structure-inner">
                          <li data-toggle="tooltip" data-placement="left" title data-original-title="CSS files"><span className="fa fa-folder mr-2" /> css</li>
                          <li data-toggle="tooltip" data-placement="left" title data-original-title="All the images needed for the project"><span className="fa fa-folder mr-2" /> img</li>
                          <li data-toggle="tooltip" data-placement="left" title data-original-title="Partials are HTML snippets that are included in multiple pages, such as the menu or footer"><span className="fa fa-folder mr-2" /> js</li>
                          <li data-toggle="tooltip" data-placement="left" title data-original-title="Sass source files"><span className="fa fa-folder mr-2" /> scss</li>
                          <li data-toggle="tooltip" data-placement="left" title data-original-title="All illustrations"><span className="fa fa-folder mr-2" /> svg</li>
                        </ul>
                      </li>
                      <li data-toggle="tooltip" data-placement="left" title data-original-title="The main page with select option for light/dark theme"><span className="fa fa-html5 mr-2 text-secondary" />index.html</li>
                      <li data-toggle="tooltip" data-placement="left" title data-original-title="Dark page version"><span className="fa fa-html5 mr-2 text-secondary" />darkPage.html</li>
                      <li data-toggle="tooltip" data-placement="left" title data-original-title="Documentation file"><span className="fa fa-html5 mr-2 text-secondary" />lightPage.html</li>
                      <li data-toggle="tooltip" data-placement="left" title data-original-title="Project dependencies from package.json"><span className="fa fa-file-code-o text-muted mr-2" /> LICENSE.md</li>
                      <li data-toggle="tooltip" data-placement="left" title data-original-title="No project can miss a README :)"><span className="fa fa-file-code-o mr-2 text-tertiary" /> README.md</li>
                 </ul>
                </div>
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
                  if(data.title==='Lansera'){
                    return (
                      <div className="card bg-soft card-product-stats text-center col-centered shaddow p-5 mb-3">
                        <h4>{data.downloads} Downloads</h4>
                        <div className="productData-container">
                          <p>Price: {data.pricing.basicPrice}</p>
                          <p>Released: {convertDate(data.released)}</p>
                          <p>Updated: {convertDate(data.updated)}</p>
                          <p>Version: {data.version}</p>
                          <p>Category: {data.category}</p>
                        </div>
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

export default Lansera;
