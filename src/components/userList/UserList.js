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

const UserList = ({ users, onRemove, onToggle }) => {
  console.log(ulStyle);
  return (
    <ul style={ulStyle}>
      {users.map(user => (
        <li style={liStyle} key={user.id}>
          <span
            onClick={() => onToggle(user.id)}
            style={{
              color: user.active ? 'green' : 'black',
              cursor: 'pointer'
            }}
          >
            {user.username} {user.age}
          </span>
          <button onClick={() => onRemove(user.id)}>삭제</button>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
