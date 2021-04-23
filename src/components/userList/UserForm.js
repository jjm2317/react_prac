import React from "react";

const UserForm = ({
  onChange,
  onSubmit,
  nicknameRef,
  emailRef,
  inputValue,
}) => {
  const { nickname, email } = inputValue;
  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder="닉네임"
        name="nickname"
        onChange={onChange}
        ref={nicknameRef}
        value={nickname}
      />
      <input
        placeholder="이메일"
        name="email"
        onChange={onChange}
        ref={emailRef}
        value={email}
      />
      <button type="submit">등록</button>
    </form>
  );
};

export default UserForm;
