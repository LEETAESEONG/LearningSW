### Server Rendering Strategies

1. Static Rendering
2. Dynamic Rendering
3. Streaming

### Static Rendering

- 정적 렌더링은 애플리케이션을 빌드할 때 HTML 페이지를 생성하는 서버 렌더링 전략입니다.
- 이 접근 방식은 페이지를 한 번만 빌드하고, CDN에 캐시하여 클라이언트에 거의 즉시 제공할 수 있게 합니다.
- 이 최적화는 렌더링 작업의 결과를 다양한 사용자와 공유할 수 있어 애플리케이션의 성능을 크게 향상시킵니다.
- 정적 렌더링은 블로그 페이지, 전자상거래 제품 페이지, 문서화 및 마케팅 페이지에 특히 유용합니다.

### 어떻게 정적 렌더링을 하나요?

- 정적 렌더링은 앱 라우터에서 기본 렌더링 전략입니다.
- 모든 경로는 추가 설정 없이 빌드 시 자동으로 준비됩니다.
- "Vishwas, 이 비디오에서 HTML이 빌드 시 생성된다고 말씀하셨는데, 아직 우리의 애플리케이션에는 빌드가 없지 않나요? 우리는 개발 모드에서 애플리케이션을 실행하고 있지 않나요?"

### 프로덕션 서버 vs 개발 서버

- 프로덕션에서는 최적화된 빌드를 한 번 생성하고, 그 빌드를 배포합니다.
- 반면, 개발 서버는 개발자 경험에 중점을 둡니다.
- 우리는 애플리케이션을 한 번 빌드하고, 변경을 가하고, 다시 빌드하는 것을 감당할 수 없습니다.
- 프로덕션 빌드의 경우, 페이지는 빌드 명령어를 실행할 때 한 번 사전 렌더링됩니다.

### 사전 가져오기

- 사전 가져오기는 사용자가 해당 경로로 탐색하기 전에 백그라운드에서 경로를 미리 로드하는 기술입니다.
- 경로는 페이지가 처음 로드될 때 또는 스크롤을 통해 뷰포트에 들어올 때 자동으로 사전 가져오기되며, 캐시됩니다.
- 정적 경로의 경우, 전체 경로가 기본적으로 사전 가져오기되고 캐시됩니다.
- 홈 페이지를 로드할 때, Next.js는 About 및 Dashboard 경로를 사전 가져오기하여 즉시 탐색할 수 있도록 준비합니다.

### 정적 렌더링 요약

- 정적 렌더링은 HTML이 빌드 시 생성되는 전략입니다.
- HTML과 함께 각 컴포넌트에 대한 RSC 페이로드가 생성되고, 브라우저에서 클라이언트 측 컴포넌트 하이드레이션을 위한 JavaScript 청크가 생성됩니다.
- 페이지 경로로 직접 탐색하면 해당 HTML 파일이 제공됩니다.
- 다른 경로에서 해당 경로로 탐색하면, 서버에 추가 요청 없이 클라이언트 측에서 RSC 페이로드와 JavaScript 청크를 사용하여 경로가 생성됩니다.
- 정적 렌더링은 성능이 뛰어나며 블로그, 문서화, 마케팅 페이지 등과 같은 사용 사례에 적합합니다.

- .next 폴더를 지우고 npm run build
```bash
   Creating an optimized production build ...
 ✓ Compiled successfully
 ✓ Linting and checking validity of types
 ✓ Collecting page data
   Generating static pages (0/7)  [=== ]About Server Component
   Generating static pages (1/7)  [ ===]Dashboard client component
About Server Component
 ✓ Generating static pages (7/7)
 ✓ Collecting build traces
 ✓ Finalizing page optimization

Route (app)                              Size     First Load JS
┌ ○ /                                    11.4 kB        98.4 kB
├ ○ /_not-found                          871 B          87.9 kB
├ ○ /about                               137 B          87.2 kB
└ ○ /dashboard                           371 B          87.4 kB
+ First Load JS shared by all            87 kB
  ├ chunks/23-17d109591ec31f31.js        31.5 kB
  ├ chunks/fd9d1056-be48aeae6e94b8d1.js  53.6 kB
  └ other shared chunks (total)          1.86 kB
```
