import React, {
  useEffect,
  createContext,
  useMemo,
  useCallback,
  useReducer,
  useRef,
  useState
} from 'react';
import produce from 'immer';
import UserForm from './UserForm';
// import User from './User';
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
      return produce(state, draft => {
        draft.inputs[action.name] = action.value;
      });

    case 'CREATE_USER':
      return produce(state, draft => {
        draft.inputs = {
          username: '',
          age: ''
        };
        draft.users.push(action.user);
      });

    case 'DELETE_USER':
      return produce(state, draft => {
        const idx = draft.users.findIndex(user => user.id === action.id);
        draft.users.splice(idx, 1);
      });
    case 'TOGGLE_USER':
      return produce(state, draft => {
        const user = draft.users.find(user => user.id === action.id);
        user.active = !user.active;
      });
  }
  return state;
}
const countActiveUsers = users => users.filter(user => user.active).length;

export const UserDispatch = createContext(null);

const UserContainerByReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { inputs, users } = state;
  const counter = useMemo(() => countActiveUsers(users), [users]);
  return (
    <UserDispatch.Provider value={dispatch}>
      <section>
        <UserForm inputs={inputs} />
        <div>활성 사용자 수: {counter}</div>
        <UserList users={users} />
      </section>
    </UserDispatch.Provider>
  );
};

export default React.memo(UserContainerByReducer);
