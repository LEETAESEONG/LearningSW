### Unmatched Routes
- Navigation from the UI
    - In the case of navigation within the UI, Next.js retains the previously active state of a slot regardless of changes in the URL
- Page reload
    - Next.js immediately searches for a default.tsx file within each unmatched slot
    - The presencce of this file is critical, as it provides the default content that Next.js will render in the user interface
    - If this default.tsx file is missing in any of the unmatched slots for the current route Next.js will render a 404 error

### 미매칭 라우트
- UI 내에서의 탐색
    - UI 내에서의 탐색 경우, Next.js는 URL 변경 여부에 관계없이 이전 활성 상태의 슬롯을 유지합니다.
- 페이지 새로고침
    - Next.js는 즉시 각 미매칭 슬롯 내에서 default.tsx 파일을 검색합니다.
    - 이 파일의 존재는 매우 중요합니다. 해당 파일은 Next.js가 사용자 인터페이스에 렌더링할 기본 콘텐츠를 제공하기 때문입니다.
    - 현재 라우트에서 어떤 미매칭 슬롯에 default.tsx 파일이 없으면 Next.js는 404 오류를 렌더링합니다.

### default.tsx
- The 'default.tsx'file in Next.js serves as a fallback to render content when the framework cannot retrieve a slot's active state from the current URL
- You have complete freedom to define the UI for unmatched routes: you can either mirror the content found in page.tsx or craft an entirely custom view

### default.tsx
- Next.js에서의 'default.tsx' 파일은 현재 URL에서 슬롯의 활성 상태를 검색할 수 없을 때 콘텐츨을 렌더링하는 대체 수단으로 기능합니다.
- 미매칭된 라우트에 대한 UI를 자유롭게 정의할 수 있습니다. 'page.tsx'에서 발견된 내용을 반영하거나 완전히 사용자 정의 뷰를 만들 수 있습니다.
