import React from 'react';

const initialState = {
  linkbooks: {
    loading: false,
    data: null,
    error: null
  },
  linkbook: {
    loading: false,
    data: null,
    error: null
  }
};

const loadingState = {
  loading: true,
  data: null,
  error: null
};

const success = data => ({
  loading: false,
  data,
  error: null
});

const error = error => ({
  loading: false,
  data: null,
  error
});
// 여러개의 데이터를 하나의 상태로 관리 할 때 액션타입 네이밍의 처리가 달라진다
// LOADING -> GET_LINKBOOK
function reducer(state, action) {
  switch (action.type) {
    case 'GET_LINKBOOKS':
      return {
        ...state,
        linkbooks: loadingState
      };
    case 'GET_LINKBOOKS_SUCCESS':
      return {
        ...state,
        linkbooks: success(action.data)
      };
    case 'GET_LINKBOOKS_ERROR':
      return {
        ...state,
        linkbooks: error(action.error)
      };
    case 'GET_LINKBOOK':
      return {
        ...state,
        linkbook: loadingState
      };
    case 'GET_LINKBOOK_SUCCESS':
      return {
        ...state,
        linkbook: success(action.data)
      };
    case 'GET_LINKBOOK_ERROR':
      return {
        ...state,
        linkbook: error(action.error)
      };
    default:
  }
}
