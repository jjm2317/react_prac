import React from 'react';

export const initialState = {
  todos: [],
  input: {
    todo: '',
    menu: 'all'
  }
};

export function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        input: {
          ...state.input,
          [action.name]: action.value
        }
      };
    case 'CREATE_TODO':
      return {
        todos: [...state.todos, action.todo],
        input: {
          ...state.input,
          todo: ''
        }
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
        todos: state.todos.filter(todo => action.id !== todo.id)
      };
    default:
      throw new Error("There's not that action type");
  }
}
