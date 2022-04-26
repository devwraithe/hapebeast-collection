// import components
import React from "react";
// import styling
import "./index.scss";

// navbar component
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__wrapper">
        <div className="navbar__brand">HPBST</div>
        <div className="navbar__button">
          <button class="navbar__btn">Get HAPES</button>
          <button class="navbar__btn">Connect Wallet</button>
        </div>
      </div>
    </nav>
  );
};

// export component
export default Navbar;
