import React, { useCallback, useEffect, useReducer, useRef } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

// 요구사항

/*
1. 할일 입력
2. 생성 
3. 삭제
4. 수정
5. 완료 미완료 전체 구분하여 출력
6. 빈값 생성 제어하기
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

  const onCheck = useCallback((e, id, done) => {
    dispatch({
      type: 'CHECK_TODO',
      id
    });
    console.log(done);
    // 리렌더링은 현재 함수 호출이 마치고 나서 일어나므로 다음 done은 현재 상태를 나타낸다
    e.target.style.textDecoration = done ? 'none' : 'line-through';
  }, []);

  return (
    <section>
      <h2>나의 할일</h2>
      <TodoForm onCreate={onCreate} onChange={onChange} input={input} inputRef={inputRef} />
      <TodoList todos={todos} onCheck={onCheck} />
    </section>
  );
};

export default TodoContainer;
