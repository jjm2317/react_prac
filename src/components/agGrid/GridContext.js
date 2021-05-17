import axios from 'axios';
import React, { createContext, useContext, useReducer } from 'react';
import * as api from './api';
import createAsyncDispatcher, { createAsyncHandler, initialAsyncState } from './asyncActionUtils';

const initialState = {
  linkbooks: initialAsyncState,
  linkbook: initialAsyncState
};

// 여러개의 데이터를 하나의 상태로 관리 할 때 액션타입 네이밍의 처리가 달라진다
// LOADING -> GET_LINKBOOK
const linkbooksHandler = createAsyncHandler('GET_LINKBOOKS', 'linkbooks');
const linkbookHandler = createAsyncHandler('GET_LINKBOOK', 'linkbook');
function linkbooksReducer(state, action) {
  switch (action.type) {
    case 'GET_LINKBOOKS':
    case 'GET_LINKBOOKS_SUCCESS':
    case 'GET_LINKBOOKS_ERROR':
      return linkbooksHandler(state, action);
    case 'GET_LINKBOOK':
    case 'GET_LINKBOOK_SUCCESS':
    case 'GET_LINKBOOK_ERROR':
      return linkbookHandler(state, action);
    default:
      throw new Error(`${action.type} `);
  }
}

// state 용 context
// dispatch 용 context
// 따로따로 만들어줘야 컴포넌트를 최적화할 때 용이함
const LinkbooksStateContext = createContext(null);
const LinkbooksDispatchContext = createContext(null);

// children을 받아서 렌더링 할때 위 두개에 맞는 프로바이더로 감싸줄예정
export function LinkbooksProvider({ children }) {
  const [state, dispatch] = useReducer(linkbooksReducer, initialState);
  return (
    <LinkbooksStateContext.Provider value={state}>
      <LinkbooksDispatchContext.Provider value={dispatch}>
        {children}
      </LinkbooksDispatchContext.Provider>
    </LinkbooksStateContext.Provider>
  );
}

/* Provider 로 감싸준 이후 하위 컴포넌트에서 useContext를 통해 state, dispatch를 사용할 수도 있지만
커스텀 훅을 만들어서 간편하게 사용할 수 있다. 
다음과 같은 이점이 있다. 
- 에러처리  
에러처리 로직을 커스텀훅에 구현하여 매번 context를 사용할 때마다 재작성할 필요가 없다. 
- useContext
커스텀 훅도 재사용하는건 마찬가지이긴 하지만 useContext 훅을 커스텀훅에서 에러처리와 응집하여 처리할 수 있다.
*/

export const useLinkbooksState = () => {
  const state = useContext(LinkbooksStateContext);
  if (!state) throw new Error('Cannot find LinkbooksStateProvider value');
  return state;
};

export const useLinkbooksDispatch = () => {
  const dispatch = useContext(LinkbooksDispatchContext);
  if (!dispatch) throw new Error('Cannot find LinkbooksDispatchProvider value');
  return dispatch;
};

export const getLinkbooks = createAsyncDispatcher('GET_LINKBOOKS', api.getLinkbooks);
export const getLinkbook = createAsyncDispatcher('GET_LINKBOOK', api.getLinkbook);
