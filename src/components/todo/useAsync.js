import react, { useEffect, useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'LOADING':
      return {
        loading: true,
        data: null,
        error: null
      };
    case 'SUCCESS':
      return {
        loading: false,
        data: action.data,
        error: null
      };
    case 'ERROR':
      return {
        loading: false,
        data: null,
        error: action.error
      };
    default:
      throw new Error(`${action.type} : not exist`);
  }
}

const useAsync = (callback, deps = [], skip = false) => {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null
  });

  const fetchData = useCallback(async () => {
    dispatch({ type: 'LOADING' });
    //callback : http 요청 메서드
    try {
      const data = await callback();
      dispatch({
        type: 'SUCCESS',
        data
      });
    } catch (e) {
      dispatch({
        type: 'ERROR',
        error: e
      });
    }
  });

  useEffect(() => {
    fetchData();
  }, deps);

  return [state, fetchData];
};

export default useAsync;
