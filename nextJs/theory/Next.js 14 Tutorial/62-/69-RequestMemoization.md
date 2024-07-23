### Request Memoization

- Request memoization is a technique that deduplicates requests for the same data within a single render pass
- This approach allows for re-use of data in a React Component tree, prevents redundant network calls and enhances performance
- For the initial request, data is fetched from an external source and the result is stored in memory
- Subsequent requests for the same data within the same render pass retrieve the result from memory, bypassing the need to make the request again
- This optimization not only enhances performance but also simplifies data fetching within a component tree
- When the same data is needed across different components in a route(e.g., in a Layout, Page, and multiple components), it eliminates the need to fetch data at the top of the tree and pass props between components
- Instead, data can be fetched directly within the components that require it, without concerns about the performance implications of multiple network requests for the same data
- Request memoization is a React feature, not specifically a Next.js feature
- Memoization only applies to the GET method in fetch requests
- Memoization only applies within the React Component tree. It does not extend to fetch requests in Route Handlers as they are not part of the React component tree
- For cases where fetch is not suitable (e.g., some database clients, CMS clients, or GraphQL clients), you can use the React cache function to memoize functions

### Request Memoization

- **Request memoization**는 단일 렌더링 패스 내에서 동일한 데이터에 대한 요청을 중복 제거하는 기술입니다.
- 이 접근 방식은 React 컴포넌트 트리 내에서 데이터 재사용을 가능하게 하고, 불필요한 네트워크 호출을 방지하며 성능을 향상시킵니다.
- 초기 요청 시, 데이터는 외부 소스에서 가져오고 결과는 메모리에 저장됩니다.
- 동일한 렌더링 패스 내에서 동일한 데이터에 대한 후속 요청은 메모리에서 결과를 가져와서 다시 요청할 필요가 없습니다.
- 이 최적화는 성능을 향상시킬 뿐만 아니라 컴포넌트 트리 내에서 데이터 가져오기를 단순화합니다.
- 같은 데이터가 라우트 내의 다양한 컴포넌트(예: 레이아웃, 페이지 및 여러 컴포넌트)에서 필요할 때, 트리의 상단에서 데이터를 가져와서 컴포넌트 간에 props를 전달할 필요가 없습니다.
- 대신, 데이터를 직접적으로 필요한 컴포넌트 내에서 가져올 수 있으며, 동일한 데이터에 대한 다중 네트워크 요청의 성능 문제에 대한 우려가 없습니다.
- 요청 메모이제이션은 React 기능으로, 특별히 Next.js의 기능은 아닙니다.
- 메모이제이션은 fetch 요청의 GET 메서드에만 적용됩니다.
- 메모이제이션은 React 컴포넌트 트리 내에서만 적용되며, Route Handlers의 fetch 요청에는 적용되지 않습니다.
- fetch가 적합하지 않은 경우(예: 일부 데이터베이스 클라이언트, CMS 클라이언트, GraphQL 클라이언트)에는 React 캐시 함수를 사용하여 함수를 메모이제이션할 수 있습니다.
