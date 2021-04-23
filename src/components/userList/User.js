import React from "react";

const User = ({ user, onRemove, onToggle }) => {
  const { id, nickname, email, active } = user;
  return (
    <>
      <dl>
        <dt
          style={{ color: active ? "red" : "black", cursor: "pointer" }}
          onClick={() => onToggle(id)}
        >
          이름
        </dt>
        <dd>{nickname}</dd>
        <dt>이메일</dt>
        <dd>{email}</dd>
      </dl>
      <button onClick={() => onRemove(id)}>삭제</button>
    </>
  );
};

export default User;
