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
- props로 전달하는 여러번 전달되는 함수를 contextAPI로 리팩토링
- immer 를 사용하여 리듀서 함수 리팩토링

### ISSUE

- contextAPI를 사용하면서, 부모 컴포넌트의 컨텍스트를 참조하기 위해 부모 컴포넌트를 import 하였는데, eslint에 의해 import/no-cycle 에러가 발생
  - .eslintrc의 rule 프로퍼티에 "import/no-cycle":"off" 추가하여 해결

## /component/TodoContainer

**학습 목표 및 요구사항**

- 할일 목록의 CRUD 구현
- useReducer로 상태관리
- useCallback, useMemo, React.memo를 통한 렌더링 최적화
- 할일 목록의 할일을 체크하면 상태의 done 프로퍼티를 true로 바꾸고 line-through 가 생기도록 하기
- 상태에따라 보여줄 할일목록을 select 태그로 구현, option으로 all, active(done프로퍼티가 false), done으로 구분
- input이 빈값인 상태에서 생성버튼 클릭시 생성x, input border가 red로 변환

## /components/agGrid

**학습 목표 및 요구사항**

- ag-grid 라이브러리 사용
- ag-grid 의 행을 클릭시 해당 행의 데이터의 id 값을 비동기로 요청하여 하단에 데이터 정보 렌더링
- useEffect 로 비동기 요청 처리
- react-async 라이브러리 적용해보기
  - 장점: 비동기에 필요한 기능을 바로 사용 가능하다
  - 단점: 옵션이 복잡하다.
- context API로 비동기 작업 리팩토링
  - 특정 데이터를 여러개의 컴포넌트에서 사용할때 유용하다.
  - context는 data용과 dispatch 용을 따로 만드는데 이렇게 하면 컴포넌트 최적화에 용이하다.
  - context로 비동기 작업을 처리하는 것은 특정 상태가 전역적으로 필요할 때 권장된다.
