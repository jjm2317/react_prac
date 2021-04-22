import React, { useRef, useState } from "react";
import User from "./User";
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
const UserContainer = () => {
  let [users, setUsers] = useState([
    {
      id: 1,
      nickname: "wlaks",
      email: "wlaks2317@gmail.com",
    },

    {
      id: 2,
      nickname: "seonghyun",
      email: "lee@naver.com",
    },
  ]);

  const nextId = useRef(3);
  const nicknameRef = useRef();
  const emailRef = useRef();
  const [inputValue, setInputValue] = useState({
    nickname: "",
    email: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setUsers([
      ...users,
      {
        id: nextId.current,
        ...inputValue,
      },
    ]);

    nextId.current += 1;

    setInputValue({
      nickname: "",
      email: "",
    });
    console.log(users);
  };
  return (
    <div>
      <UserForm
        onChange={onChange}
        onSubmit={onSubmit}
        nicknameRef={nicknameRef}
        emailRef={emailRef}
        inputValue={inputValue}
      />
      <section>
        {users.map(({ id, nickname, email }) => (
          <User key={id} nickname={nickname} email={email} />
        ))}
      </section>
    </div>
  );
};

export default UserContainer;
