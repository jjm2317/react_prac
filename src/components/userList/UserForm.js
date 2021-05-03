import React from 'react';

const UserForm = ({ onChange, onCreate }) => {
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
        <label for="username">이름</label>
        <input style={inputStyle} id="username" name="username" onChange={onChange} />
      </div>

      <div style={inputDivStyle}>
        <label for="age">나이</label>
        <input style={inputStyle} id="age" name="age" onChange={onChange} />
      </div>

      <button onClick={onCreate}>입력</button>
    </form>
  );
};

export default UserForm;
