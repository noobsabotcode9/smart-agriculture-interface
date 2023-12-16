// TitleBar.js
import React from "react";
import "./TitleBar.css"; // Existing CSS file
import profilePicture from "./profile.jpg"; // Replace with your profile picture URL

const TitleBar = ({ userName, userEmail, onAgricultureNewsClick }) => {
  return (
    <div className="title-bar">
      <div className="title-left">
        <img src="logo.png" alt="Logo" className="logo" />
        <p className="welcome-message">Welcome, Debashis!</p>
      </div>
      
      <div className="title-right">
        <div className="user-info">
          
          
          <div className="user-actions">
            <button className="about-button">About</button>
            <button className="tutorial-button">Tutorial</button>
            <button className="agriculture-news-button" onClick={onAgricultureNewsClick}> Agriculture News
        </button>
          </div>
          <img src={profilePicture} alt="Profile" className="profile-picture" />
        </div>
        
      </div>
    </div>
  );
};

export default TitleBar;
