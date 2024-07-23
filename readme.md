# 다양한 기술을 공부하기 위해 만든 레포입니다.

> # nextJs

- 이 폴더는 next.js를 공부하기 위해 만든 폴더입니다.

## next-practice

해외 유투버 [Codevolution](https://www.youtube.com/@Codevolution)
님의 [Next.js 14 Tutorial](https://www.youtube.com/watch?v=ZjAqacIC_3c&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI) 강의를 듣고 정리하고 연습한 레포입니다.

### Next.js 14 Tutorial

- 1 ~ 32는 next-practice
- 33 부터 44는 route-handlers-demo 레포
- Thunder client vs코드 확장자 필요
- 45 부터 61는 rendering-demo 레포
<details>
<summary> rendering-demo 설치</summary>

```bash
npm i react-slick slick-carousel @types/react-slick
```

```bash
npm i server-only
```

```tsx
import "server-only";
```

```bash
npm i client-only
```

```tsx
import "client-only";
```

</details>

- 62 부터는 data-fetching-demo 레포

<details>
<summary>data-fetching-demo 설치</summary>

```bash
npm install json-server@0.17.4
```

</details>

### 공부 기록

<details>
<summary>공부한 내용</summary>

| 번호 | 강의 이름                                 | 공부한 날짜 | 시간  |
| ---- | ----------------------------------------- | ----------- | ----- |
| 1    | Introduction                              | 24.07.15    | 5:06  |
| 2    | Hello World                               | 24.07.15    | 3:21  |
| 3    | Project Structure                         | 24.07.15    | 5:47  |
| 4    | Before We Start                           | 24.07.15    | 2:06  |
| 5    | Routing                                   | 24.07.15    | 7:46  |
| 6    | Nested Routes                             | 24.07.15    | 3:51  |
| 7    | Dynamic Routes                            | 24.07.15    | 7:55  |
| 8    | Nested Dynamic Routes                     | 24.07.15    | 4:10  |
| 9    | Catch all Segments                        | 24.07.15    | 8:05  |
| 10   | Not Found Page                            | 24.07.15    | 4:25  |
| 11   | File Colocation                           | 24.07.15    | 3:50  |
| 12   | Private Folders                           | 24.07.15    | 2:52  |
| 13   | Route Groups                              | 24.07.15    | 5:36  |
| 14   | Layouts                                   | 24.07.16    | 5:54  |
| 15   | Nested Layouts                            | 24.07.16    | 4:03  |
| 16   | Route Group Layout                        | 24.07.16    | 2:54  |
| 17   | Routing Metadata                          | 24.07.16    | 8:13  |
| 18   | title Metadata                            | 24.07.16    | 4:20  |
| 19   | Link Component Navigation                 | 24.07.16    | 7:24  |
| 20   | Active Links                              | 24.07.16    | 5:28  |
| 21   | Navigating Programmatically               | 24.07.17    | 4:57  |
| 22   | Templates                                 | 24.07.17    | 4:47  |
| 23   | Loading UI                                | 24.07.17    | 3:13  |
| 24   | Error Handling                            | 24.07.17    | 6:49  |
| 25   | Recovering from Errors                    | 24.07.17    | 2:13  |
| 26   | Handling Errors in Nested Routes          | 24.07.17    | 2:44  |
| 27   | Handling Errors in Layouts                | 24.07.17    | 3:02  |
| 28   | Parallel Routes                           | 24.07.17    | 11:46 |
| 29   | Unmatched Routes                          | 24.07.18    | 9:07  |
| 30   | Conditional Routes                        | 24.07.18    | 3:48  |
| 31   | Intercepting Routes                       | 24.07.18    | 10:28 |
| 32   | Parallel Intercepting Routes              | 24.07.18    | 5:58  |
| 33   | Route Handlers                            | 24.07.18    | 7:02  |
| 34   | Handling GET Request                      | 24.07.18    | 4:14  |
| 35   | Handling POST Request                     | 24.07.20    | 4:23  |
| 36   | Dynamic Route Handlers                    | 24.07.20    | 4:44  |
| 37   | Handling PATCH Request                    | 24.07.20    | 4:08  |
| 38   | Handling DELETE Request                   | 24.07.20    | 3:17  |
| 39   | URL Query Parameters                      | 24.07.20    | 3:48  |
| 40   | Redirects in Route Handlers               | 24.07.20    | 2:50  |
| 41   | Headers in Route Handlers                 | 24.07.20    | 6:31  |
| 42   | Cookies in Route Handlers                 | 24.07.20    | 4:03  |
| 43   | Caching in Route Handlers                 | 24.07.20    | 4:10  |
| 44   | Middleware                                | 24.07.21    | 8:23  |
| 45   | Rendering                                 | 24.07.21    | 1:32  |
| 46   | Client-side Rendering (CSR)               | 24.07.21    | 3:23  |
| 47   | Server-side Rendering (SSR)               | 24.07.21    | 6:07  |
| 48   | Suspense for SSR                          | 24.07.21    | 7:49  |
| 49   | React Server Components (RSC)             | 24.07.21    | 9:01  |
| 50   | Server and Client Components              | 24.07.21    | 8:21  |
| 51   | RSC Rendering Lifecycle                   | 24.07.21    | 3:56  |
| 52   | Static Rendering                          | 24.07.22    | 13:45 |
| 53   | Dynamic Rendering                         | 24.07.22    | 5:32  |
| 54   | Streaming                                 | 24.07.22    | 4:22  |
| 55   | Server and Client Composition Patterns    | 24.07.22    | 1:11  |
| 56   | Server-only Code                          | 24.07.22    | 7:29  |
| 57   | Third Party Packages                      | 24.07.22    | 5:30  |
| 58   | Context Providers                         | 24.07.22    | 6:08  |
| 59   | Client-only Code                          | 24.07.22    | 4:34  |
| 60   | Client Component Placement                | 24.07.22    | 6:35  |
| 61   | Interleaving Server and Client Components | 24.07.22    | 9:47  |
| 62   | Data Fetching                             | 24.07.23    | 2:12  |
| 63   | Fetching Data with Server Components      | 24.07.23    | 4:41  |
| 64   | Loading and Error States                  | 24.07.23    | 3:20  |
| 65   | JSON Server Setup                         | 24.07.23    | 3:26  |
| 66   | Caching Data                              | 24.07.23    | 4:43  |
| 67   | Data Cache                                | 24.07.23    | 4:34  |
| 68   | Opting Out of Caching                     | 24.07.23    | 8:04  |
| 69   | Request Memoization                       | 24.07.23    | 5:49  |
| 70   | Time based Data Revalidation              | 24.07.23    | 5:27  |
| 71   | Client-side Data Fetching                 | 24.07.23    | 2:17  |

</details>
<br>

> # typeScript

> # eliceCodeChallenge
