import React, { useState, useEffect } from "react";
import "./App.css";

import "firebase/compat/database"; // Import the Firebase Realtime Database
import TitleBar from "./TitleBar";

import MainMenu from './MainMenu';
import Weather from "./weather";
import Dashboard from './Dashboard';
import News from "./News";
import Upgrade1 from "./Upgrade";
// Initialize Firebase with your Firebase configuration


function App() {
  
  
  const [selectedMenu, setSelectedMenu] = useState('Dashboard');
  const handleAgricultureNewsClick = () => {
    console.log('Agriculture News clicked');
    setSelectedMenu('News');
  };

  const handleMenuSelect = (option) => {
    setSelectedMenu(option);
  };
  return (
    
    <div>
      <div>
      <TitleBar userName="Your Name" userEmail="your@email.com" onAgricultureNewsClick={handleAgricultureNewsClick} />
      {(selectedMenu === 'News') ? <News /> : null}
      </div>
      <div style={{ display: 'flex' }}>
        <MainMenu onSelectMenu={handleMenuSelect} >
          <div style={{ marginLeft: '200px', padding: '20px' }}></div>
        </MainMenu>
        <div style={{ padding: '20px' }}>
          {(selectedMenu === 'Weather') ? <Weather /> : null}
          {(selectedMenu === 'Upgrade1') ? <Upgrade1 /> : null}
          {(selectedMenu === 'Dashboard' || selectedMenu === '') ? <Dashboard /> : null}
          
        </div>
        </div>
    <div className="App">
     
     <div className="clock-container">
     <Clock />
     </div> 
      
        
      
    </div>
    </div>
     
  );
}
const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formattedTime = new Intl.DateTimeFormat("en-IN", {
    timeStyle: "medium",
    timeZone: "Asia/Kolkata",
  }).format(time);

  return <span>{formattedTime}</span>;
};

export default App;
