# [Prisma/docs CRUD](https://www.prisma.io/docs/orm/prisma-client/queries/crud)


> ### 기초 문법 CRUD

1. 생성

   - select, include 사용 가능

   ```ts
   모델이름.create({ data: {} });
   ```

2. 다중 생성

   - 사용 불가능

   ```ts
   모델이름.createMany({ data: [{}, {}] });
   ```

3. 전체 삭제

   ```ts
   모델이름.deleteMany();
   ```

4. 고유정보 찾기

   - email 또는 name + age 등의 고유한 조건으로 찾을 때 사용

   ```ts
   모델이름.findUnique({ where: { 고유필드 } });
   ```

5. 가장 첫번째로 조건에 맞는 대상 찾기

   ```ts
   모델이름.findFirst({ where: { 조건 } });
   ```

6. 동일 조건의 모든 대상 찾기

   - distinct를 사용하면 중복 제거
   - take를 사용하면 대상 몇 개를 반환할지 정할 수 있음
   - skip을 사용하면 먼저 나온 대상 몇 개를 건너 뛰고 찾을 수 있다.
   - orderBy로 정렬
   - equals 일치 하는 대상
   - not 불일치하는 대상
   - in을 사용하면 포함되는 조건의 대상
   - notIn 포함하지 않는 대상
   - lt : less than < 숫자
   - lte : <= 숫자
   - gt : greater than > 숫자
   - gte : >= 숫자
   - contains : ~~를 포함한
   - endsWith : 문자열의 끝이 ~~한
   - startsWith : 문자열의 앞이 ~~한 (예: 김, 이, 박 성씨 찾기)

   ```ts
   모델이름.findMany({ where: { 조건 } });
   모델이름.findMany({
     where: { 조건 },
     distinct: [필드명1, 필드명2, 필드명3],
     take: 숫자,
     skip: 숫자,
     orderBy: {
       필드명: "asc" | "desc",
     },
   });
   ```

   - 예시

   ```ts
   prisma.user.findMany({
     where: {
       name: "Sally", // name: {equals: "Sally"}
       // name: {not: "Sally"} Sally가 아닌 사람 찾기
       // name: {in: ["Sally", "Kyle"]}
       // name: {notIn: ["Sally", "Kyle"]}
       age: { lt: 20 },
       email: { contains: "@naver.com" },
     },
   });
   ```

7. 길이 (자바스크립트)

   ```ts
   user.length;
   ```

8. AND(그리고), OR(또한), NOT(전부 부정)

   ```ts
   prisma.user.findMany({
     where: {
       AND: [{ email: { startsWith: "LTS" } }, { name: "TDD" }],
       OR: [{ email: { startsWith: "LTS" } }, { name: "TDD" }],
       NOT: [{ email: { startsWith: "LTS" } }, { name: "TDD" }],
     },
   });
   ```

9. every none some

   ```ts
   prisma.user.findMany({
     where: {
       writtenPosts: {
         every: {
           // every none some
           title: "Test",
           // title: {startsWith: "Test"}
         },
       },
       // 존재 여부 확인
       // is | isNot
       author: {
         is: {
           age: 27,
         },
       },
     },
   });
   ```

> ### Update

1. update

   - 조건을 찾아서 그 대상의 데이터를 바꿀 수 있다
   - include, select 사용가능

   ```ts
   prisma.user.update({
     where: {
       email: "lts@lts.com",
     },
     data: {
       email: "lts2@lts2.com",
     },
   });
   ```

2. updateMany

   - select, include 안됨

> ### Delete

1. delete where로 찾아서 삭제
   - 이거는 하나만 삭제 가능
