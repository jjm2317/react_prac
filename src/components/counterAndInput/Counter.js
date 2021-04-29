import React, { useReducer, useState } from "react";

const initialState = 0;

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return ++state;
    case "DECREMENT":
      return --state;
  }
}

const Counter = () => {
  const [num, dispatch] = useReducer(reducer, initialState);

  const increase = () => {
    dispatch({
      type: "INCREMENT",
    });
  };

  const decrease = () =>
    dispatch({
      type: "DECREMENT",
    });

  // const [num, setNum] = useState(0);

  // const increase = () => {
  //   setNum((v) => ++v);
  // };
  // const decrease = () => {
  //   setNum((v) => --v);
  // };

  // let num = 0;
  // const increase = () => {
  //   ++num;
  //   document.querySelector("h1").innerHTML = `값 : ${num}`;
  // };
  // const decrease = () => {
  //   --num;
  // };

  return (
    <div>
      <h1>값 : {num}</h1>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
    </div>
  );
};

export default Counter;
