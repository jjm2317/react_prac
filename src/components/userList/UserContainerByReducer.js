import React, { useEffect, useMemo, useCallback, useReducer, useRef, useState } from 'react';
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
    case 'CREATE_USER':
      return {
        ...state,
        users: [...state.users, action.user]
      };
    case 'DELETE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id)
      };
    case 'TOGGLE_USER':
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.id ? { ...user, active: !user.active } : user
        )
      };
  }
  return state;
}
const UserContainerByReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { inputs, users } = state;
  console.log(state);
  const newId = useRef(3);
  const onChange = useCallback(e => {
    const { name, value } = e.target;
    dispatch({
      type: 'CHANGE_INPUT',
      ...state.inputs,
      name,
      value
    });
  });

  const onCreate = useCallback(e => {
    e.preventDefault();
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: newId.current++,
        username: inputs.username,
        age: inputs.age
      }
    });
  });

  const onRemove = useCallback(id => {
    dispatch({
      type: 'DELETE_USER',
      id
    });
  });

  const onToggle = useCallback(id => {
    dispatch({
      type: 'TOGGLE_USER',
      id
    });
  });
  return (
    <section>
      <UserForm onChange={onChange} onCreate={onCreate} />
      <div>활성 사용자 수: {}</div>
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    </section>
  );
};

export default UserContainerByReducer;
