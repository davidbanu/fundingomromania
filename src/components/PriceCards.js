import React from 'react';

import {productData} from '../productData';

function PriceCards(props) {

    const title = "SaaS Master";
    return (
        <div className="pricing-table-wrapper">
            {productData.map((data) => {
                if(data.title === title) {
                    return (
                        <div className="row price-cards-row">
                        <div className="col-12 col-md-4 col-centered">
                            <div className="pricing-card card-large basic card">
                                <h3 className="price-title text-center">Basic</h3>
                                <div className="price-wrapper text-center">
                                    <h4>
                                        <span className="normal">{data.pricing.basicPrice}</span>
                                    </h4>
                                </div>
                                <div className="pricing-table-feature-wrapper">
                                    <ul className="pricing-table-feature">
                                        <li className="available">
                                            Full Documentation
                                        </li>
                                        <li className="available">
                                            Domains: <b>1</b>
                                        </li>
                                        <li className="available">
                                            Team size: <b>1 developer</b>
                                        </li>
                                        <li className="available">
                                            Free Support: <b>12 months</b>
                                        </li>
                                        <li className="available">
                                            Free Updates: <b>12 months</b>
                                        </li>
                                    </ul>
                                    <button className="buynow-btn">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12 col-centered">
                            <div className="pricing-card card-large standard-card">
                                <h3 className="price-title text-center">Standard</h3>
                                <div className="price-wrapper text-center">
                                    <h4>
                                        <span className="normal">{data.pricing.standardPrice}</span>
                                    </h4>
                                </div>
                                <div className="pricing-table-feature-wrapper">
                                    <ul className="pricing-table-feature">
                                        <li className="available">
                                            Full Documentation
                                        </li>
                                        <li className="available">
                                            Domains: <b>Unlimited</b>
                                        </li>
                                        <li className="available">
                                            Team size: <b>1-6 developers</b>
                                        </li>
                                        <li className="available">
                                            Free Support: <b>12 months</b>
                                        </li>
                                        <li className="available">
                                            Free Updates: <b>24 months</b>
                                        </li>
                                    </ul>
                                    <button className="buynow-btn">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-centered">
                            <div className="pricing-card card-large premium-card">
                                <h3 className="price-title text-center">Premium</h3>
                                <div className="price-wrapper text-center">
                                    <h4>
                                        <span className="normal">{data.pricing.premiumPrice}</span>
                                    </h4>
                                </div>
                                <div className="pricing-table-feature-wrapper">
                                <ul className="pricing-table-feature">
                                        <li className="available">
                                            Full Documentation
                                        </li>
                                        <li className="available">
                                            Domains: <b>Unlimited</b>
                                        </li>
                                        <li className="available">
                                            Team size: <b>Unlimited</b>
                                        </li>
                                        <li className="available">
                                            Free Support: <b>12 months</b>
                                        </li>
                                        <li className="available">
                                            Free Updates: <b>24 months</b>
                                        </li>
                                    </ul>
                                    <button className="buynow-btn">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                }       
                })}
            
        </div>
    )
}

export default PriceCards;