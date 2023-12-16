// Dashboard.js

import React, { useState, useEffect } from "react";
import "./dashboard.css";
import Switch from "react-switch";
import GaugeChart from "react-gauge-chart";
import firebase from "firebase/compat/app"; // Import Firebase
import "firebase/compat/database"; // Import the Firebase Realtime Database
import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import 'chartjs-plugin-datalabels'; 
import { useRef } from 'react';
// Initialize Firebase with your Firebase configuration
const firebaseConfig = {
  apiKey: "YAIzaSyCbaSFsrh5LLXOwwbdq7JNp2Yth-ROd3i8",
  authDomain: "smart-agricultural-syste-8f842.firebaseapp.com",
  databaseURL: "https://smart-agricultural-syste-8f842-default-rtdb.firebaseio.com",
  projectId: "smart-agricultural-syste-8f842",
  storageBucket: "mart-agricultural-syste-8f842.appspot.com",
  messagingSenderId: "97029672685",
  appId: "1:97029672685:web:5444a340fd5848479d46e4"
};

firebase.initializeApp(firebaseConfig);

function Dashboard() {
  const [moisture, setMoisture] = useState(0);
  const [temperature, setTemperature] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [isIrrigationOn, setIsIrrigationOn] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const revenueChartRef = useRef(null);
  const studentsChartRef = useRef(null);
  const [selectedDurationContainer3, setSelectedDurationContainer3] = useState('Last 3 Months');
  const [selectedTimeRange, setSelectedTimeRange] = useState("last3");

  useEffect(() => {
    // Set up Firebase real-time data listeners
    const moistureRef = firebase.database().ref("sensorData/moisture");
    const temperatureRef = firebase.database().ref("sensorData/temperature");
    const humidityRef = firebase.database().ref("sensorData/humidity");
    const irrigationRef = firebase.database().ref("irrigation");

    moistureRef.on("value", (snapshot) => {
      const moistureValue = snapshot.val();
      setMoisture(moistureValue || 0);
    });

    temperatureRef.on("value", (snapshot) => {
      const temperatureValue = snapshot.val();
      setTemperature(temperatureValue || 0);
    });

    humidityRef.on("value", (snapshot) => {
      const humidityValue = snapshot.val();
      setHumidity(humidityValue || 0);
    });

    irrigationRef.on("value", (snapshot) => {
      const irrigationValue = snapshot.val();
      setIsIrrigationOn(!!irrigationValue);
    });

    return () => {
      // Unsubscribe from Firebase real-time data listeners when the component unmounts
      moistureRef.off();
      temperatureRef.off();
      humidityRef.off();
      irrigationRef.off();
    };
  }, []);

  const toggleIrrigation = () => {
    // Toggle the irrigation state in the Firebase Realtime Database
    const newIrrigationState = !isIrrigationOn;
    firebase.database().ref("irrigation").set(newIrrigationState);
  };
 
  useEffect(() => {
    const createRevenueAndStudentsCharts = () => {
      const revenueCtx = document.getElementById('revenueChart');
      const studentsCtx = document.getElementById('studentsChart');
  
      // Your logic to fetch data for revenue and students charts based on selected durations
      let revenueData = [];
      let studentsData = [];
       let labels = [];
      switch (selectedTimeRange) {
        case 'last3':
          revenueData = [24, 27, 25];
          studentsData = [ 60,45,55 ];
          labels = ['1st hour', '2nd hour', '3rd hour'];
          
          break;
        case 'last6':
          revenueData = [24, 27, 25, 28, 25, 22];
          studentsData = [ 60,45,55, 56, 57, 63 ];
          labels = ['1st hour', '2nd hour', '3rd hour', '4th hour', '5th hour', '6th hour'];
          break;
        
        default:
          // Default data for the last 3 months
          revenueData = [24, 27, 25];
          studentsData = [ 60,45,55, ];
          labels = ['1st hour', '2nd hour', '3rd hour'];
      }
      if (revenueChartRef.current) {
        revenueChartRef.current.destroy();
      }
      if (studentsChartRef.current) {
        studentsChartRef.current.destroy();
      }
  
      // Create new revenue chart
      revenueChartRef.current = new Chart(revenueCtx, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Temperature',
              data: revenueData,
              backgroundColor: 'rgba(54, 73, 83, 0.8)', // Customize color
            },
          ],
        },
        options: {
          
          plugins: {
            legend: {
              display: false,
              position: 'bottom', // Display legend at the bottom
            },
          },
        },
      });
  
      // Create new students chart
      studentsChartRef.current = new Chart(studentsCtx, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Active Students',
              data: studentsData,
              backgroundColor: 'rgb(110, 115, 129)', // Customize color
            },
          ],
        },
        options: {
          
          plugins: {
            legend: {
              display: false,
              position: 'bottom', // Display legend at the bottom
            },
          },
        },
      });
    };
  
    createRevenueAndStudentsCharts();
  
    // Cleanup function to destroy the charts when the component unmounts
    return () => {
      if (revenueChartRef.current) {
        revenueChartRef.current.destroy();
      }
      if (studentsChartRef.current) {
        studentsChartRef.current.destroy();
      }
    };
  }, [selectedTimeRange]);
  
  return (
    
    <div>
      
    <div className="App">
     
     
      <header className="App-header">
      
        
        <div className="sensor-data">
          <div className="gauge-container">
            <h2>Moisture</h2>
            <GaugeChart
              id="moisture-gauge"
              nrOfLevels={10}
              colors={["#FF5F6D", "#FFC371"]}
              arcPadding={0.02}
              cornerRadius={10}
              percent={moisture / 100}
              textColor={"#313131"}
            />
          </div>
          <div className="gauge-container">
            <h2>Temperature</h2>
            <GaugeChart
              id="temperature-gauge"
              nrOfLevels={10}
              colors={["#C9FFA2", "#4CAF50"]}
              arcPadding={0.02}
              cornerRadius={10}
              percent={temperature / 100}
              textColor={"#313131"}
            />
          </div>
          <div className="gauge-container">
            <h2>Humidity</h2>
            <GaugeChart
              id="humidity-gauge"
              nrOfLevels={10}
              colors={["#4DB6AC", "#26A69A"]}
              arcPadding={0.02}
              cornerRadius={10}
              percent={humidity / 100}
              textColor={"#313131"}
            />
          </div>
        </div>
        <div className="irrigation-switch">
          <label>
            Water Pump:{" "}
            <Switch
              onChange={toggleIrrigation}
              checked={isIrrigationOn}
              className="react-switch"
            />
          </label>
        </div>
        
      </header>
    </div>
    <div><h3>Temperature & Humidity data </h3></div>
    <div className="additional-container1">
          <div className="dropdown-menu">
        <label htmlFor="timeRange">Select Time Range:</label>
        <select
            id="timeRange"
            value={selectedTimeRange}
            onChange={(e) => setSelectedTimeRange(e.target.value)}
          >
            <option value="last3">Last 3 hours</option>
            <option value="last6">Last 6 hours</option>
            
          </select>
    </div></div>
    <div className="chart">
    
    <div className="additional-container">
          {/* Add your content for the additional container here */}
          
    <div className="chartContainer">
        
            <canvas id="revenueChart" width="200" height="200"></canvas>
          </div>
          {/* Add more components or content as needed */}
        </div>
        <div className="additional-container">
          {/* Add your content for the additional container here */}
          
    <div className="chartContainer">
            <canvas id="studentsChart" width="200" height="200"></canvas>
          </div>
          {/* Add more components or content as needed */}
        </div>
        </div>
    </div>
     
  );
};


export default Dashboard;
