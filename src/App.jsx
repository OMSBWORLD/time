import React, { useState, useEffect } from 'react';
import './App.css'

const App = () => {
  const [currentDateTime, setCurrentDateTime] = useState('');
  const handlePrint = () => {
    window.print();
  };
  const getCurrentDate = () => {
    const currentDate = new Date();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    const year = currentDate.getFullYear();

    return `${month}-${day}-${year}`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      const formattedDate = currentDate.toDateString();
      const formattedTime = currentDate.toLocaleTimeString();
      setCurrentDateTime(`${formattedDate} ${formattedTime}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='main-parent'> 
      <div className='main'>
          <div className='one'>
              <h1>Current Day, Date and Time</h1>
              <p>{currentDateTime}</p>
          </div>
        <div className='two'>
            <button onClick={handlePrint}>Print</button>
        </div>
        <div className='three'>
            <h1>Current Date</h1>
            <p>{getCurrentDate()}</p>
        </div>
      </div>
    </div>
  );
};

export default App;
