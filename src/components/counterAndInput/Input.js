import React, { useState } from "react";

const Input = () => {
  const [inputText, setInputText] = useState("");
  const [resultText, setResultText] = useState("");
  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    setResultText(inputText);
  };

  const onClick = (e) => {
    e.preventDefault();
    setInputText("");
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={inputText} />
        <button type="submit">입력</button>
        <button onClick={onClick}>초기화</button>
      </form>
      <p>값 : {resultText}</p>
    </>
  );
};

export default Input;
