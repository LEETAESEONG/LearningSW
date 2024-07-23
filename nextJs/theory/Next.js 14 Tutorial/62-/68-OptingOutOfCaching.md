### Opting Out Of Caching

- For individual data fetches, you can opt out of caching by setting the cache option to no-store
- Once you specify the no-store option for a fetch request, subsequent fetch request will also not be cached
- By default, Next.js will cache fetch() requests that occur before any dynamic functions (cookies(), headers(), searchParams) are used and will not cache requests found after dynamic functions

### Opting Out of Caching

- 특정 데이터 가져오기 요청에서 캐싱을 비활성화하려면, `cache` 옵션을 `no-store`로 설정할 수 있습니다.
- `no-store` 옵션을 지정하면, 이후의 요청도 캐시되지 않습니다.
- 기본적으로 Next.js는 동적 함수(예: `cookies()`, `headers()`, `searchParams`)가 사용되기 전의 `fetch()` 요청을 캐시하며, 동적 함수가 사용된 후의 요청은 캐시하지 않습니다.

https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#fetchcache

### Fetch Cache Options in Next.js

Next.js의 `fetch()` 요청은 기본적으로 동적 함수가 사용되기 전에는 캐시되고, 동적 함수가 사용된 후에는 캐시되지 않습니다. `fetchCache` 옵션을 사용하면 레이아웃이나 페이지의 모든 `fetch` 요청의 기본 캐시 동작을 재정의할 수 있습니다.

**`fetchCache`는 다음과 같은 옵션을 가질 수 있습니다:**

- **'auto' (기본값)**: 동적 함수가 사용되기 전에는 제공된 캐시 옵션을 사용하여 `fetch` 요청을 캐시하고, 동적 함수가 사용된 후에는 `fetch` 요청을 캐시하지 않습니다.
- **'default-cache'**: `fetch`에 어떤 캐시 옵션도 제공되지 않은 경우 기본 캐시 옵션을 'force-cache'로 설정합니다. 즉, 동적 함수 이후의 `fetch` 요청도 정적으로 간주됩니다.
- **'only-cache'**: 모든 `fetch` 요청이 캐시 옵션을 'force-cache'로 설정하도록 하고, 캐시 옵션으로 'no-store'를 사용하는 `fetch` 요청은 오류를 발생시킵니다.
- **'force-cache'**: 모든 `fetch` 요청의 캐시 옵션을 'force-cache'로 설정하여 모든 `fetch` 요청이 캐싱되도록 합니다.
- **'default-no-store'**: `fetch`에 어떤 캐시 옵션도 제공되지 않은 경우 기본 캐시 옵션을 'no-store'로 설정합니다. 즉, 동적 함수 이전의 `fetch` 요청도 동적으로 간주됩니다.
- **'only-no-store'**: 모든 `fetch` 요청이 캐시 옵션을 'no-store'로 설정하도록 하고, 캐시 옵션으로 'force-cache'를 사용하는 `fetch` 요청은 오류를 발생시킵니다.
- **'force-no-store'**: 모든 `fetch` 요청의 캐시 옵션을 'no-store'로 설정하여 모든 `fetch` 요청이 매 요청마다 다시 가져오도록 강제합니다.

**교차 라우트 세그먼트 동작**

- 각 레이아웃과 페이지에 설정된 옵션들은 서로 호환되어야 합니다.
- **'only-cache'**와 **'force-cache'**가 모두 제공되면 **'force-cache'**가 우선합니다.
- **'only-no-store'**와 **'force-no-store'**가 모두 제공되면 **'force-no-store'**가 우선합니다.
- **'force-'** 옵션은 경로 전체의 동작을 변경하므로, 'force-' 옵션이 있는 단일 세그먼트는 'only-'로 인한 오류를 방지합니다.
- **'only-'**와 **'force-'** 옵션의 의도는 전체 경로가 완전히 정적이거나 완전히 동적임을 보장하는 것입니다. 따라서:
  - 하나의 경로에 **'only-cache'**와 **'only-no-store'**를 조합하여 사용하는 것은 허용되지 않습니다.
  - 하나의 경로에 **'force-cache'**와 **'force-no-store'**를 조합하여 사용하는 것은 허용되지 않습니다.
  - 자식이 **'auto'**나 **'\*-cache'**를 제공하는 경우 부모는 **'default-no-store'**를 제공할 수 없습니다. 이는 동일한 `fetch`가 다른 동작을 가지게 만들 수 있기 때문입니다.
- 일반적으로 공유된 부모 레이아웃은 **'auto'**로 두고, 자식 세그먼트에서 옵션을 커스터마이징하는 것이 좋습니다.
