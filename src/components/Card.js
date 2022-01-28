import React from "react";
import "./Card.css";
import {FcSimCardChip} from 'react-icons/fc'
const Card = () => {
  return (
    <div className="card">
      <div className="atm">
        <h5 className="title">Card</h5>
        <div className="big-atm">
          <div className="left">
              <div className="balance">
                <h5>Balance</h5>
                <h2>$5,698</h2>
              </div>
            <p className="accountNumber">**** **** **** 3456</p>
            <div className="det">
              <p>
                <h4>Card holder</h4>
                <h5>Success Alex</h5>
              </p>
              <p>
                <h4>Valid Thru</h4>
                <h5>09/25</h5>
              </p>
            </div>
          </div>
          <div className="imgCard">
            <img
              src="https://res.cloudinary.com/dvo8xhx6r/image/upload/v1643392366/618px-Mastercard-logo.svg_hjwpc2.png"
              className="master"
              alt=""
            />
            <FcSimCardChip className="chip" />
          </div>
        </div>
          </div>
    </div>
  );
};

export default Card;
