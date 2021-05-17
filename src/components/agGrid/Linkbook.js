import axios from 'axios';
import React, { useEffect } from 'react';
import { useAsync } from 'react-async';
import { getLinkbook, useLinkbooksDispatch, useLinkbooksState } from './GridContext';

// const getLinkbook = async ({ id }) => {
//   const response = await axios.get(
//     `http://121.126.223.246:8888/v1/tn/linkbook?otnLinkbookId=${id}`,
//     {
//       headers: {
//         Authorization:
//           'Bearer eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2NDg3MDgyNjksImlhdCI6MTYxNzE3MjI2OSwianRpIjoidGVzdEBza3QuY29tIn0.7KCLkiUlkF0fbhViugeITRJ-nIpvz4Jro1wMYJn66efLTZu1Hly9XyyquodwYTECQ-mbfQaI6r-3eP5y5Ywo0w'
//       }
//     }
//   );
//   return response.data;
// };
const Linkbook = ({ id }) => {
  // const { data, error, isLoading } = useAsync({ promiseFn: getLinkbook, id, watch: id });
  const state = useLinkbooksState();
  const dispatch = useLinkbooksDispatch();
  // 컴포넌트가 처음 렌더링될때 데이터를 보여주기 위함
  useEffect(() => {
    getLinkbook(dispatch, id);
  }, [id, dispatch]);
  const { data, error, loading } = state.linkbook;
  const content = data?.content;
  if (loading) return <div>로딩중</div>;
  if (error) return <div>{console.log(error)}</div>;
  if (!content) return null;
  return (
    <div>
      {Object.keys(content[0]).map(key => (
        <div key={key}>
          {key} {content[0][key]}
        </div>
      ))}
    </div>
  );
};

export default Linkbook;
