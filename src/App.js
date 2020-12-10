import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route, 
  Redirect
} from "react-router-dom";

import Home from './screens/Home';
import Premium from './screens/Premium';
import Free from './screens/Free';
import Kits from './screens/Kits';
import About from './screens/About';
import TermsPolicies from './screens/TermsPolicies';
import Signin from './screens/Signin';
import Signup from './screens/Signup';
import ResetPassword from './screens/ResetPassword';
import Contact from './screens/Contact';
import TermsConditions from './screens/TermsConditions';
import PrivacyPolicy from './screens/PrivacyPolicy';
import CookiePolicy from './screens/CookiePolicy';
import RefundPolicy from './screens/RefundPolicy';
import Licensing from './screens/Licensing';
import StartupPrimeKit from './screens/StartupPrimeKit';
import StartupPrimeProKit from './screens/StartupPrimeProKit';
import Lansera from './screens/Lansera';
import SaasMaster from './screens/SaasMaster';
import NotFoundPage from './screens/NotFoundPage';
import ProfileHome from './screens/ProfileHome';

import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products/premium" component={Premium} />
        <Route path="/products/free" component={Free} />
        <Route path="/products/kits" component={Kits} />
        <Route path="/about" component={About}/>
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/termspolicies" component={TermsPolicies} />
        <Route path="/resetpassword" component={ResetPassword} />
        <Route path="/contact" component={Contact} />
        <Route path="/termsconditions" component={TermsConditions} />
        <Route path="/privacypolicy" component={PrivacyPolicy} />
        <Route path="/cookiepolicy" component={CookiePolicy} />
        <Route path="/refundpolicy" component={RefundPolicy} />
        <Route path="/licensing" component={Licensing} />
        <Route path="/product/bootstrap/startup-prime-kit" component={StartupPrimeKit} />
        <Route path="/product/bootstrap/startup-prime-pro-kit" component={StartupPrimeProKit} />
        <Route path="/product/bootstrap/lansera" component={Lansera} />
        <Route path="/product/bootstrap/saas-master" component={SaasMaster} />
        <Route path="/profile" component={ProfileHome} />
        <Route path="/404" component={NotFoundPage} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}

export default App;
