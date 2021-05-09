import React from 'react';

const inputStyle = {
  outline: 'none',
  border: '1px solid black'
};
const CreateForm = ({ onCreate, onChange, inputRef, input }) => (
  <form>
    <input
      style={inputStyle}
      ref={inputRef}
      aria-label="todo"
      onChange={onChange}
      value={input.todo}
      name="todo"
      type="text"
      placehoder="할 일을 입력하세요"
    />
    <button onClick={onCreate}>생성</button>
  </form>
);

const MenuForm = ({ input, onChange }) => (
  <label>
    <select value={input.menu} name="menu" onChange={onChange}>
      <option>all</option>
      <option>active</option>
      <option>done</option>
    </select>
  </label>
);

const TodoForm = ({ onCreate, onChange, input, inputRef }) => {
  const a = 1;
  return (
    <>
      <CreateForm onCreate={onCreate} onChange={onChange} inputRef={inputRef} input={input} />
      <MenuForm input={input} onChange={onChange} />
    </>
  );
};

export default React.memo(TodoForm);
