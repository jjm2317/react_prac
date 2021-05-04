import React from 'react';

const CreateForm = ({ onChange, input }) => (
  <form>
    <input onChange={onChange} value={input} type="text" placehoder="할 일을 입력하세요" />
    <button>생성</button>
  </form>
);

const MenuForm = () => (
  <label>
    <select></select>
  </label>
);

const TodoForm = ({ onChange, input }) => {
  const a = 1;
  return (
    <>
      <CreateForm onChange={onChange} input={input} />
      <MenuForm />
    </>
  );
};

export default TodoForm;
