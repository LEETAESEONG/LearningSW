### Server-only Code

- Certain code is intended to execute only on the server
- You might have modules or functions that use multiple libraries, use environment variables, interact directly with a database, or process confidential information
- Since JavaScript modules can be shared, it's possible for code that's meant only for the server to unintentionally end up in the client
- If server-side code gets bundled into the client-side JavaScript, it could lead to a bloated bundle size, expose secret keys, database queries, and sensitive business logic
- It is crucial to separate server-only code from client-side code to protect the application's security and integrity

### Server-only Package

- Provide a build-time error if developers accidentally import one of these modules into a Client Component

### Server-only Code

- 특정 코드는 서버에서만 실행되도록 설계됨
- 여러 라이브러리를 사용하는 모듈이나 함수, 환경 변수를 사용하는 경우, 데이터베이스와 직접 상호작용하는 경우, 기밀 정보를 처리하는 경우 등이 포함될 수 있음
- JavaScript 모듈은 공유될 수 있기 때문에, 서버 전용 코드가 의도치 않게 클라이언트로 전달될 수 있음
- 서버 사이드 코드가 클라이언트 사이드 JavaScript로 번들링될 경우, 번들 크기가 커지고 비밀 키, 데이터베이스 쿼리 및 민감한 비즈니스 로직이 노출될 수 있음
- 애플리케이션의 보안과 무결성을 보호하기 위해 서버 전용 코드를 클라이언트 사이드 코드와 분리하는 것이 중요함

### Server-only Package

- 개발자가 실수로 이러한 모듈을 클라이언트 컴포넌트에서 임포트할 경우, 빌드 타임에 오류를 제공함
