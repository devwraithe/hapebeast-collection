import React from "react";
import "./index.scss";
import img5 from "../../assets/images/popular/5.jpg";

const Modal = (props, { clickAction }) => {
  if (!props.show) {
    return null;
  }

  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal__wrapper">
        <div className="modal__image">
          <img className="modal__img" src={img5} alt="" />
        </div>
        <div className="modal__content">
          <h1 className="modal__title">Old White HAPE</h1>
          <p className="modal__author">Ibrahim Ibrahim &middot; 0xff...</p>
          <p className="modal__desc">
            Test text Test text Test text Test text Test text Test text Test
            text Test text Test text Test text Test text Test text Test text
            Test text Test text Test text Test text Test text Test text Test
            text Test text Test text Test text Test text Test text
          </p>
          <h2 className="modal__price">1.28 ETH</h2>
          <button className="modal__btn">Buy this HVPE</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
