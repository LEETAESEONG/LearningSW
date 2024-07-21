### Headers in Route Handlers

- HTTP headers represnet the metadata associated with an API request and response.

**Request Headers**

- These are sent by the client, such as a web browser, to the server. They contain essential information about the request, which helps the server understand and process it correctly.
- "User-Agent" which identifies the browser and operating system to the server.
- "Accept" which indicates the content types like text, video, or image formats that the client can process.

**Response Headers**

- These are sent back from the server to the client. They provide information about the server and the data being sent in the response.
- "content-Type" header which indicates the media type of the response. It tells the client what the data type of the returned content is, such as text/html for HTML documents, application/json for JSON data, etc.

### 라우트 핸들러의 헤더

- HTTP 헤더는 API 요청 및 응답에 관련된 메타데이터를 나타냅니다.
  **요청 헤더 (Request Headers)**
- 요청 헤더는 클라이언트(예: 웹 브라우저)에서 서버로 전송됩니다. 이 헤더는 요청에 대한 필수 정보를 포함하고 있으며, 서버가 이를 이해하고 올바르게 처리하는 데 도움을 줍니다.
  - "User-Agent": 브라우저와 운영 체제를 서버에 식별합니다.
  - "Accept": 클라이언트가 처리할 수 있는 콘텐츠 유형(예: 텍스트, 비디오, 이미지 포맷 등)을 나타냅니다.

**응답 헤더 (Response Headers)**

- 응답 헤더는 서버에서 클라이언트로 반환됩니다. 이 헤더는 서버 및 응답으로 전송되는 데이터에 대한 정보를 제공합니다.
  - "Content-Type": 응답의 미디어 타입을 나타냅니다. 클라이언트에게 반환된 콘텐츠의 데이터 유형을 알려주며, 예를 들어 HTML 문서의 경우 text/html, JSON 데이터의 경우 application/json 등이 있습니다.
