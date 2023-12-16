// Weather.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Weather.css';
import ForecastContainer from './ForecastContainer';
import { WiDaySunny, WiCloudy, WiRain, WiSnow, WiThunderstorm } from 'react-icons/wi';
const Weather = ({ onClose }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [citySearch, setCitySearch] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=f7224750da3e02f56101873131bf0af5`
      );

      setWeatherData(response.data);
    } catch (error) {
      setError('');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // For demonstration purposes, we'll show weather data for a default city initially
    handleSearch();
  }, []);

  return (
    <div className="weather-container">
      <h2>Weather Forecast</h2>

      <div className="search-container">
        <input
          type="text"
          placeholder="Enter city"
          value={citySearch}
          onChange={(e) => setCitySearch(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {weatherData && (
        <div className="weather-info">
           {renderWeatherIcon(weatherData.weather[0].main)}
          <p>City: {weatherData.name}</p>
          <p>Temperature: {(weatherData.main.temp - 273.15).toFixed(2)}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          {/* Add more weather information here based on the actual API response */}
         
          {weatherData && <ForecastContainer city={weatherData.name} />}
        </div>
      )}
    </div>
  );
};

export default Weather;
const renderWeatherIcon = (weatherCondition) => {
  switch (weatherCondition) {
    case 'Clear':
      return <WiDaySunny className="weather-icon"/>;
    case 'Clouds':
      return <WiCloudy className="weather-icon"/>;
    case 'Rain':
      return <WiRain className="weather-icon"/>;
    case 'Snow':
      return <WiSnow className="weather-icon"/>;
    case 'Thunderstorm':
      return <WiThunderstorm className="weather-icon"/>;
    
    default:
      return null;
  }
};