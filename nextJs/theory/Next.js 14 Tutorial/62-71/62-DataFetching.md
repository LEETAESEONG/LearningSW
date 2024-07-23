### Data Fetching

- Routing : 33 - 44
- Rendering : 45 - 61
- Data Fetching : 62 -

### Data Fetching in App Router

- App Router uses the React Server Components (RSC) architecture, which allows us to fetch data using either server components or client components
- It's advantageous to fetch data using server components, as they have direct access to server-side resources such as databasses or file systems
- This not only taps into the server's computational power and proximity to data sources for efficient data fetching and rendering but also minimizes the need for client-side processing
- We will explore data fetching techniques using both server and client components in Next.js
- Server components support various configurations for caching, revalidating, and optimizing data fetching
- On the client side, data fetching is typically managed through third-party libraries such as TanStack Query which offers its own robust APIs

### Data Fetching in App Router

- App Router은 React Server Components (RSC) 아키텍처를 사용하여, 서버 컴포넌트나 클라이언트 컴포넌트를 통해 데이터를 페칭할 수 있음
- 서버 컴포넌트를 사용하여 데이터를 페칭하는 것이 유리함, 서버 측 리소스(예: 데이터베이스나 파일 시스템)에 직접 접근할 수 있기 때문임
- 서버의 컴퓨팅 파워와 데이터 소스에 가까운 위치를 활용하여 효율적인 데이터 페칭 및 렌더링을 가능하게 하며, 클라이언트 측 처리를 최소화할 수 있음
- Next.js에서 서버 및 클라이언트 컴포넌트를 사용한 데이터 페칭 기술을 탐구할 것임
- 서버 컴포넌트는 데이터 페칭을 위한 캐싱, 재검증 및 최적화 등의 다양한 설정을 지원함
- 클라이언트 측에서는 일반적으로 TanStack Query와 같은 서드파티 라이브러리를 통해 데이터 페칭을 관리하며, 이 라이브러리는 강력한 API를 제공함
