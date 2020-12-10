import React from 'react';
import {Link} from 'react-router-dom';


import Footer from '../components/Footer';
import NavBarTop from '../components/NavBarTop';
import HomeTabBar from '../components/HomeTabBar';
import FeaturedIn from '../components/FeaturedIn';
import Newsletter from '../components/Newsletter';

import { productData } from "../productData";


function Free () {
    return (
<div className="flex-wrapper">
      <div className="container free-themes">
        <NavBarTop />
        <h1 className="title text-center"> Free Themes </h1>
        <HomeTabBar />
        <div id="products" className="products-section">
          <div className="row products-row">
          {productData.map((data) => {
            if(data.pricing.basicPrice === 'Free') {
              return (
                <div className="col-lg-6 col-sm-12">
                  <section className="product-item" style={data.style}>
                    <header>
                      <div className="row title-row">
                        <div className="col-md-10 col-sm-10 col-10">
                          <h4 className="post-title mb-0"> <Link to={data.link}> {data.title} </Link></h4>
                        </div>
                        <div className="col-md-2 col-sm-2 col-2 price-col-label"> <a className="btn btn-primary product-price" href="#">{data.pricing.basicPrice}</a>
                        </div>
                      </div>
                    </header>
                    <div className="post-bottom">
                      <div className="row">
                        <div className="col-md-10 col-sm-10 col-10">
                          <div className="short-description">
                            <p className="mt-2">{data.description}</p>
                          </div>
                          <p className="mb-0 extension-text"> Compatible with <a href="#">Bootstrap 4</a> <a href="#">HTML</a></p>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              )
            } 
            })}
          </div>
        </div>
        <FeaturedIn />
        <Newsletter />
      </div>
      <Footer />
    </div>
    )
}

export default Free;