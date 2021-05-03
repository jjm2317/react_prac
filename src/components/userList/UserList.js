import React from 'react';

const ulStyle = {
  margin: 0,
  listStyle: 'none'
};
const liStyle = {
  display: 'flex',
  width: 300,
  flex: 'row nowrap',
  justifyContent: 'space-around'
};

const UserList = ({ users, onRemove }) => {
  console.log(ulStyle);
  return (
    <ul style={ulStyle}>
      {users.map(user => (
        <li style={liStyle} key={user.id}>
          <span>
            {user.username} {user.age}
          </span>
          <button id={user.id} onClick={onRemove}>
            삭제
          </button>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
