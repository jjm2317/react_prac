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

const contentStyle = {
  cursor: 'pointer'
};
const TodoList = ({ todos, onCheck, onDelete, input }) => {
  const menuState = input.menu;
  console.log(todos);
  return (
    <ul style={listStyle}>
      {todos
        .filter(todo =>
          menuState === 'active' ? !todo.done : menuState === 'done' ? todo.done : true
        )
        .map(todo => (
          <li key={todo.id} style={todoStyle}>
            <span style={contentStyle} onClick={e => onCheck(e, todo.id, todo.done)}>
              {todo.content}
            </span>
            <button style={{ whiteSpace: 'nowrap' }} onClick={() => onDelete(todo.id)}>
              삭제
            </button>
          </li>
        ))}
    </ul>
  );
};

export default TodoList;
