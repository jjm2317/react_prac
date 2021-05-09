import React, { useCallback, useEffect, useReducer, useRef } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { initialState, reducer } from './TodoReducer';
// 요구사항

/*
1. 할일 입력
2. 생성 
3. 삭제
4. 수정
5. 완료 미완료 전체 구분하여 출력
6. 빈값 생성 제어하기
7. 렌더링 최적화
8. usereducer로 리팩토링
*/

const TodoContainer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { todos, input } = state;

  const inputRef = useRef();
  const newId = useRef(3);
  const onChange = useCallback(e => {
    const { name, value } = e.target;

    dispatch({
      type: 'CHANGE_INPUT',
      name,
      value
    });
  }, []);

  const onCreate = useCallback(
    e => {
      e.preventDefault();
      if (!input.todo) {
        inputRef.current.style.border = '1px solid red';
        inputRef.current.focus();
        return;
      }
      inputRef.current.style.border = '1px solid black';
      dispatch({
        type: 'CREATE_TODO',
        todo: {
          id: newId.current++,
          content: input.todo,
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
    // 리렌더링은 현재 함수 호출이 마치고 나서 일어나므로 다음 done은 현재 상태를 나타낸다
    e.target.style.textDecoration = done ? 'none' : 'line-through';
  }, []);

  const onDelete = useCallback(id => {
    console.log(id);
    dispatch({
      type: 'DELETE_TODO',
      id
    });
  }, []);

  return (
    <section>
      <h2>나의 할일</h2>
      <TodoForm onCreate={onCreate} onChange={onChange} input={input} inputRef={inputRef} />
      <TodoList todos={todos} onCheck={onCheck} onDelete={onDelete} input={input} />
    </section>
  );
};

export default TodoContainer;
