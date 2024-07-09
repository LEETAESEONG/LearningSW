# 설정 사항

1. Node.js와 npm 설치:

- 먼저 Node.js와 npm이 설치되어 있는지 확인합니다. 설치되어 있지 않다면 nodejs.org에서 설치 파일을 다운로드하여 설치합니다. 이는 Node.js와 npm(Node Package Manager)을 모두 설치합니다.

2. TypeScript 전역 설치:

- npm을 사용하여 TypeScript를 전역(global)으로 설치합니다. 터미널이나 명령 프롬프트에서 다음 명령어를 입력합니다:

```bash
npm install -g typescript
```

- 이 명령어는 tsc 명령어를 사용할 수 있도록 TypeScript를 전역적으로 설치합니다.

3. 설치 확인:

- 설치가 완료된 후, 다음 명령어로 설치된 TypeScript의 버전을 확인합니다:

```bash
tsc --version
```

- TypeScript 버전이 출력되면 설치가 성공한 것입니다.

4. PATH 확인:

- 만약 여전히 tsc: command not found 오류가 발생한다면, 설치된 npm 패키지의 경로가 시스템의 PATH에 추가되지 않은 것일 수 있습니다. 다음 명령어를 통해 npm 전역 설치 경로를 확인할 수 있습니다:

```bash
npm list -g --depth=0
```

- 일반적으로 npm 전역 패키지의 경로는 C:\Users\YourUsername\AppData\Roaming\npm (Windows) 또는 /usr/local/lib/node_modules (macOS 및 Linux)입니다. 이 경로를 시스템의 PATH 환경 변수에 추가합니다.

5. TypeScript 컴파일러 실행:

- 이제 TypeScript 파일을 컴파일할 수 있습니다. 예를 들어, 0702.ts 파일을 컴파일하려면 다음 명령어를 입력합니다:

```bash
tsc 0702.ts
```

6. JavaScript를 실행시켜서 확인:

```bash
node 0702.js
```
