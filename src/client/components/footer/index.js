import React from "react";
import "./index.scss";

const Footer = () => {
  return (
    <nav className="footer">
      <div className="footer__wrapper">
        <div className="footer__brand">HPBST</div>
        <div className="footer__icons">
          <a href="https://www.linkedin.com" class="footer__icon">
            linkedin
          </a>
          <a href="https://www.twitter.com" class="footer__icon">
            twitter
          </a>
          <a href="https://www.twitter.com" class="footer__icon">
            github
          </a>
          <a href="mailto:ibrahimaibrahim851@outlook.com" class="footer__icon">
            email
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
