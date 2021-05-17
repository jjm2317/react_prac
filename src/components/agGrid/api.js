import axios from 'axios';

// 데이터를 요청해서 반환하는 함수
export async function getLinkbooks() {
  const response = await axios.get('http://121.126.223.246:8888/v1/tn/linkbook', {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2NDg3MDgyNjksImlhdCI6MTYxNzE3MjI2OSwianRpIjoidGVzdEBza3QuY29tIn0.7KCLkiUlkF0fbhViugeITRJ-nIpvz4Jro1wMYJn66efLTZu1Hly9XyyquodwYTECQ-mbfQaI6r-3eP5y5Ywo0w'
    }
  });
  return response.data;
}

export async function getLinkbook(id) {
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
}
