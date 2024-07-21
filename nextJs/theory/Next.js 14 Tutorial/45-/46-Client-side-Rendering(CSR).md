### Rendering in React

- You'll remember React being the go-to library for creating Single Page Applications (SPAs)

### Client-Side-Rendering

- This method of rendering, where the component code is transformed into a user interface directly within the browser (the client), is known as client-side rendering(CSR)
- CSR quickly became the standard for SPAs, with widespread adoption
- It wasn't long before developers began noticing some inherent drawbacks to this approach

### Drawbacks of CSR

- SEO
  - Generating HTML that mainly contains a single div tag is not optimal for SEO, as it provides little content for search engines to index
- Performance
  - Having the browser (the client) handle all the work, such as fetching data, computing the UI, and making the HTML interactive, can slow things down. Users might see a blank screen or a loading spinner while the page loads
  - Each new feature added to the application increases the size of the JavaScript bundle, prolonging the wait time for users to see the UI

### React에서의 렌더링

- React는 단일 페이지 애플리케이션(SPA)을 만들기 위한 주요 라이브러리로 기억될 것입니다.

### 클라이언트 측 렌더링 (Client-Side Rendering, CSR)

- 클라이언트 측 렌더링(CSR)은 컴포넌트 코드가 브라우저(클라이언트) 내에서 직접 사용자 인터페이스로 변환되는 렌더링 방법입니다.
- CSR은 SPA에서 표준으로 빠르게 자리 잡았으며, 널리 채택되었습니다.
- 그러나 개발자들은 이 접근 방식의 몇 가지 본질적인 단점이 드러나는 것을 금세 알게 되었습니다.

### CSR의 단점

- SEO

  - HTML이 주로 단일 div 태그로 구성되는 경우, 검색 엔진이 색인화할 수 있는 내용이 거의 없어 SEO 최적화에 불리합니다.

- 성능
  - 브라우저(클라이언트)가 데이터 가져오기, UI 계산, HTML 상호작용 처리 등 모든 작업을 처리하게 되면 페이지 로딩 중 빈 화면이나 로딩 스피너가 표시될 수 있습니다.
  - 애플리케이션에 새로운 기능이 추가될수록 자바스크립트 번들 크기가 증가하여 UI를 보는 데 필요한 대기 시간이 길어집니다.
