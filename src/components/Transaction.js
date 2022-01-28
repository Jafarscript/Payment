import React from 'react';
import { AiOutlineRest } from 'react-icons/ai'
import { GoLightBulb } from 'react-icons/go'
import { RiMotorbikeFill } from 'react-icons/ri'
import { BsApple } from 'react-icons/bs'
import './Transaction.css'

const Transaction = () => {
    return (
      <section>
        <div className='left'>
          <h5 className="title">Transaction</h5>
          <div className="table">
            <div className="item">
              <h2>
                <AiOutlineRest className="awe" />
                Restaurant
              </h2>
              <h6 className="date">January 20, 10:32 PM</h6>
              <h4>$20.33</h4>
            </div>
            <div className="item">
              <h2>
                <GoLightBulb className="awe" />
                Electricity bill
              </h2>
              <h6 className="date">January 20, 10:32 PM</h6>
              <h4>$30.00</h4>
            </div>
            <div className="item">
              <h2>
                <RiMotorbikeFill className="awe" />
                Transport
              </h2>
              <h6 className="date">January 20, 10:32 PM</h6>
              <h4>$40.33</h4>
            </div>
            <div className="item">
              <h2>
                <BsApple className="awe" />
                Apple
              </h2>
              <h6 className="date">January 20, 10:32 PM</h6>
              <h4>$100.43</h4>
            </div>
            <div className="item">
              <h2>
                <GoLightBulb className="awe" />
                Electricity bill
              </h2>
              <h6 className="date">January 20, 10:32 PM</h6>
              <h4>$50.30</h4>
            </div>
          </div>
            </div>
            <div>
                <h5>Transaction Statistics</h5>
            </div>
      </section>
    );
};

export default Transaction;
