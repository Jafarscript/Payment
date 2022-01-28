import React from 'react';
import { HiHome } from 'react-icons/hi';
import { FaConnectdevelop } from 'react-icons/fa';
import { FiBarChart } from 'react-icons/fi';
import { MdAccountBalanceWallet } from 'react-icons/md'
import { BsListUl } from 'react-icons/bs'
import {FiSettings} from 'react-icons/fi'
import "./Sidebar.css"


const Sidebar = () => {
    return (
      <div className="side-menu">
        <div className="upper">
          <div className='only'>
            <FaConnectdevelop className="dark" />
          </div>
          <div>
            <HiHome className="icon" />
            <span className='line'></span>
          </div>
          <div>
            <FiBarChart className={`${"icon"}  ${'opacity'}`} />
          </div>
          <div>
            <MdAccountBalanceWallet className={`${"icon"}  ${'opacity'}`} />
          </div>
          <div>
            <BsListUl className={`${"icon"}  ${'opacity'}`} />
          </div>
        </div>
        <div className="bottom">
          <div>
            <FiSettings className="icon" />
          </div>
        </div>
      </div>
    );
};

export default Sidebar;
