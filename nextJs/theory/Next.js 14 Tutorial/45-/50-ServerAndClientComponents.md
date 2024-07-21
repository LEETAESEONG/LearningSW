### RSC + Next.js

- By default, every component in a Next.js app is considered a server component

### Summary

- In the RSC architecture and by extension in the Next.js app router, components are server components by defaul
- To use client components, you must include the use client directive at the tip
- Server components are rendered only on the server
- Client components are rendered once on the server and then on the client

### RSC + Next.js

- 기본적으로, Next.js 애플리케이션의 모든 컴포넌트는 서버 컴포넌트로 간주됩니다.

### 요약

- RSC 아키텍처와 Next.js 앱 라우터에서는 컴포넌트가 기본적으로 서버 컴포넌트입니다.
- 클라이언트 컴포넌트를 사용하려면, 컴포넌트의 맨 위에 `use client` 지시어를 포함해야 합니다.
- 서버 컴포넌트는 오직 서버에서만 렌더링됩니다.
- 클라이언트 컴포넌트는 서버에서 한 번 렌더링된 후 클라이언트에서 렌더링됩니다.
