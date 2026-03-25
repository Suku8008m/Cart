import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="back-to-top" onClick={() => window.scrollTo(0, 0)}>
        Back to top
      </div>
      <div className="footer-links-container">
        <div className="footer-column">
          <h3>Get to Know Us</h3>
          <ul>
            <li>Careers</li>
            <li>Blog</li>
            <li>About AmazonCore</li>
            <li>Investor Relations</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Make Money with Us</h3>
          <ul>
            <li>Sell products on AmazonCore</li>
            <li>Sell on AmazonCore Business</li>
            <li>Become an Affiliate</li>
            <li>Advertise Your Products</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Let Us Help You</h3>
          <ul>
            <li>AmazonCore and COVID-19</li>
            <li>Your Account</li>
            <li>Your Orders</li>
            <li>Shipping Rates & Policies</li>
            <li>Returns & Replacements</li>
            <li>Help</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026, AmazonCore Clone Project</p>
      </div>
    </footer>
  );
};

export default Footer;
