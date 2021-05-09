import React from 'react';

const UserForm = ({ onChange, onCreate, inputs }) => {
  const formStyle = {
    display: 'flex',
    flex: 'row wrap'
  };

  const inputDivStyle = {
    display: 'flex',
    flex: 'row wrap',
    justifyContent: 'center',
    width: '200px'
  };

  const inputStyle = {
    width: '80px'
  };
  return (
    <form style={formStyle}>
      <div style={inputDivStyle}>
        <label htmlFor="username">이름</label>
        <input
          style={inputStyle}
          id="username"
          name="username"
          value={inputs.username}
          onChange={onChange}
        />
      </div>

      <div style={inputDivStyle}>
        <label htmlFor="age">나이</label>
        <input style={inputStyle} id="age" name="age" value={inputs.age} onChange={onChange} />
      </div>

      <button onClick={onCreate}>입력</button>
    </form>
  );
};

export default UserForm;
