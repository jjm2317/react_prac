import React, { useState, useRef } from 'react';

const Input = () => {
  const defaultInput = useRef();
  const additionalInput = useRef();
  const [inputValue, setInputValue] = useState({
    defaultValue: '',
    additionalValue: ''
  });

  const { defaultValue, additionalValue } = inputValue;
  const [resultText, setResultText] = useState('');
  const onChange = e => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    setResultText(`${inputValue.defaultValue} ${inputValue.additionalValue}`);
    setInputValue({
      [defaultInput.current.name]: '',
      [additionalInput.current.name]: ''
    });
    defaultInput.current.focus();
  };

  const onReset = e => {
    e.preventDefault();
    setInputValue({
      [defaultInput.current.name]: '',
      [additionalInput.current.name]: ''
    });

    defaultInput.current.focus();
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input name="defaultValue" onChange={onChange} value={defaultValue} ref={defaultInput} />
        <input
          name="additionalValue"
          placeholder="추가값"
          onChange={onChange}
          value={additionalValue}
          ref={additionalInput}
        />
        <button type="submit">입력</button>
        <button onClick={onReset}>초기화</button>
      </form>
      <p>값 : {resultText}</p>
    </>
  );
};

export default Input;
