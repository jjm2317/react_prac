import React, { useEffect, useMemo, useReducer, useRef, useState } from 'react';
import UserForm from './UserForm';
import User from './User';
import UserList from './UserList';
/* 요구사항
useReducer 훅을 통한 상태 관리
1. input 입력시 상태
2. user 상태
- onCreate
- onRemove
- onToggle
3. 활성 사용자 수
*/
const initialState = {
  users: [
    {
      id: 1,
      username: 'wlaks',
      age: 20,
      active: true
    },
    {
      id: 2,
      username: 'wlaks2',
      age: 55,
      active: false
    }
  ],
  inputs: {
    username: '',
    age: ''
  }
};
function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value
        }
      };
  }
  return state;
}
const UserContainerByReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const onChange = e => {
    const { name, value } = e.target;
    dispatch({
      type: 'CHANGE_INPUT',
      ...state.inputs,
      name,
      value
    });
  };

  const onCreate = () => {};

  const onRemove = () => {};

  const onToggle = () => {};
  return (
    <section>
      <UserForm onChange={onChange} />
      <div>활성 사용자 수: {}</div>
      <UserList />
    </section>
  );
};

export default UserContainerByReducer;
