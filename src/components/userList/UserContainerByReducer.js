import React, { useEffect, useMemo, useReducer, useRef, useState } from "react";
import UserForm from "./UserForm";
import User from "./User";
/* 요구사항
useReducer 훅을 통한 상태 관리
1. input 입력시 상태
2. user 상태
- onCreate
- onRemove
- onToggle
3. 활성 사용자 수
*/
const initialState = {
  users: [
    {
      id: 1,
      nickname: "wlaks",
      email: "aaaa@mail.com",
      active: true,
    },
    {
      id: 2,
      nickname: "wlaks2",
      email: "aaaa@mail.com2",
      active: false,
    },
  ],
  inputs: {
    nickname: "",
    email: "",
  },
};

function reducer(state, action) {
  switch (action.type) {
  }
  return state;
}
const UserContainerByReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state, dispatch);

  const onChange = () => {};

  const onCreate = () => {};

  const onRemove = () => {};

  const onToggle = () => {};
  return (
    <div>
      <div>활성 사용자 수: {}</div>
      <section></section>
    </div>
  );
};

export default UserContainerByReducer;
