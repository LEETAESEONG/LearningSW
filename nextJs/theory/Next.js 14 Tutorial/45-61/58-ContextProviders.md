### Context Providers

- Context providers are typically rendered near the roof of an application to share global application state and logic
- For example, the application theme
- However, since React context is not supported in Server Components, attempting to create a context at the roof of your application will result in an error
- To address this, you can create a context and render its provider inside a separate Client Component

### Context Providers

- Context providers는 일반적으로 애플리케이션의 최상단에 렌더링되어 전역 애플리케이션 상태와 로직을 공유하는 데 사용됨
  - 예를 들어, 애플리케이션 테마와 같은 글로벌 상태를 공유할 때 사용됨
- 그러나 React context는 서버 컴포넌트에서 지원되지 않기 때문에, 애플리케이션의 최상단에서 컨텍스트를 생성하려고 하면 오류가 발생함
- 이를 해결하기 위해, 컨텍스트를 생성하고 그 제공자를 별도의 클라이언트 컴포넌트 내에서 렌더링할 수 있음
