### Dynamic Rendering

- Dynamic rendering is a server rendering strategy where routes are rendered for each user at request time
- It is useful when a route has data that is personalized to user or contains information that can only be known at request time, such as cookies or the URL's search parameters
- News websites, personalized e-commerce pages, and social media feeds are some examples where dynamic rendering is beneficial

### How to Dynamically Render

- During rendering, if a dynamic function is discovered, Next.js will switch to dynamically rendering the whole route
- In Next.js, these dynamic functions are: cookies(), headers(), and searchParams
- Using any of these will opt the whole route into dynamic rendering at request time

### Dynamic Rendering Summary

- Dynamic rendering is a strategy where the HTML is generated at request time
- Next.js automatically switches to dynamic rendering when it comes across a dynamic function in the component, such as cookies(), headers(), or the searchParams object
- This form of rendering is great for when we need to render HTML personalized to a user, such as a social media feed
- As a developer, you do not need to choose between static and dynamic rendering. Next.js will automatically choose the best rendering strategy for each route based on the features and APIs used

### Dynamic Rendering

- 동적 렌더링은 요청 시 각 사용자에게 맞게 경로를 렌더링하는 서버 렌더링 전략입니다.
- 사용자가 개인화된 데이터가 포함된 경로 또는 요청 시에만 알 수 있는 정보(예: 쿠키, URL의 검색 매개변수)가 포함된 경로에 유용합니다.
- 뉴스 웹사이트, 개인화된 전자상거래 페이지, 소셜 미디어 피드 등 동적 렌더링이 유용한 예시입니다.

### 어떻게 동적으로 렌더링하나요?

- 렌더링 중 동적 함수가 발견되면, Next.js는 전체 경로를 요청 시 동적으로 렌더링하도록 전환합니다.
- Next.js에서 이러한 동적 함수는 cookies(), headers(), searchParams입니다.
- 이 함수 중 하나라도 사용하면 전체 경로가 요청 시 동적 렌더링으로 전환됩니다.

### 동적 렌더링 요약

- 동적 렌더링은 HTML이 요청 시 생성되는 전략입니다.
- Next.js는 컴포넌트에서 cookies(), headers(), 또는 searchParams 객체와 같은 동적 함수를 발견하면 자동으로 동적 렌더링으로 전환합니다.
- 이 렌더링 방식은 소셜 미디어 피드와 같은 사용자 개인화가 필요한 HTML을 렌더링할 때 유용합니다.
- 개발자로서 정적 렌더링과 동적 렌더링 중 선택할 필요는 없습니다. Next.js는 사용된 기능 및 API에 따라 각 경로에 가장 적합한 렌더링 전략을 자동으로 선택합니다.

- .next 폴더를 지우고
```bash
$ npm run build

> rendering-demo@0.1.0 build
> next build

  ▲ Next.js 14.2.5

   Creating an optimized production build ...
 ✓ Compiled successfully
 ✓ Linting and checking validity of types
 ✓ Collecting page data
   Generating static pages (3/7)  [=== ]Dashboard client component    
 ✓ Generating static pages (7/7)
 ✓ Collecting build traces
 ✓ Finalizing page optimization

Route (app)                              Size     First Load JS       
┌ ○ /                                    11.4 kB        98.4 kB       
├ ○ /_not-found                          871 B          87.9 kB       
├ ƒ /about                               137 B          87.2 kB       
└ ○ /dashboard                           371 B          87.4 kB       
+ First Load JS shared by all            87 kB
  ├ chunks/23-17d109591ec31f31.js        31.5 kB
  ├ chunks/fd9d1056-be48aeae6e94b8d1.js  53.6 kB
  └ other shared chunks (total)          1.86 kB


○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand
```