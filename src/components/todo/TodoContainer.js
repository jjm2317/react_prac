import React, { useCallback, useReducer, useRef } from 'react';
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
  const [state, dispatch] = useReducer(reducer, initialState);
  const { todos, input } = state;

  const inputRef = useRef();
  const newId = useRef(3);
  const onChange = useCallback(e => {
    const { value } = e.target;

    dispatch({
      type: 'CHANGE_INPUT',
      value
    });
    console.log(value);
  }, []);

  const onCreate = useCallback(
    e => {
      e.preventDefault();
      if (!input) {
        inputRef.current.style.border = '1px solid red';
        inputRef.current.focus();
        return;
      }
      inputRef.current.style.border = '1px solid black';
      dispatch({
        type: 'CREATE_TODO',
        todo: {
          id: newId.current++,
          content: input,
          done: false
        }
      });
      inputRef.current.focus();
    },
    [input]
  );

  return (
    <section>
      <h2>나의 할일</h2>
      <TodoForm onCreate={onCreate} onChange={onChange} input={input} inputRef={inputRef} />
      <TodoList todos={todos} />
    </section>
  );
};

export default TodoContainer;
