import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

// 요구사항

/*
1. 할일 입력
2. 생성 
3. 삭제
4. 수정
*/

const initialState = {
  todos: [
    {
      id: 1,
      content: 'React',
      done: false
    },
    {
      id: 2,
      content: 'algorithm',
      done: false
    }
  ],
  input: ''
};

function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        input: action.value
      };
    case 'CREATE_TODO':
      return {
        todos: [...state.todos, action.todo],
        input: ''
      };
    case 'CHECK_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          action.id === todo.id ? { ...todo, done: !todo.done } : todo
        )
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => !action.id === todo.id)
      };
    default:
      throw new Error("There's not that action type");
  }
}
const TodoContainer = () => {
  const x = 1;
  return (
    <section>
      <h2>나의 할일</h2>
      <TodoForm />
      <TodoList />
    </section>
  );
};

export default TodoContainer;
