import React from 'react';
import { FaWallet } from 'react-icons/fa'
import { SiVisa } from 'react-icons/si'
import {MdArrowForwardIos} from 'react-icons/md'
import './Transfer.css'

const Transfer = () => {
    return (
      <div className="transfer">
        <h5 className="title">Transfer money</h5>
        <div className="main">
          <div className="head">
            <h4>
              <FaWallet className="icon" />
              Quick Transfer
            </h4>
            <div className="users">
              <img
                src="https://res.cloudinary.com/dvo8xhx6r/image/upload/v1635850246/send-money-in-person-from-jamaica-resp_p6pk5p.jpg"
                alt=""
              />
              <img
                src="https://res.cloudinary.com/dvo8xhx6r/image/upload/v1635850246/send-money-in-person-from-jamaica-resp_p6pk5p.jpg"
                alt=""
              />
              <img
                src="https://res.cloudinary.com/dvo8xhx6r/image/upload/v1635850246/send-money-in-person-from-jamaica-resp_p6pk5p.jpg"
                alt=""
              />
              <img
                src="https://res.cloudinary.com/dvo8xhx6r/image/upload/v1635850246/send-money-in-person-from-jamaica-resp_p6pk5p.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="down">
            <input value="1234 4589 3759 3456" />
            <SiVisa className='visa' />
            <MdArrowForwardIos className="arrow-btn" />
          </div>
        </div>
      </div>
    );
};

export default Transfer;
