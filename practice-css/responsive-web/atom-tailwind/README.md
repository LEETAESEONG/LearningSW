# dynamic && static Atomic design

### 서론

- tailwind css를 사용하면서 짧은 className을 바탕으로 반응형 웹을 주로 만들어 봤다. 하지만 점차 길어지는 className은 가독성도 떨어질뿐만아니라 코드의 유지보수를 떨어뜨릴 수 있다고 생각했다. 따라서 styled components를 사용하는 Atomic design의 장점을 가져오고 싶었다. styled components는 동적 스타일링을 할 때 장점을 가진다. 예를들어 사용자와 상호작용을 하는 버튼, 즉 마우스가 올라오면 파랑색, 마우스가 버튼에서 벗어나면 흰색으로 변하는 버튼과 같은 기능을 수행할 때 효율적이다. Atomic design의 경우 폴더 구조가 atoms, molecules, organisms, templetes로 점차 합쳐지는 구조이다. 이런 폴더 구조 또한 코드의 재사용성과 유지보수성을 높일 수 있다고 생각했다. 따라서 다음과 같은 구조로 개발해보려고 한다.

### 폴더 구조

- dynamic-components
  - dynamic-atoms
    - dynamic-button.tsx
  - dynamic-molecules
  - dynamic-organisms
  - dynamic-templetes
- static-components
  - static-atoms
    - static-button-mobile.tsx
    - static-button-tablet.tsx
    - static-button-desktop.tsx
  - static-molecules
  - static-organisms
  - static-templetes

### 개발 방식

1. static-태그 이름(p, div, button, h1 etc)-mobile.tsx 를 만든다.
2. static.tsx를 모아서 하나의 dynamic.tsx를 만든다.
3. static은 dynamic.tsx에서 불러와서 쓸 수 있으나 반대는 안된다.
4. minWidth와 minHeight, maxWidth와 maxHeight는 필수이다.
5. 이외의 모든 크기는 px를 사용하지 않고 em으로 통일한다.
6. 단, 가장 큰 container를 차지하는 body나 바로 직계 자손 컴포넌트는 vh를 사용한다.
7. mobile => tablet => desktop 순서로 개발한다.
   1. static-mobile.tsx로만 구성된 앱을 만들고 테스트
   2. static-tablet.tsx로만 구성된 앱을 만들고 테스트
   3. static-desktop.tsx로만 구성된 앱을 만들고 테스트
   4. dynamic-button.tsx와 같이 가장 작은 부분부터 dynamic으로 바꿔가면서 확인
8. text가 너무 길 경우 scroll
   1. p태그는 보여지는 부분만 보이고 자르기 => 상세보기가 따로 존재할 가능성이 있음
   2. h태그는 애초에 title, name으로 자주 사용하므로 tooltip을 활용
