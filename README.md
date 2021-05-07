# React 복습용 레포

## /components/showContainer, App.js

메뉴 클릭 시 아래 작업한 컴포넌트들 중 해당 컴포넌트 화면에 출력

**학습 목표 및 요구사항**

- 상태에 따른 컴포넌트 조건부 렌더링(App.js에서 구현)
- Symbol과 Object.freeze를 통한 상수 구현(App.js에서 구현)

## /components/counterAndInput

카운터와 여러개의 인풋 상태관리 구현

**학습 목표 및 요구사항**

- jsx 문법에 맞는 어트리뷰트 사용
- 어트리뷰트 방식의 이벤트 핸들러 익숙해지기
- useState를 사용한 상태관리
- object 형태의 값을 상태로 이용한 여러개의 인풋 동시 관리
- useRef 훅을 이용한 돔 요소 관리

## /components/userList

**학습 목표 및 요구사항**

- 배열 고차함수 (map, filter)를 이용한 CRUD 구현 & 불변성 유지
- 배열을 통한 컴포넌트 렌더링 시 key 값 전달을 통한 update 관리
- 상태관리 로직을 useReducer로 재 작성 후 useState와 비교