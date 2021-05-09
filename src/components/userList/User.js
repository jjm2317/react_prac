import React, { useContext } from 'react';
import { UserDispatch } from './UserContainerByReducer';

const liStyle = {
  display: 'flex',
  width: 300,
  flex: 'row nowrap',
  justifyContent: 'space-around'
};

const User = ({ user }) => {
  // useContext : 컴포넌트 안에서 컨텍스트 값을 조회하는 훅
  const dispatch = useContext(UserDispatch);
  return (
    <li style={liStyle} key={user.id}>
      <span
        onClick={() =>
          dispatch({
            type: 'TOGGLE_USER',
            id: user.id
          })
        }
        style={{
          color: user.active ? 'green' : 'black',
          cursor: 'pointer'
        }}
      >
        {user.username} {user.age}
      </span>
      <button
        onClick={() =>
          dispatch({
            type: 'DELETE_USER',
            id: user.id
          })
        }
      >
        삭제
      </button>
    </li>
  );
};

export default User;
