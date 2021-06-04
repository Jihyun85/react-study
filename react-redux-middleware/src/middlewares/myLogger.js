const myLogger = (store) => (next) => (action) => {
  // 첫번째 시도
  // console.log(action); // action 출력
  // const result = next(action); // 다음 미들웨어 (또는 리듀서) 에게 액션 전달
  // return result; // 여기서 반환하는 값은 dispatch(action)의 결과물이 됨. 기본: undefined

  // 두번째 시도
  console.log(action);
  const result = next(action);
  console.log("\t", store.getState());
  return result;
};

export default myLogger;
