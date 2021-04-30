import React from "react";

const UserForm = () => {
  const formStyle = {
    display: "flex",
    flex: "row wrap",
  };

  const inputDivStyle = {
    display: "flex",
    flex: "row wrap",
    width: "100px",
  };
  return (
    <form style={formStyle}>
      <div style={inputDivStyle}>
        <label for="username">이름</label>
        <input id="username" />
      </div>
      <div style={inputDivStyle}>
        <label for="age">나이</label>
        <input id="age" />
      </div>
      <button>입력</button>
    </form>
  );
};

export default UserForm;
