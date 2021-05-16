import React, { useEffect, useMemo, useReducer, useRef, useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import axios from 'axios';
import Filter from './Filter';
import useAsync from './useAsync';
import Linkbook from './Linkbook';

const sectionStyle = {
  width: 960,
  height: 400,
  margin: '0 auto'
};

const getRowData = async () => {
  const response = await axios.get(
    'http://121.126.223.246:8888/v1/tn/linkbook',

    {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2NDg3MDgyNjksImlhdCI6MTYxNzE3MjI2OSwianRpIjoidGVzdEBza3QuY29tIn0.7KCLkiUlkF0fbhViugeITRJ-nIpvz4Jro1wMYJn66efLTZu1Hly9XyyquodwYTECQ-mbfQaI6r-3eP5y5Ywo0w'
      }
    }
  );
  return response.data;
};

const Grid = () => {
  const [state, refetch] = useAsync(getRowData, [], true);
  const [linkbookId, setLinkbookId] = useState(null);
  const { loading, data, error } = state;
  const rowData = data?.content;
  if (loading) {
    return <div>로딩중</div>;
  }

  if (error) return <div>에러</div>;

  if (!rowData) return <button onClick={refetch}>불러오기</button>;

  console.log(rowData);
  const fields = Object.keys(rowData[0]);
  return (
    <section>
      <button onClick={refetch}>다시 불러오기</button>
      <Filter />
      <section className="ag-theme-alpine" style={sectionStyle}>
        <AgGridReact onRowClicked={e => setLinkbookId(e.data.otn_linkbook_id)} rowData={rowData}>
          {fields.map(field => (
            <AgGridColumn key={field} field={field} sortable={true} filter={true}></AgGridColumn>
          ))}
        </AgGridReact>
      </section>
      <div>데이터 개수 : {rowData.length}</div>
      {linkbookId && <Linkbook id={linkbookId} />}
    </section>
  );
};

export default Grid;
