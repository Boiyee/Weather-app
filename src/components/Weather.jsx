import React, { useEffect, useRef ,useState } from 'react'
import './Weather.css'
import search_icon from '../assets/icon-search.svg'
import sunny_icon from '../assets/icon-sunny.webp'
import storm_icon from '../assets/icon-storm.webp'
import snow_icon from '../assets/icon-snow.webp'
import retry_icon from '../assets/icon-retry.svg'
import rain_icon from '../assets/icon-rain.webp'
import clear_icon from '../assets/icon-fog.webp'
import load_icon from '../assets/icon-loading.svg'
import overcast_icon from '../assets/icon-overcast.webp'
import cloudy_icon from '../assets/icon-partly-cloudy.webp'

const Weather = () => {

  const inputRef = useRef();
  const [weatherData, setWeatherData] = useState(null);

  const allIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloudy_icon,
    "02n": cloudy_icon,
    "03d": overcast_icon,
    "03n": overcast_icon,
    "04n": storm_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "04d": snow_icon
  };

  const search = async (city) => {
    if (city === "") {
      alert("Please enter a city name");
      return;
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      console.log(data);

      const icon = allIcons[data.weather?.[0]?.icon] || clear_icon;
      setWeatherData({
        humidity: data.main?.humidity || 0,
        windSpeed: data.wind?.speed || 0,
        temperature: Math.floor(data.main?.temp || 0),
        location: data.name || "Unknown",
        icon: icon,
      });
    } catch (error) {
      setWeatherData(false);
      console.error("Failed to fetch weather data:", error);
    }
  };

  useEffect(() => {
    search("Akure");
  }, []);

  return (
    <div className='weather'>
      <div className="search-bar">
        <input ref={inputRef} type="text" placeholder='Search' />
        <img src={search_icon} alt="Search Icon" onClick={()=> search(inputRef.current.value)} />
      </div>
      {weatherData ? (
        <>
          <img src={weatherData.icon} alt="Weather Icon" className='weather-icon' />
          <p className='temperature'>{weatherData.temperature}°C</p>
          <p className='location'>{weatherData.location}</p>
          <div className="weather-data">
            <div className="col">
              <img src={cloudy_icon} alt="Cloudy Icon" />
              <div>
                <p>{weatherData.humidity} %</p>
                <span>Humidity</span>
              </div>
            </div>
            <div className="col">
              <img src={snow_icon} alt="" />
              <div>
                <p>{weatherData.windSpeed} Km/hr</p>
                <span>Wind Speed</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  )
}

export default Weather
