import React, { useContext } from 'react';
import User from './User';
// import { UserDispatch } from './UserContainerByReducer';

const ulStyle = {
  margin: 0,
  listStyle: 'none'
};

const UserList = ({ users }) => {
  console.log(ulStyle);

  return (
    <ul style={ulStyle}>
      {users.map(user => (
        <User key={user.id} user={user} />
      ))}
    </ul>
  );
};

export default UserList;
