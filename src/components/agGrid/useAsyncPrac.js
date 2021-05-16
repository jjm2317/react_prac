import React, { useReducer, useEffect } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'LOADING': {
      return {
        loading: true,
        data: null,
        error: null
      };
    }
    case 'SUCCESS': {
      return {
        loading: false,
        data: action.data,
        error: null
      };
    }
    case 'ERROR': {
      return {
        loading: false,
        data: null,
        error: action.error
      };
    }
    default:
      throw new Error(`${action.type} don't exist`);
  }
}

const useAsync = (callback, deps = [], skip = false) => {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null
  });

  const fetchData = async () => {
    try {
      dispatch({
        type: 'LOADING'
      });
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
  };

  useEffect(() => {
    if (skip) return;

    fetchData();
  }, []);

  return [state, fetchData];
};
