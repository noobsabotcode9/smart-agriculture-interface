// ForecastContainer.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ForecastContainer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faCloud, faCloudSun, faCloudRain, faSnowflake } from '@fortawesome/free-solid-svg-icons';

const ForecastContainer = ({ city }) => {
  const [hourlyForecast, setHourlyForecast] = useState(null);
  const [dailyForecast, setDailyForecast] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchForecastData = async () => {
      try {
        const response = await axios.get(
          `http://api.weatherstack.com/forecast?access_key=f52eb042a2f8bdb43d1898b731fd9ec8&query=${city}&forecast_days=5`
        );

        setHourlyForecast(response.data.forecast[0].hourly);
        setDailyForecast(response.data.forecast[0].daily);
      } catch (error) {
        setError('Forecast data not available. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchForecastData();
  }, [city]);

  return (
    <div className="forecast-container">
      <h2>Hourly Forecast (Next 5 Days)</h2>
      {loading && <p>Loading hourly forecast...</p>}
      {error && <p>Error: {error}</p>}
      {hourlyForecast && (
        <div className="forecast-list">
          {hourlyForecast.map((forecast) => (
            <div key={forecast.time} className="forecast-item">
              <p>{forecast.time}</p>
              <p className="temperature">{forecast.temperature}°C</p>
              <p className="weather-description">{forecast.weather_descriptions[0]}</p>
            </div>
          ))}
        </div>
      )}

      <h2>Daily Forecast (Next 5 Days)</h2>
      {loading && <p>Loading daily forecast...</p>}
      {error && <p>Error: {error}</p>}
      {dailyForecast && (
        <div className="forecast-list">
          {dailyForecast.map((forecast) => (
            <div key={forecast.date} className="forecast-item">
              <p>{forecast.date}</p>
              <p className="temperature">{forecast.temperature}°C</p>
              <p className="weather-description">{forecast.weather_descriptions[0]}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


const getWeatherIcon = (weatherCode) => {
  // Map OpenWeatherMap weather codes to Font Awesome icons
  if (weatherCode >= 200 && weatherCode < 300) {
    return faCloudRain; // Thunderstorm
  } else if (weatherCode >= 300 && weatherCode < 500) {
    return faCloudRain; // Drizzle
  } else if (weatherCode >= 500 && weatherCode < 600) {
    return faCloudRain; // Rain
  } else if (weatherCode >= 600 && weatherCode < 700) {
    return faSnowflake; // Snow
  } else if (weatherCode >= 700 && weatherCode < 800) {
    return faCloud; // Atmosphere
  } else if (weatherCode === 800) {
    return faSun; // Clear
  } else if (weatherCode > 800) {
    return faCloudSun; // Clouds
  }
};

export default ForecastContainer;
