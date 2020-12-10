import React from 'react';

const Banner = ({ appName, token }) => {
  if (token) {
    return null;
  }
  return (
    <div className="homePage">
      <section className="showcase">
        <div className="col-md-12 showcase-bg">
          <p className="showcase-text">
          România, țara cu cei mai mulți credincioși evanghelici din Europa (după ultimele statistici), n-a aflat încă ce poate să facă Dumnezeu în/prin Bisericile sale locale! 
          </p>
        </div>
        <div className="showcase-img">       
        </div>
      </section>
    </div>  
  );
};

export default Banner;
