import React from "react";
import './DateSelector.css';

const DateSelector = () => (
  <div className="date-selector" >
    <button className="date-selector__btn">Today</button>
    <button className="date-selector__btn">Tomorrow</button>
    <button className="date-selector__btn">Day after tomorrow</button>
  </div>
);

export default DateSelector;
