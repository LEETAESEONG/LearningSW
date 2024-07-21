// 서버 컴포넌트
export default function AboutPage() {
  // log 가 서버에서 찍히고 밖에서는 찍히지 않는다.
  console.log("About Server Component");
  return <h1>About Page</h1>;
}
