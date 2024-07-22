### Server and Client Composition Patterns

**Server components**

- Fetching data
- Directly accessing backend resources
- Protecting sensitive information (like access tokens and API keys) on the server
- Keeping large dependencies server-side, which helps in reducing client-side JavaScript.

**Client components**

- Adding interactivity
- Handling event listeners (such as onClick(), onChange(), etc)
- Managing state and lifecycle effects (using hooks like useState(), useReducer(), useEffect())
- Using browser-exclusive APIs
- Using custom hooks
- Using React Class components

### Server and Client Composition Patterns

**Server components**

- 데이터 가져오기
- 백엔드 리소스에 직접 접근
- 서버에서 민감한 정보(예: 액세스 토큰 및 API 키) 보호
- 클라이언트 사이드 JavaScript를 줄이는 데 도움이 되는 대형 종속성 유지

**Client components**

- 상호작용 추가
- 이벤트 리스너 처리 (예: onClick(), onChange() 등)
- 상태 및 생명주기 효과 관리 (예: useState(), useReducer(), useEffect() 훅 사용)
- 브라우저 전용 API 사용
- 커스텀 훅 사용
- React 클래스 컴포넌트 사용
