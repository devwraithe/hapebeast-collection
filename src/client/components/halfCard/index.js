// import external components
import React, { useState } from "react";
// import styling
import "./index.scss";
// import assets

// halfCard component
const HalfCard = ({ image, title, price, clickAction }) => {
  return (
    <div className="halfCard">
      <img className="halfCard__img" src={image} alt="" />
      <div className="halfCard__content">
        <div className="halfCard__title">{title}</div>
        <div className="halfCard__price">{price} ETH</div>
        <button className="halfCard__btn" onClick={clickAction}>
          View HVPE{" "}
        </button>
      </div>
    </div>
  );
};

// export cared component
export default HalfCard;
