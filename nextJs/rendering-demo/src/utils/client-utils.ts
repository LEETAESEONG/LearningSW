import "client-only";
// 서버 페이지에서 사용하면 에러를 발생시킨다.
// 에러를 통해 방지할 수 있음

export const clientSideFunction = () => {
  console.log(
    `use window object,
       use localStorage`
  );
  return "client result";
};
