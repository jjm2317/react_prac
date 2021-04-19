import React, { useState } from "react";

const Input = () => {
  const [inputValue, setInputValue] = useState({
    defaultValue: "",
    additionalValue: "",
  });

  const { defaultValue, additionalValue } = inputValue;
  const [resultText, setResultText] = useState("");
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setResultText(`${inputValue.defaultValue} ${inputValue.additionalValue}`);
  };

  const onClick = (e) => {
    e.preventDefault();
    // setInputText("")
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input name="defaultValue" onChange={onChange} value={defaultValue} />
        <input
          name="additionalValue"
          placeholder="추가값"
          onChange={onChange}
          value={additionalValue}
        />
        <button type="submit">입력</button>
        <button onClick={onClick}>초기화</button>
      </form>
      <p>값 : {resultText}</p>
    </>
  );
};

export default Input;
