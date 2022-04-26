// import components
import React from "react";
// import styling
import "./index.scss";

const FullCard = ({ image, title, ethPrice, usdPrice, btnTitle }) => {
  return (
    <div className="fullCard">
      <img src={image} className="fullCard__img" alt="shogun ape" />
      <div className="fullCard__content">
        <h1 className="fullCard__title">{title}</h1>
        <p className="fullCard__price">
          {ethPrice} ETH (${usdPrice})
        </p>
        <button className="fullCard__btn">{btnTitle}</button>
      </div>
    </div>
  );
};

export default FullCard;
