import React from 'react';

const listStyle = {
  listStyle: 'none',
  margin: 0,
  paddingLeft: 0
};

const todoStyle = {
  width: '200px',
  display: 'flex',
  flex: 'row nowrap',
  justifyContent: 'space-between'
};
const TodoList = ({ todos }) => {
  const x = 1;
  return (
    <ul style={listStyle}>
      {todos.map(todo => (
        <li key={todo.id} style={todoStyle}>
          <span>{todo.content}</span>
          <button style={{ whiteSpace: 'nowrap' }}>삭제</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
