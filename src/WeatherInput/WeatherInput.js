import React from 'react';
import { connect } from 'react-redux';
import { weatherFetch } from '../store/weather';
import DateSelector from './DateSelector/DateSelector';
import './WeatherInput.css';

const WeatherInput = ({ weather, fetchWeather }) => (
  <div className="weather-input">
    <input className="weather-input__input" onChange={fetchWeather} />
    <div className="weather-list">
      <DateSelector />
      {weather.map((item) => <div key={item.dt}>
        { item.weather[0].main }
      </div>)}
    </div>
  </div>
)

const mapStateToProps = ({ weather }) => ({ weather });

const mapDispatchToProps = (dispatch) => ({
  fetchWeather: (e) => dispatch(weatherFetch(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherInput);
