import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const MwContainer = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.counter);
  console.log(state);
  return <div></div>;
};

export default MwContainer;
