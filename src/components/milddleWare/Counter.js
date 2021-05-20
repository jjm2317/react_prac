import React from 'react';
import { useSelector } from 'react-redux';

const Counter = ({ number, onIncrease, onDecrease }) => (
  <div>
    <h1>{number}</h1>
    <button onClick={onIncrease}>+</button>
    <button onClick={onDecrease}>-</button>
  </div>
);

export default Counter;
