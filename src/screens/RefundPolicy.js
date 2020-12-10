import React from 'react';

import Footer from '../components/Footer';
import NavBarTop from '../components/NavBarTop';

function RefundPolicy() {
    return (
        <div className="flex-wrapper">
            <div className="container">
                <NavBarTop />
                <div className="row refund-container mt-5">
                    <article className="col-12 col-sm-12 col-md-12">
                        <h1 className="text-center">Refund Policy</h1>
                        <p className="text-center">Informations for our customers</p>
                        <p>Hi, we're UiRoute and welcome to the UiRoute Market Refund Rules. Because we are a
                        platform, these rules outline what you can expect from the authors of the items you buy. They
                apply to all authors and customers.</p>
                        <p>The products that authors sell on the platform are digital goods and cannot be "returned", so
                        your entitlement to a refund is designed with this in mind. Of course, in addition to these
                        rules, each country has its own laws surrounding refunds, and these local laws are not excluded
                if they apply to you.</p>
                        <h3>Before you ask for a refund from an author</h3>
                        <p>If you have purchased an item from our “Web Themes and Templates” or “Code” category on
                        UiRoute Market and you are experiencing a technical issue with the item we recommend that you
                        contact the author of that item and seek assistance. Often they’ll be able to help to
                troubleshoot your problem.</p>
                        <h3>Asking for refunds from authors via the UiRoute platform</h3>
                        <p>We understand, however, that sometimes the author may not be able to solve your issue or there
                        may be circumstances in which a refund is warranted. In this case, here are the circumstances in
                which we would expect an author to provide you with a refund:</p>
                        <ul>
                            <li>Item is "not as described" or the item doesn’t work the way it should.</li>
                            <li>Item has a security vulnerability</li>
                            <li>Item support is promised but not provided</li>
                            <li>Item support extension not used</li>
                            <li>Items that have not been downloaded</li>
                            <li>Resolving disputes - asking UiRoute to help</li>
                        </ul>
                        <h3>Item is "not as described" or the item doesn’t work the way it should.</h3>
                        <p>If an item doesn’t work the way it should then the author is required to promptly fix the issue
                        by updating the item. An item is "not as described" if it is materially different from the item
                        description or preview. If the issue can’t be fixed or it turns out that the item is “not as
                described” then you would be entitled to a refund from the author.</p>
                        <h3>Item has a security vulnerability</h3>
                        <p>If an item contains a security vulnerability and can't easily be fixed you would be entitled to a
                        refund from the author. If the item can be fixed, then the author should do so promptly by
                        updating the item. If the item contains a security vulnerability that is not patched in an
                appropriate timeframe then we would expect the author to provide a refund for the item.</p>
                        <h3>Item support is promised but not provided</h3>
                        <p>If an author advertises their item as including item support, you have a current support
                        entitlement, and you are not provided that support in accordance with the item support policy
                the author should provide you with a refund.</p>
                        <h3>Item support extension not used</h3>
                        <p>If you purchase an item support extension and request a refund of that extension before your
                        existing item support expires we would expect the author to provide you with a refund of that
                item support extension.</p>
                        <h3>Items that have not been downloaded</h3>
                        <p>If you have not downloaded a purchased item within 3 months from the date of purchase, you may be
                        eligible for a refund. You will be required to provide the author of that item your purchase
                        code in order for the author to verify your claim that you have not downloaded an item. Although
                        we think 3 months is a reasonable time, depending on where you are located, you might have a
                        longer period to claim a refund if you have purchased for personal use and haven't downloaded
                the item.</p>
                        <h3>Resolving disputes - asking UiRoute to help</h3>
                        <p>If you and an author can't come to an agreement about a refund, you can raise a dispute and have
                        UiRoute investigate the matter. We may ask you to provide supporting documentation or
                        evidence. Any refund issued by UiRoute is entirely discretionary. We will make a decision
                based on all available information and you agree that our decision is final.</p>
                        <p>Neither UiRoute nor authors are obliged to give policy refunds in any of the situations listed
                below.</p>
                        <ul>
                            <li>You don't want it after you've downloaded it</li>
                            <li>The item did not meet your expectations or you feel the item is of low quality</li>
                            <li>You simply change your mind</li>
                            <li>You bought an item by mistake</li>
                            <li>You do not have sufficient expertise to use the item</li>
                            <li>You claim that you are entitled to a refund but do not provide sufficient information as to
                  why you are entitled to a refund</li>
                            <li>You can no longer access the item because it has been removed or the author who previously
                            provided the item is no longer active on our platform (we advise you to download items as
                  soon as you have purchased them to avoid this situation).</li>
                        </ul>
                        <hr className="mt-5" />
                        <div className="mt-5 d-flex justify-content-center">
                            <p className="font-weight-light">Got a question? <a href="https://uiroute.com/contact" className="text-primary">Contact us</a>.</p>
                        </div>
                    </article>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default RefundPolicy;

