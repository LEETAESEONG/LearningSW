### Caching in Next.js

- By default, Next.js caches all fetch request in the data cache, which is a persistent HTTP cache on the server
- This helps optimize pages such as a blog post where the content rarely changes
- We also know that we can opt out of caching
  - by using the cache: "no-store" option in a fetch request
  - by using a dynamic function before making the fetch request
  - by using a route segment config like fetch-cache or dynamic
- A news website is a great example where you want to make sure you're fetching the latest data at all times
- This appoach seems binary: either caching or caching
- In real-world applications, there are scenarios where a middle ground is required
- For example, an event listings page might have event details such as schedule or venue information that change occasionally
- In this case, it is acceptable to fetch updated data once every hour as freshness is not critical
- For such scenarios, Next.js allows us to revalidate the cache

### Revalidation

- Revalidation is the process of purging the Data Cache re-fetching the latest data

**Time-based revalidation**

- Next.js automatically revalidates data after a certain amount of time has passed

- You can set the revalidate route segment configuration to establish the default revalidation time for a layout or page: export const revalidate=10;
- Regarding the revalidation frequency, the lowest revalidate time across each layout and page of a single route will determine the revalidation frequency of the entire route

### Caching in Next.js

- 기본적으로, Next.js는 모든 fetch 요청을 데이터 캐시에 저장하며, 이는 서버의 지속적인 HTTP 캐시입니다.
- 이 캐시는 콘텐츠가 거의 변경되지 않는 페이지(예: 블로그 게시물)를 최적화하는 데 도움을 줍니다.
- 캐시를 제외할 수 있는 방법은 다음과 같습니다:
  - fetch 요청에서 `cache: "no-store"` 옵션을 사용하는 것
  - fetch 요청 전에 동적 함수를 사용하는 것
  - `fetch-cache` 또는 `dynamic`과 같은 라우트 세그먼트 구성을 사용하는 것
- 뉴스 웹사이트는 항상 최신 데이터를 가져오는 것이 중요한 좋은 예입니다.
- 이 접근 방식은 캐싱하거나 캐싱하지 않거나 이진적입니다.
- 실제 애플리케이션에서는 중간 지점이 필요한 시나리오가 존재합니다.
- 예를 들어, 이벤트 목록 페이지에는 일정이나 장소 정보와 같은 이벤트 세부 사항이 가끔 변경될 수 있습니다.
- 이 경우, 데이터 신선도가 매우 중요하지 않다면 매시간 업데이트된 데이터를 가져오는 것이 허용될 수 있습니다.
- 이러한 시나리오를 위해 Next.js는 캐시를 재검증할 수 있는 기능을 제공합니다.

### Revalidation

- **Revalidation**은 데이터 캐시를 제거하고 최신 데이터를 다시 가져오는 과정입니다.

**시간 기반 재검증**

- Next.js는 일정 시간이 경과한 후 자동으로 데이터를 재검증합니다.
- 레이아웃 또는 페이지에 대한 기본 재검증 시간을 설정하려면 `export const revalidate = 10;`을 사용하여 `revalidate` 라우트 세그먼트 구성을 설정할 수 있습니다.
- 재검증 빈도는 각 레이아웃과 페이지의 가장 낮은 재검증 시간이 전체 경로의 재검증 빈도를 결정합니다.
