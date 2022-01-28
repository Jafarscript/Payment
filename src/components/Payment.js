import React from 'react';
import './Payment.css'
import { RiSearchLine } from 'react-icons/ri'
import { Avatar } from '@material-ui/core';
import {IoMdNotifications} from 'react-icons/io'

const Payment = () => {
    return (
      <div className="pay">
        <div className="pay-header">
          <div className="search-area">
            <input type="search" placeholder="Search......." />
            <RiSearchLine className="search-btn" />
          </div>
          <div className="user">
            <Avatar
              className="use"
              src="https://res.cloudinary.com/dvo8xhx6r/image/upload/v1635850250/dwayne-the-rock-_nywovp.jpg"
            />
            <h4>Success Alex</h4>
            <p className="notify">
              <IoMdNotifications />
              <span className="dot"></span>
            </p>
          </div>
        </div>
      </div>
    );
};

export default Payment;
