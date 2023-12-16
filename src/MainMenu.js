// MainMenu.js

import React, { useState, useEffect } from 'react';
import './MainMenu.css'; // Import the CSS file

const MainMenu = ({ onSelectMenu }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleMenuClick = (option) => {
    setSelectedOption(option);
    onSelectMenu(option);
  };
  useEffect(() => {
    // Set the initial selected option to 'Dashboard' only if not already set
    if (!selectedOption) {
      setSelectedOption('Dashboard');
      onSelectMenu('Dashboard');
    }
  }, [selectedOption, onSelectMenu]);
  

  return (
    <div className="mainMenu">
      <div className="menuTitle">Main Menu</div>
      <ul className="menuList">
        <li
          className={`menuItem ${selectedOption === 'Dashboard' ? 'selected' : ''}`}
          onClick={() => handleMenuClick('Dashboard')}
        >
          <i className="material-icons menuIcon">dashboard</i> Dashboard
        </li>
        <li
          className={`menuItem ${selectedOption === 'Weather' ? 'selected' : ''}`}
          onClick={() => handleMenuClick('Weather')}
        >
          <i className="material-icons menuIcon">cloud</i> Weather Forecast
        </li>
        <li
          className={`menuItem ${selectedOption === 'Upgrade1' ? 'selected' : ''}`}
          onClick={() => handleMenuClick('Upgrade1')}
        >
          <i className="material-icons menuIcon">update</i> Smart Plus
        </li>
      </ul>
    </div>
  );
};

export default MainMenu;
