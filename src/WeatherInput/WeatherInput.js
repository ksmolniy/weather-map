import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { weatherFetch } from '../store/weather';
import DateSelector from './DateSelector/DateSelector';
import WeatherList from './WeatherList/WeatherList';
import './WeatherInput.css';

const getTimestampRange = (str) => {
  const multiplier = str === 'today' ? 1 : str === 'tommorow' ? 2 : 3;
  const startDate = (new Date()).setHours(24*(multiplier - 1), 0, 0, 0);
  const endDate = (new Date()).setHours(24 * multiplier, 0, 0, 0);

  return [startDate, endDate];
}

class WeatherInput extends PureComponent {

  state = {
    dateFilter: 'today',
  }

  dateFilterChanged = (value) => {
    this.setState({ dateFilter: value });
  }

  render() {
    const { weather, fetchWeather } = this.props;
    const { dateFilter } = this.state;

    const [startDate, endDate] = getTimestampRange(dateFilter);

    const filteredWeather = weather.filter(item => item.dt <= endDate && item.dt >= startDate);

    return (
      <div className="weather-input">
        <input className="weather-input__input" onChange={fetchWeather} />
        <div className="weather-panel">
          <DateSelector onChange={this.dateFilterChanged} value={dateFilter} />
          <WeatherList weather={filteredWeather} />
        </div>
      </div>
    );
  }
} 


const mapStateToProps = ({ weather }) => ({ weather });

const mapDispatchToProps = (dispatch) => ({
  fetchWeather: (e) => dispatch(weatherFetch(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherInput);
