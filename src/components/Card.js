import React from "react";
import "./Card.css";
import {FcSimCardChip} from 'react-icons/fc'
const Card = () => {
  return (
    <div className="card">
      <div className="atm">
        <h5>Card</h5>
        <div className="big-atm">
          <div className="left">
            <header>
              <div>
                <h5>Balance</h5>
                <h2>$5,698</h2>
              </div>
            </header>
            <p>**** **** **** 3456</p>
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
              src="https://res.cloudinary.com/dvo8xhx6r/image/upload/v1643387041/logo-mastercard-mobile_eun6qp.svg"
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
