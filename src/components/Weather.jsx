import React from 'react'
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
  return (
    <div className='weather'>
      <div className="search-bar">
        <input type="text" placeholder='Search' />
        <img src={search_icon} alt="" />
      </div>
      <img src={sunny_icon} alt="" className='weather-icon' />
      <p className='temperature'>298K</p>
      <p className='location'>Mumbai</p>
      <div className="weather-data">
        <div className="col">
          <img src={cloudy_icon} alt="" />
          <div>
            <p>91 %</p>
            <span>Cloudy</span>
          </div>
        </div>
        <div className="col">
          <img src={snow_icon} alt="" />
          <div>
            <p>32.4</p>
            <span>Snowy</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weather
