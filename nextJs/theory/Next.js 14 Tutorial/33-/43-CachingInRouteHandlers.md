### Caching in Route Handlers

- Route Handlers are cached by default when using the GET method with the Response object in Next.js

### 라우트 핸들러의 캐싱

- Next.js에서 GET 메서드를 사용하여 Response 객체를 사용할 때, 라우트 핸들러는 기본적으로 캐싱됩니다.

- How to opt out of caching?

  - dynamic mode in Segment Config Option
  - using the Request object with the GET method
  - employing dynamic functions like headers() and cookies()
  - using any HTTP method other than GET

- 캐싱 비활성화 방법
  - Segment Config Option에서 dynamic 모드 사용: 캐싱을 비활성화하려면 Segment Config Option에서 dynamic 모드를 설정합니다.
    ```ts
    export const dynamic = "force-dynamic";
    ```
    - 처음에는 빌드된 시간이 나오는데 dynamic을 사용하면 새로고침할 때마다 현재 시간이 나온다.
  - GET 메서드와 함께 Request 객체 사용: GET 메서드와 함께 Request 객체를 사용하면 캐싱을 비활성화할 수 있습니다.
  - 동적 함수 사용: headers() 및 cookies()와 같은 동적 함수를 사용하여 캐싱을 제어할 수 있습니다.
  - GET 이외의 HTTP 메서드 사용: GET 외의 다른 HTTP 메서드를 사용하면 캐싱이 적용되지 않습니다.
