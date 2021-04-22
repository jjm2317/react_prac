import React from "react";

const User = ({ id, nickname, email }) => {
  return (
    <>
      <dl>
        <dt>이름</dt>
        <dd>{nickname}</dd>
        <dt>이메일</dt>
        <dd>{email}</dd>
      </dl>
    </>
  );
};

export default User;
