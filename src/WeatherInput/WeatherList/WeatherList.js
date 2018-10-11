import React from 'react';
import './WeatherList.css';

const WeatherList = ({ weather }) => (
  <div className="weather-list">
    {weather.map(item => (
      <div className="weather-list__item weather-box" key={item.dt}>
        <div className="weather-box__date">{item.dateTime.split(' ')[1]}</div>
        <div className="weather-box__temp">{item.temp.toFixed(2)} ℃</div>
        <div className="weather-box__weather">{item.weather}</div>
      </div>
    ))}
  </div>
)

export default WeatherList;
