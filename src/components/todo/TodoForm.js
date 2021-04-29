import React from "react";

const CreateForm = () => {
  return (
    <form>
      <input type="text" placehoder="할 일을 입력하세요" />
      <button>생성</button>
    </form>
  );
};

const MenuForm = () => {
  return (
    <label>
      <select></select>
    </label>
  );
};

const TodoForm = () => {
  return (
    <>
      <CreateForm />
      <MenuForm />
    </>
  );
};
