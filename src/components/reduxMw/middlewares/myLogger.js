const myLogger = store => next => action => {
  console.log(action);
  console.log('\tPREV', store.getState());
  const result = next(action);
  // 액션이 리듀서에서 모두 처리가 된 이후에 다음 상태를 가져와서 출력해준다.
  console.log('\tNEXT', store.getState());
  return result;
};

export default myLogger;
