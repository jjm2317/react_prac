import React, { useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import axios from 'axios';
import Filter from './Filter';
import useAsync from './useAsync';
import Linkbook from './Linkbook';
import { getLinkbooks, useLinkbooksDispatch, useLinkbooksState } from './GridContext';

const sectionStyle = {
  width: 960,
  height: 400,
  margin: '0 auto'
};

// const getRowData = async () => {
//   const response = await axios.get(
//     'http://121.126.223.246:8888/v1/tn/linkbook',

//     {
//       headers: {
//         Authorization:
//           'Bearer eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2NDg3MDgyNjksImlhdCI6MTYxNzE3MjI2OSwianRpIjoidGVzdEBza3QuY29tIn0.7KCLkiUlkF0fbhViugeITRJ-nIpvz4Jro1wMYJn66efLTZu1Hly9XyyquodwYTECQ-mbfQaI6r-3eP5y5Ywo0w'
//       }
//     }
//   );
//   return response.data;
// };

const Grid = () => {
  // const [state, refetch] = useAsync(getRowData, [], true);
  const state = useLinkbooksState();
  const dispatch = useLinkbooksDispatch();
  // 컴포넌트가 처음렌더링될때 데이터를 보여주는대신, 버튼 클릭 시 비동기 작업을 수행하고 싶다면 아래와 같이 함수화
  const fetchData = useCallback(() => getLinkbooks(dispatch), [dispatch]);
  const [linkbookId, setLinkbookId] = useState(null);
  const { loading, data, error } = state.linkbooks;
  const rowData = data?.content;
  if (loading) {
    return <div>로딩중</div>;
  }

  if (error) return <div>에러</div>;

  if (!rowData) return <button onClick={fetchData}>불러오기</button>;

  console.log(rowData);
  const fields = Object.keys(rowData[0]);
  return (
    <section>
      <button onClick={fetchData}>다시 불러오기</button>
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
