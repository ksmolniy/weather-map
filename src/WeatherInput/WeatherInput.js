import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { weatherFetch } from '../store/weather';
import DateSelector from './DateSelector/DateSelector';
import WeatherList from './WeatherList/WeatherList';
import './WeatherInput.css';

const filterWeatherByDay = (weather, str) => {
  const addDays = str === 'today' ? 0 : str === 'tomorrow' ? 1 : 2;
  const currDate = new Date();
  const currDay = currDate.getDate();
  const compiledDate = (new Date(currDate.setDate(currDay + addDays))).getDate();

  return weather.filter(item => new Date(item.dateTime).getDate() === compiledDate);
}

class WeatherInput extends PureComponent {

  state = {
    dateFilter: 'today',
  }

  dateFilterChanged = (value) => {
    this.setState({ dateFilter: value });
  }

  render() {
    const { weather, fetchWeather, loading, error } = this.props;
    const { dateFilter } = this.state;

    const filteredWeather = filterWeatherByDay(weather, dateFilter);

    return (
      <div className="weather-input">
        <input className="weather-input__input" onChange={fetchWeather} />
        <div className="weather-panel">
          <DateSelector onChange={this.dateFilterChanged} value={dateFilter} />
          { loading && 'Loading...' }
          { error && 'Request failed' }
          { weather.length === 0 && !loading && !error && 'Type to start search' }
          { weather.length !== 0 && <WeatherList weather={filteredWeather} /> }
        </div>
      </div>
    );
  }
} 


const mapStateToProps = ({ weather: { list, loading, error } }) => ({
  weather: list,
  loading,
  error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchWeather: (e) => dispatch(weatherFetch(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherInput);
