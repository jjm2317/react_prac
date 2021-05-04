import React from 'react';

const CreateForm = () => (
  <form>
    <input type="text" placehoder="할 일을 입력하세요" />
    <button>생성</button>
  </form>
);

const MenuForm = () => (
  <label>
    <select></select>
  </label>
);

const TodoForm = () => {
  const a = 1;
  return (
    <>
      <CreateForm />
      <MenuForm />
    </>
  );
};

export default TodoForm;
