import "server-only";
// use client에서 사용했을 경우 에러를 발생시킨다.
// 민감한 데이터가 실수로 노출되지 않게 방지
// npm i server-only

export const serverSideFunction = () => {
  console.log(
    `use muliple libraries,
        use environment variables,
        interact with a database,
        process confidential information`
  );
  return "server result";
};
