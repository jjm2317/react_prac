import React, { useEffect, useReducer, useRef, useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import axios from 'axios';

const sectionStyle = {
  width: 960,
  height: 400,
  margin: '0 auto'
};
// LOADING, SUCCESS, ERROR
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
  }
}

const Grid = () => {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null
  });
  // const [rowData, setRowData] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  const fetchRowData = async () => {
    try {
      // setRowData(null);
      // setError(null);
      // setLoading(true);
      dispatch({
        type: 'LOADING'
      });

      const response = await axios.get(
        'http://121.126.223.246:8888/v1/tn/inventory',

        {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2NDg3MDgyNjksImlhdCI6MTYxNzE3MjI2OSwianRpIjoidGVzdEBza3QuY29tIn0.7KCLkiUlkF0fbhViugeITRJ-nIpvz4Jro1wMYJn66efLTZu1Hly9XyyquodwYTECQ-mbfQaI6r-3eP5y5Ywo0w'
          }
        }
      );
      dispatch({
        type: 'SUCCESS',
        data: response.data
      });
    } catch (e) {
      dispatch({
        type: 'ERROR',
        error: e
      });
    }
  };
  useEffect(() => {
    fetchRowData();
  }, []);

  const { loading, data, error } = state;
  const rowData = state.data;
  if (loading) {
    return <div>로딩중</div>;
  }

  if (error) return <div>에러</div>;

  if (!rowData) return null;

  console.log(rowData);
  const fields = Object.keys(rowData[0]);
  return (
    <>
      <button onClick={fetchRowData}>다시 불러오기</button>
      <section className="ag-theme-alpine" style={sectionStyle}>
        <AgGridReact rowData={rowData}>
          {fields.map(field => (
            <AgGridColumn key={field} field={field} sortable={true} filter={true}></AgGridColumn>
          ))}
        </AgGridReact>
      </section>
    </>
  );
};

export default Grid;
