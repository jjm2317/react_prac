import React, { useState } from "react";

const Counter = () => {
  const [num, setNum] = useState(0);

  const increase = () => {
    setNum((v) => ++v);
  };
  const decrease = () => {
    setNum((v) => --v);
  };

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
