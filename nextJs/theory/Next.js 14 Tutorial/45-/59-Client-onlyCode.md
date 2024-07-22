### Client-only Code

- Just as it's important to restrict certain operation to the server, it's equally important to confine some functionality to the client side
- Client-only code typically interacts with browser-specific features like the DOM, the window object, localStorage etc which are not available on the server
- Ensuring that such code is executed only on the client side prevents errors during server-side rendering
- To prevent unintended server side usage of client side code, we can use a package called client-only

### Client-only Code

- 특정 작업을 서버에 제한하는 것이 중요한 것처럼, 일부 기능을 클라이언트 측에 제한하는 것도 중요함
- 클라이언트 전용 코드는 일반적으로 DOM, window 객체, localStorage 등 서버에서는 사용할 수 없는 브라우저 특정 기능과 상호작용함
- 이러한 코드가 클라이언트 측에서만 실행되도록 보장하는 것은 서버 사이드 렌더링 중 오류를 방지하는 데 중요함
- 클라이언트 전용 코드의 의도치 않은 서버 사이드 사용을 방지하기 위해, `client-only`라는 패키지를 사용할 수 있음
