import React from "react";

const User = ({ user, onRemove }) => {
  const { id, nickname, email } = user;
  return (
    <>
      <dl>
        <dt>이름</dt>
        <dd>{nickname}</dd>
        <dt>이메일</dt>
        <dd>{email}</dd>
      </dl>
      <button onClick={() => onRemove(id)}>삭제</button>
    </>
  );
};

export default User;
