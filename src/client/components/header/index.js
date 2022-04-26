// import components
import React from "react";
import Navbar from "../navbar";
// import styling
import "./index.scss";

// header component
const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <Navbar />
        <div className="header__content">
          <h1 className="header__title">HAPEBEAST</h1>
          <p className="header__subtitle">
            <span>8K</span>
            <span>NEXT</span>
            <span>GENERATION,</span>
            <span>HIGH</span>
            <span>FASHION</span>
            <span>HAPES</span>
          </p>
        </div>
      </div>
    </header>
  );
};

// export component
export default Header;
