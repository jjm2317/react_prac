import React from 'react';

const ulStyle = {
  margin: 0,
  listStyle: 'none'
};

const UserList = ({ users }) => {
  console.log(ulStyle);
  return (
    <ul style={ulStyle}>
      {users.map(user => (
        <li key={user.id}>
          {user.username} {user.age}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
