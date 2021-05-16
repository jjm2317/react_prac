import axios from 'axios';
import React from 'react';
import { isCompositeComponent } from 'react-dom/test-utils';
import useAsync from './useAsync';

const getLinkbook = async id => {
  const response = await axios.get(
    `http://121.126.223.246:8888/v1/tn/linkbook?otnLinkbookId=${id}`,
    {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2NDg3MDgyNjksImlhdCI6MTYxNzE3MjI2OSwianRpIjoidGVzdEBza3QuY29tIn0.7KCLkiUlkF0fbhViugeITRJ-nIpvz4Jro1wMYJn66efLTZu1Hly9XyyquodwYTECQ-mbfQaI6r-3eP5y5Ywo0w'
      }
    }
  );
  return response.data;
};
const Linkbook = ({ id }) => {
  const [state] = useAsync(() => getLinkbook(id), [id]);
  const { loading, data, error } = state;

  if (loading) return <div>로딩중</div>;
  if (error) return <div>{console.log(error)}</div>;
  if (!data) return null;
  return (
    <div>
      {Object.keys(data[0]).map(key => (
        <div>
          {key} {data[0][key]}
        </div>
      ))}
    </div>
  );
};

export default Linkbook;
