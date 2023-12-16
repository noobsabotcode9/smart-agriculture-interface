// Upgrade.js

import React, { useState } from "react";
import "./Upgrade.css"; // Import your CSS file for styling
import Switch from "react-switch";
import GaugeChart from "react-gauge-chart";

function Upgrade1() {
  const [moisture, setMoisture] = useState(70);
  const [temperature, setTemperature] = useState(25);
  const [humidity, setHumidity] = useState(55);
  const [isIrrigationOn, setIsIrrigationOn] = useState(false);

  const toggleIrrigation = () => {
    // Toggle the irrigation state
    setIsIrrigationOn(!isIrrigationOn);
  };

  return (
    <div className="upgrade-container">
      <div className="container1">
        <span className="add-device">+</span>
        <p>Add a New Device</p>
      </div>
      <div className="container2">
        <div>
          <p style={{ marginLeft: 5, marginBottom: '3px' }}>Land 1</p>
          <p style={{ marginLeft: 5, lineHeight: '3px' }}>Crop: Cabbage</p>
        </div>
        <div className="sensor-data1">
          <div className="gauge-container1">
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
          <div className="gauge-container1">
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
          <div className="gauge-container1">
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
      </div>
      <div className="container3"><div>
          <p style={{ marginLeft: 5, marginBottom: '3px' }}>Land 2</p>
          <p style={{ marginLeft: 5, lineHeight: '3px' }}>Crop: Wheat</p>
        </div>
        <div className="sensor-data1">
          <div className="gauge-container1">
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
          <div className="gauge-container1">
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
          <div className="gauge-container1">
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
      </div>
      <div className="container4"><div>
          <p style={{ marginLeft: 5, marginBottom: '3px' }}>Land 3</p>
          <p style={{ marginLeft: 5, lineHeight: '3px' }}>Crop: Onions</p>
        </div>
        <div className="sensor-data1">
          <div className="gauge-container1">
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
          <div className="gauge-container1">
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
          <div className="gauge-container1">
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
      </div>
      <div className="container5"><div>
          <p style={{ marginLeft: 5, marginBottom: '3px' }}>Land 4</p>
          <p style={{ marginLeft: 5, lineHeight: '3px' }}>Crop: Potato</p>
        </div>
        <div className="sensor-data1">
          <div className="gauge-container1">
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
          <div className="gauge-container1">
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
          <div className="gauge-container1">
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
      </div>
      <div className="container6"><div>
          <p style={{ marginLeft: 5, marginBottom: '3px' }}>Land 5</p>
          <p style={{ marginLeft: 5, lineHeight: '3px' }}>Crop: Tomato</p>
        </div>
        <div className="sensor-data1">
          <div className="gauge-container1">
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
          <div className="gauge-container1">
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
          <div className="gauge-container1">
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
      </div>
    </div>
  );
}

export default Upgrade1;
