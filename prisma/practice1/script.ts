import { PrismaClient } from "@prisma/client";

// log가 있고 모든 쿼리를 로그아웃하여 배열을 제공하고
// 거기에 쿼리를 넣을 수 있다.
// 그러니까 서버 실행하고 로그로 query 기록을 볼 수 있다는 말임.
// const prisma = new PrismaClient({ log: ["query"] });

const prisma = new PrismaClient();
// use `prisma` in your application to read and write data in your DB

async function main() {
  // prisma code
  // 사람 넣기
  // const user = await prisma.user.create({data: {name: "DDoong"}})
  // console.log(user)
  // 사람 찾기
  // const users = await prisma.user.findMany();
  // console.log(users);
  // 충돌 해결을 위해 지우기
  await prisma.user.deleteMany();
  // create는 하나의 데이터만 보내고
  // createMany는 data를 배열로 보냄
  const user = await prisma.user.create({
    // data에 필수 입력 데이터가 들어가지 않으면 오류 발생
    // name, email, age, isAdmin, preferences, blob이 필수로 되어있음
    data: {
      name: "LTS",
      email: "lts@test.com",
      age: 29,
      isAdmin: false, // 이 필드가 필수로 요구됨
      preferences: {}, // 필수 필드라면 해당 값 제공
      blob: Buffer.from(""), // 빈 버퍼 할당
      userPreference: {
        create: {
          emailUpdates: true,
        },
      },
    },
    // emailUpdates에 대한 이메일 기본 설정을 반환받으려면 다음과같이 추가해야 한다.
    // include는 전체 반환
    // include: {
    //   userPreference: true,
    // },
    select: {
      name: true,
      userPreference: { select: { id: true } },
    },
  });
  console.log(user);
  const users = await prisma.user.createMany({
    data: [
      {
        name: "LTS2",
        email: "lts2@test.com",
        age: 22,
        isAdmin: false, // 이 필드가 필수로 요구됨
        preferences: {}, // 필수 필드라면 해당 값 제공
        blob: Buffer.from(""), // 빈 버퍼 할당
      },
      {
        name: "TDD",
        email: "tdd@test.com",
        age: 31,
        isAdmin: false, // 이 필드가 필수로 요구됨
        preferences: {}, // 필수 필드라면 해당 값 제공
        blob: Buffer.from(""), // 빈 버퍼 할당
      },
    ],
    // 여기서는 select를 사용할 수 없음
    // select: {
    //   name: true,
    //   userPreference: { select: { id: true } },
    // },
  });
  console.log(users);
}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
