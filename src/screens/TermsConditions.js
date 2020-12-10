import React from 'react';

import Footer from '../components/Footer';
import NavBarTop from '../components/NavBarTop';

function TermsConditions () {
    return (
        <div className="flex-wrapper">
        <div className="container">
          <NavBarTop />
          <div className="section">
            <div className="section-content">
              <h3 id="software-license">Software License</h3>
              <p>All products sold through this website are released under the <a href="http://www.gnu.org/copyleft/gpl.html" target="_blank" rel="noopener noreferrer">GNU Public License version 2.0</a> (or later). This is so you have the freedom to create something beautiful and share it back with us.</p>
              <h3 id="refund-policies">Refund Policies</h3>
              <p>We offer a <strong>14–days</strong> money-back guarantee refund&nbsp;policy on all of our products. To <strong>request a refund</strong>, just write us an e-mail at&nbsp;<a href="mailto:hello@uiroute.com">hello@uiroute.com</a>&nbsp;and we will get in touch with you within two business days.</p>
              <p>For yearly or monthly subscriptions, we don’t offer refunds for renewal payments. Before your subscription renewal, we’ll send an e-mail letting you know you are scheduled for a payment. If you don’t want your subscription to renew automatically, you can cancel it from <a rel="noreferrer noopener" href="https://uiroute.com/my-account" target="_blank" rel="noopener noreferrer">your account</a>.</p>
              <p>Please note that<strong> these refund policies apply&nbsp;only to the products bought through UiRoute.com</strong>. If you have purchased one of our products from a different marketplace (e.g. Envato), we comply with their own refund policies.</p>
              <h3 id="payments">Payments</h3>
              <p>For payment processing, we use the services of <a rel="noopener noreferrer" href="https://stripe.com/" target="_blank" rel="noopener noreferrer">Stripe Inc.</a> and <a rel="noopener noreferrer" href="https://www.braintreepayments.com/" target="_blank">Braintree</a> (a division of PayPal Inc.) We support <strong>all major credit cards and, optionally, PayPal, Apple Pay, or Google Pay.</strong> We, UiRoute, don’t save your payment details. The payment processor in use handles that, securely.</p>
              <p>When you pay for a UiRoute product, your payment information is securely processed over an SSL connection. All card numbers are encrypted on disk with AES-256 and decryption keys are stored on separate machines, by the payment processor service in use at checkout.</p>
              <p>Our prices are VAT inclusive and <strong>we use universal pricing,</strong> meaning you will always pay the advertised price, not more, not less.</p>
              <h3 id="product-support-and-updates">Product Support and Updates</h3>
              <p><strong>All product purchases entail a license key</strong> that allows you to access product updates and reach our product support service.</p>
              <p><strong>UiRoute’s customer support service</strong> covers help with setting up your product and direction on how to use the product as advertised. UiRoute’s support service does not cover help with product customization (e.g. custom code) beyond the advertised features.</p>
              <p>Each license key grants access to <strong>product updates</strong> meant to improve products, patch any security issues related to the product, and ensure product compatibility with the latest developments of the platforms it is based on (i.e., WordPress).</p>
              <p>Each live website using our products needs to have <strong>a valid license key activated</strong> for it to be able to access automatic updates and customer support services for that website. <strong>Purchasing a single product provides a single license key</strong> to access product updates and customer support for one live website. An exception is the <strong>Themes Bundle package</strong> that comes with a license key for multiple products and the ability to activate it on an unlimited number of sites.</p>
              <p>For license keys connected to subscriptions, if the subscription is no longer active the license key will become expired and you will no longer receive product updates and access to customer support for that subscription product. You can still use the purchased product as-it-is.</p>
              <p>You can activate license keys on any number of development or staging websites. Only live websites are taken into consideration.</p>
              <h3 id="changes-to-terms-and-conditions">Changes To Terms and Conditions</h3>
              <p>You can review the most current version of the Terms and Conditions at any time at this page.</p>
              <p>We reserve the right, at our sole discretion, to update, change, or replace any part ofbutton these Terms and Conditions. It is your responsibility to check our website periodically for changes. Your continued use of or access to our website or the Service following the posting of any changes to these Terms and Conditions constitutes acceptance of those changes.</p>
              <h3 id="contact-information">Contact Information</h3>
              <p>Please see <a href="https://uiroute.com/contact/">this page</a> for contact information.</p>
              <p>Questions about these Terms and Conditions should be sent to us at <a href="mailto:contact@uiroute.com">contact@uiroute.com</a>.</p>
              <p><em>Last updated on July 24th, 2020.</em></p>
              <div className="swp-hidden-panel-wrap" style={{display: 'none', visibility: 'collapse', opacity: 0}} />
              <div className="swp-content-locator" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
}

export default TermsConditions;