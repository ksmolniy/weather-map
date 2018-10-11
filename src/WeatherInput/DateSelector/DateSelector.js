import React from "react";
import classnames from 'classnames';
import './DateSelector.css';

const DateSelector = ({ value, onChange }) => (
  <div className="date-selector" >
    <button
      className={
        classnames('date-selector__btn',
        value === 'today' && 'date-selector__btn--active')
      }
      onClick={() => onChange('today')}
    >Today</button>
    <button
      className={
        classnames('date-selector__btn',
        value === 'tomorrow' && 'date-selector__btn--active')
      }
      onClick={() => onChange('tomorrow')}
    >Tomorrow</button>
    <button
      className={
        classnames('date-selector__btn',
        value === 'dayAfter' && 'date-selector__btn--active')
      }
      onClick={() => onChange('dayAfter')}
    >Day after tomorrow</button>
  </div>
);

export default DateSelector;
