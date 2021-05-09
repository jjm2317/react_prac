import React, { useContext, useRef } from 'react';
import { UserDispatch } from './UserContainerByReducer';

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
const UserForm = ({ inputs }) => {
  const dispatch = useContext(UserDispatch);
  const newId = useRef(3);
  return (
    <form style={formStyle}>
      <div style={inputDivStyle}>
        <label htmlFor="username">이름</label>
        <input
          style={inputStyle}
          id="username"
          name="username"
          value={inputs.username}
          onChange={e => {
            const { name, value } = e.target;
            dispatch({
              type: 'CHANGE_INPUT',
              name,
              value
            });
          }}
        />
      </div>

      <div style={inputDivStyle}>
        <label htmlFor="age">나이</label>
        <input
          style={inputStyle}
          id="age"
          name="age"
          value={inputs.age}
          onChange={e => {
            const { name, value } = e.target;
            dispatch({
              type: 'CHANGE_INPUT',
              name,
              value
            });
          }}
        />
      </div>

      <button
        onClick={e => {
          e.preventDefault();

          dispatch({
            type: 'CREATE_USER',
            user: {
              id: newId.current++,
              username: inputs.username,
              age: inputs.age
            }
          });
        }}
      >
        입력
      </button>
    </form>
  );
};

export default UserForm;
