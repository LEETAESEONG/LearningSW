### Data Cache

**What is data cache?**

- It is a server-side cache that persists the result of data fetches across incoming server requests and deployments

**Why is it required**

- The data cache improves app performance and reduces costs by eliminating the need to re-fetch data from your data source with every request

**How does it works**

### Data Cache

**What is data cache?**

- 데이터 캐시는 서버 측에서 데이터를 가져온 결과를 저장하여 후속 서버 요청 및 배포 간에 지속되도록 하는 캐시입니다.

**Why is it required**

- 데이터 캐시는 앱의 성능을 향상시키고 비용을 절감하는 데 도움이 됩니다. 이는 매 요청마다 데이터 소스에서 데이터를 다시 가져올 필요를 없애줍니다.

**How does it work**

- 서버는 데이터를 처음 요청할 때 데이터 캐시에 저장합니다.
- 이후 동일한 요청이 들어오면, 서버는 데이터 소스 대신 캐시에서 데이터를 반환합니다.
- 데이터 캐시는 데이터 소스에 대한 요청 수를 줄이고 응답 시간을 단축시킵니다.
- 캐시된 데이터는 설정된 만료 시간이나 특정 이벤트에 따라 업데이트될 수 있습니다.
