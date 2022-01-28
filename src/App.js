import React from 'react';
import './App.css'
import Sidebar from './components/Sidebar';
import Payment from './components/Payment';
function App() {
  return (
    <div className="app">
      <div className='app_body'>
        <Sidebar />
        <Payment />
      </div>
    </div>
  );
}

export default App;
