### 기타 꿀팁

- 자동완성 ctrl + space
- 데스크톱 전환 ctrl + window 같이 누른 상태에서 좌우 방향키

[Prisma YouTube](https://www.youtube.com/watch?v=RebA5J-rlwg)

## prisma practice 1

1. npm 초기화

```bash
npm init -y
```

2. 종속성 설치

```bash
npm i --save-dev prisma typescript ts-node @types/node nodemon
```

3. tsconfig 추가
4. prisma 시작

```bash
npx prisma init --datasource-provider postgresql
```

    - 프리즈마 스키마가 생김
    - prisma 확장자 설치
    - 중요
        - .env파일
        - DATABASE_URL
        - 자신만의 특정 URL을 입력해야 한다.

5. DATABASE_URL 수정
   - postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public
6. 스키마 정의
   - user model 추가
7. migration

```bash
npx prisma migrate dev --name init
```

    - init을 하는 이유는 지금은 우리가 처음 시작하기 때문
    - 이 부분에서 좀 많이 걸렸는데
    - postgresql 설치하고
    - pgAdmin4 설치한 다음
    - pgAdmin4에서 새로 데이터 베이스를 만들고 난 뒤에 해결했다.
    - 성공하면 아래와 같다.

```bash
$ npx prisma migrate dev --name init
Environment variables loaded from .env
Prisma schema loaded from prisma\schema.prisma
Datasource "db": PostgreSQL database "test", schema "public" at "localhost:5432"

Applying migration `20240827130136_init`

The following migration(s) have been created and applied from new schema changes:

migrations/
  └─ 20240827130136_init/
    └─ migration.sql

Your database is now in sync with your schema.

Running generate... (Use --skip-generate to skip the generators)

✔ Generated Prisma Client (v5.18.0) to .\node_modules\@prisma\clien
t in 48ms
```

8. 클라이언트 라이브러리 설치

```bash
npm i @prisma/client
```

9. 클라이언트를 수동으로 재생성해야 하는 경우

```bash
npx prisma generate
```

10. script.ts 만들기
11. package.json 수정

```json
"scripts": {
    "devStart": "nodemon script.ts"
  },
```

```bash
npm run devStart
```

12. prisma 자동 format

- window) ctrl + ,
- Mac) cmd + ,
- 검색창에 setting.json을 검색하고 파일로 들어감
  - setting.json에서 편집 클릭
  - 아래와 같이 설정

```json
{
  "workbench.colorTheme": "Default Dark+",
  "editor.accessibilitySupport": "off",
  "files.autoSave": "afterDelay",
  "git.openRepositoryInParentFolders": "always",
  "workbench.startupEditor": "none",
  "emmet.includeLanguages": {
    "django-html": "html"
  },
  "files.associations": {
    "**/*.html": "html",
    "**/templates/**/*.html": "django-html",
    "**/templates/**/*": "django-txt",
    "**/requirements{/**,*}.{txt,in}": "pip-requirements"
  },
  "[python]": {
    "editor.formatOnType": true,
    "editor.defaultFormatter": "ms-python.black-formatter"
  },
  "[prisma]": {
    "editor.defaultFormatter": "Prisma.prisma"
  },
  "terminal.integrated.defaultProfile.windows": "Git Bash",
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[c]": {
    "editor.defaultFormatter": "ms-vscode.cpptools"
  },
  "editor.mouseWheelZoom": true,
  "json.schemas": [],
  "files.encoding": "utf8",
  "java.import.gradle.java.home": "C:\\Program Files\\Java\\jdk-17",
  "liveServer.settings.donotShowInfoMsg": true
}
```

13. model 일대일 일대다 다대다 관계로 만들었으니 다시 migration

```bash
npx prisma migrate dev
```

- dev가 없으면 이름을 지정하라는 메시지가 뜬다.

14. 에러 발생

```bash
$ npx prisma migrate dev
Environment variables loaded from .env
Prisma schema loaded from prisma\schema.prisma
Datasource "db": PostgreSQL database "test", schema "public" at "localhost:5432"


Error:
⚠️ We found changes that cannot be executed:

  • Step 1 Added the required column `age` to the `User` table without a default value. There are 3 rows in this table, it is not possible to execute this step.
  • Step 1 Added the required column `blob` to the `User` table without a default value. There are 3 rows in this table, it is not possible to execute this step.
  • Step 1 Added the required column `email` to the `User` table without a default value. There are 3 rows in this table, it is not possible to execute this step.
  • Step 1 Added the required column `isAdmin` to the `User` table without a default value. There are 3 rows in this table, it is not possible to execute this step.
  • Step 1 Added the required column `preferences` to the `User` table without a default value. There are 3 rows in this table, it is not possible to execute this step.

You can use prisma migrate dev --create-only to create the migration file, and manually modify it to address the underlying issue(s).
Then run prisma migrate dev to apply it and verify it works.
```

- 처음 마이그레이션 했을 때의 User 모델과 수정하고 난 User모델이 달라서 생긴 오류
- user를 어쩔 수 없이 지운다.

```tsx
await prisma.user.deleteMany();
```

```bash
npm run devStart
```

15. 다시 마이그레이션 하고 읽어본 뒤 마이그레이션

```bash
  Warnings for the current datasource:

  • A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  • A unique constraint covering the columns `[age,name]` on the table `User` will be added. If there are existing duplicate values, this will fail.

? Are you sure you want to create and apply this migration? » (y/N) y
? Enter a name for the new migration: » test
```

16. 코드 다시 생성

```bash
npx prisma generate
```

17. 이미 커밋한 내역 삭제하기
  - git reset HEAD~1
  - 가장 최신에 git push 한 내역 삭제
  - git push -f origin main 
  - 강제로 업데이트
  - 이유: .env파일이 gitignore에 걸리지 않음