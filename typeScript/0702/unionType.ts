// [1]
let value: string | number;

value = "Hello";
console.log(value); // 출력: Hello

value = 123;
console.log(value); // 출력: 123

// value = true; // 오류: 'boolean' 타입은 'string | number' 타입에 할당될 수 없습니다.


// [2]
function printId(id: number | string) {
  console.log(`ID: ${id}`);
}

printId(101); // 출력: ID: 101
printId("202"); // 출력: ID: 202


// [3]
type Dog = {
  breed: string;
  bark: () => void;
};

type Cat = {
  breed: string;
  meow: () => void;
};

type Pet = Dog | Cat;

function makeSound(pet: Pet) {
  if ("bark" in pet) {
    pet.bark();
  } else {
    pet.meow();
  }
}

const myDog: Dog = { breed: "Labrador", bark: () => console.log("Woof!") };
const myCat: Cat = { breed: "Persian", meow: () => console.log("Meow!") };

makeSound(myDog); // 출력: Woof!
makeSound(myCat); // 출력: Meow!


// [4]
let items: (number | string)[] = [1, "two", 3, "four"];

items.forEach((item) => {
  if (typeof item === "number") {
    console.log(`Number: ${item}`);
  } else {
    console.log(`String: ${item}`);
  }
});

// 출력:
// Number: 1
// String: two
// Number: 3
// String: four


// [5]
type SuccessResponse = {
  status: "success";
  data: string;
};

type ErrorResponse = {
  status: "error";
  error: string;
};

type typeResponse = SuccessResponse | ErrorResponse;

function handleResponse(response: typeResponse) {
  if (response.status === "success") {
    console.log(`Data: ${response.data}`);
  } else {
    console.log(`Error: ${response.error}`);
  }
}

const success: SuccessResponse = {
  status: "success",
  data: "This is the data",
};
const error: ErrorResponse = { status: "error", error: "Something went wrong" };

handleResponse(success); // 출력: Data: This is the data
handleResponse(error); // 출력: Error: Something went wrong
