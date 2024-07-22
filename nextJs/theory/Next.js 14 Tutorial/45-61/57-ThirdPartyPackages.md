### Third-party Packages

- Third-party packages in the ecosystem are gradually adapting, beginning to add the "use client" directive to components that rely on client-only features, marking a clear distinction in their execution environment
- Many components from npm packages, which traditionally leverage client-side features, haven't yet integrated this directive
- The absence of "use client" means that while these components will function correctly in Client Components, they may encounter issues or might not work at all within Server Components
- To address this, you can wrap third-party components that rely on client-only features in your own Client Components

### Third-party Packages

- 생태계 내의 서드파티 패키지들은 점차 적응하고 있으며, 클라이언트 전용 기능에 의존하는 컴포넌트에 "use client" 디렉티브를 추가하여 실행 환경에서의 명확한 구분을 표시하고 있음
- npm 패키지의 많은 컴포넌트는 전통적으로 클라이언트 사이드 기능을 활용하지만, 아직 이 디렉티브를 통합하지 않음
- "use client"가 없다는 것은 이러한 컴포넌트가 클라이언트 컴포넌트에서는 제대로 작동하겠지만, 서버 컴포넌트 내에서는 문제를 일으키거나 전혀 작동하지 않을 수 있음을 의미함
- 이를 해결하기 위해, 클라이언트 전용 기능에 의존하는 서드파티 컴포넌트를 자신의 클라이언트 컴포넌트로 감싸서 사용할 수 있음
