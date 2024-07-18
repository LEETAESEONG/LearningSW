### Parallel Routes
- Parallel routes are an advanced routing mechanism that allows for the simultaneous rendering of multiple pages within the same layout

### 병렬 라우트
- 병렬 라우트는 동일한 레이아웃 내에서 여러 페이지를 동시에 렌더링할 수 있는 고급 라우팅 메커니즘입니다.

### Parallel Routes contd.
- Parallel routes in Next.js are defined using a feature known as slots
- Slots help structure our content in a modular fashion
- To define a slot, we use the '@folder' naming convention
- Each slot is then passed as a prop to its corresponding 'layout.tsx' file.

### 병렬 라우트 계속
- Next.js의 병렬 라우트는 슬롯이라는 기능을 사용하여 정의됩니다.
- 슬롯은 내용을 모듈화된 방식으로 구조화하는 데 도움을 줍니다.
- 슬롯을 정의하기 위해 '@folder' 네이밍 컨벤션을 사용합니다.
- 각 슬롯은 그에 해당하는 'layout.tsx' 파일에 props로 전달됩니다.

### Parallel Routes Benefits
- Aclear benefit of parallel routes is their ability to split a single layout into various slots, making the code more manageable
- Independent route handling
- Sub-navigation

### 병렬 라우트의 이점
- 병렬 라우트의 명확한 이점은 하나의 레이아웃을 여러 슬롯으로 나눌 수 있는 능력으로, 코드를 더 관리하기 쉽게 만듭니다.
- 독립적인 라우트 처리
- 하위 네비게이션

### Independent Route Handling
- Each slot of your layout, such as user analytics or revenue metrics, can have its own loading and error states
- This granular control is particularly beneficial in scenarios where different sections of the page load at varying speeds or encounter unique errors

### 독립적인 라우트 처리
- 사용자 분석이나 수익 메트릭과 같은 레이아웃의 각 슬롯은 자체적인 로딩 및 오류 상태를 가질 수 있습니다.
- 이 세분화된 제어는 페이지의 다른 섹션이 서로 다른 속도로 로드되거나 고유한 오류를 만날 수 있는 시나리오에서 특히 유용합니다.

### Sub-navigation in routes
- Each slot of your dashboard can essentially function as a mini-application, complete with its own navigation and state management
- This is especially useful in a complex application such as our dashboard where different sections serve distinct purposes

### 라우트 내 서브 네비게이션
- 대시보드의 각 슬롯은 본질적으로 자체 네비게이션과 상태 관리를 갖춘 미니 애플리케이션처럼 작동할 수 있습니다.
- 이는 특히 우리의 대시보드와 같이 다양한 섹션이 서로 다른 목적을 제공하는 복잡한 애플리케이션에서 유용합니다.