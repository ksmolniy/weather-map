import React, { Component } from 'react';

import Map from './Map/Map';
import WeatherInput from './WeatherInput/WeatherInput';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <WeatherInput />
        <Map />
      </div>
    );
  }
}

export default App;
