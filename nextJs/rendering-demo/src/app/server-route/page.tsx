import { ImageSlider } from "@/components/image-slider";
import { serverSideFunction } from "@/utils/server-utils";

export default function ServerRoutePage() {
  console.log("Server route rendered");
  const result = serverSideFunction();
  return (
    <>
      <h1>ServerRoutePage</h1>
      <p>{result}</p>
      {/* server page에서 ImageSlider와 같이 사용자와 상호작용하는 
      페이지를 사용하고 싶다면 컴포넌트로 캡슐화 해서 가져오면 된다. */}
      <ImageSlider />
    </>
  );
}
