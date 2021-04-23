import React, { useRef, useState } from "react";
import UserForm from "./UserForm";
import User from "./User";

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
