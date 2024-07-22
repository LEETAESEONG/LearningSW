### Streaming

- Streaming is a strategy that allows for progressive UI rendering from the server
- Work is divided into chunks and streamed to the client as soon as it's ready
- This enables users to see parts of the page immediately, before the entire content has finished rendering
- Streaming significantly improves both the initial page loading performance and the renering of UI elements that rely on slower data fetches, which would otherwise block the rendering of the entire route
- Streaming is integrated into the Next.js App Router by default

### Streaming

- 스트리밍은 서버에서 점진적으로 UI를 렌더링할 수 있는 전략입니다.
- 작업이 청크로 나누어지고 준비되는 대로 클라이언트로 스트리밍됩니다.
- 이를 통해 사용자는 전체 콘텐츠가 렌더링되기 전에 페이지의 일부를 즉시 볼 수 있습니다.
- 스트리밍은 초기 페이지 로딩 성능과 느린 데이터 요청에 의존하는 UI 요소의 렌더링을 크게 개선합니다. 이는 전체 경로의 렌더링을 차단할 수 있습니다.
- 스트리밍은 기본적으로 Next.js App Router에 통합되어 있습니다.
