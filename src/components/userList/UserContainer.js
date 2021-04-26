import React, { useEffect, useMemo, useRef, useState } from "react";
import UserForm from "./UserForm";
import User from "./User";

const countActiveUsers = (users) => {
  console.log("do counting");
  return users.filter(({ active }) => active).length;
};

const UserContainer = () => {
  let [users, setUsers] = useState([
    {
      id: 1,
      nickname: "wlaks",
      email: "wlaks2317@gmail.com",
      active: true,
    },

    {
      id: 2,
      nickname: "seonghyun",
      email: "lee@naver.com",
      active: false,
    },
  ]);

  const [inputValue, setInputValue] = useState({
    nickname: "",
    email: "",
  });
  const nextId = useRef(3);
  const nicknameRef = useRef();
  const emailRef = useRef();

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
  const onRemove = (id) => {
    console.log(id);
    setUsers(users.filter((user) => user.id !== id));
  };

  const onToggle = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  useEffect(() => {
    console.log("마운트");
    console.log(users);
    return console.log("언마운트");
  }, [users]);

  const count = useMemo(() => {
    countActiveUsers(users);
  }, [users]);
  return (
    <div>
      <UserForm
        onChange={onChange}
        onSubmit={onSubmit}
        nicknameRef={nicknameRef}
        emailRef={emailRef}
        inputValue={inputValue}
      />
      <div>활성 사용자 수: {count}</div>
      <section>
        {users.map((user) => (
          <User
            key={user.id}
            user={user}
            onRemove={onRemove}
            onToggle={onToggle}
          />
        ))}
      </section>
    </div>
  );
};

export default UserContainer;
