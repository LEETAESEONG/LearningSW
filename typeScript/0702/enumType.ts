// 숫자형 Enum

enum Direction {
    Up,
    Down,
    Left,
    Right
}

// Enum 사용 예시
let direction: Direction = Direction.Up;

console.log(direction); // 출력: 0
console.log(Direction[direction]); // 출력: "Up"

// Enum 활용 예시
enum Weekday {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

function isWeekend(day: Weekday): boolean {
    return day === Weekday.Sunday || day === Weekday.Saturday;
}

// 함수 사용 예시
let today: Weekday = Weekday.Wednesday;

console.log(today); // 출력: 3
console.log(isWeekend(today)); // 출력: false

let saturday: Weekday = Weekday.Saturday;

console.log(saturday); // 출력: 6
console.log(isWeekend(saturday)); // 출력: true

// 문자열형 Enum

enum Directions {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}

// Enum 사용 예시
let directions: Directions = Directions.Up;

console.log(directions); // 출력: "UP"
