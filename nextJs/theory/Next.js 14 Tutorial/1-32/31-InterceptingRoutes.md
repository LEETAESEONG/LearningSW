### Advanced Routing Patterns

- Parallel routes
- Intercepting routes

### Interceptin Routes

- Intercepting routes allow you to in tercept or stop the default routing behaviour to present an alternate view or component when navigating through the UI, while still preserving the intendede route for scenarios like page reloards
- This can be useful if you want to show a route while keeping the context of the current page

### 고급 라우팅 패턴

- 병렬 라우트
- 라우트 가로채기

### 라우트 가로채기

- 라우트 가로채기는 UI를 통해 탐색할 때 기본 라우팅 동작을 가로채거나 중단하여 대체 보기나 컴포넌트를 제공하는 것을 가능하게 합니다. 이 과정에서 페이지 새로고침과 같은 시나리오에서도 원래 의도한 라우트를 유지합니다.
- 이는 현재 페이지의 컨텍스트를 유지하면서 특정 라우트를 보여주고자 할 때 유용합니다.

- 바로 적용이 안될 수 있으므로 기다리자

### Interceptin Routes Conventions
- (.) to match segments on the same level
- (..) to match segments one level above 
- (..)(..) to match segments two level above
- (...) to match segments from the root app directory

### 라우트 가로채기 규칙
- (.) : 동일 레벨의 세그먼트와 일치합니다.
- (..) : 한 단계 위의 세그먼트와 일치합니다.
- (..)(..) : 두 단계 위의 세그먼트와 일치합니다.
- (...) : 루트 앱 디렉토리에서의 세그먼트와 일치합니다.


- 새로고침 하면 다시 정상 페이지 로딩