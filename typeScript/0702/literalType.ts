// 문자
type Direction = "Up" | "Down" | "Left" | "Right";

let move: Direction;

move = "Up";   // 정상
move = "Down"; // 정상
// move = "Forward"; // 오류: '"Forward"'는 'Direction' 타입에 할당될 수 없습니다.

function moveCharacter(direction: Direction) {
    console.log(`Moving ${direction}`);
}

moveCharacter("Left"); // 출력: Moving Left

// 숫자
type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;

let roll: DiceRoll;

roll = 1; // 정상
roll = 6; // 정상
// roll = 7; // 오류: '7'은 'DiceRoll' 타입에 할당될 수 없습니다.

function rollDice(): DiceRoll {
    return (Math.floor(Math.random() * 6) + 1) as DiceRoll;
}

console.log(rollDice()); // 1에서 6 사이의 값 출력

// 불리언
type TrueType = true;

let isTrue: TrueType;

isTrue = true;  // 정상
// isTrue = false; // 오류: 'false'는 'TrueType' 타입에 할당될 수 없습니다.

// 복합
type Answer = "Yes" | "No" | 0 | 1;

let response: Answer;

response = "Yes"; // 정상
response = 0;     // 정상
// response = "Maybe"; // 오류: '"Maybe"'는 'Answer' 타입에 할당될 수 없습니다.

function getResponse(answer: Answer) {
    console.log(`Response received: ${answer}`);
}

getResponse("No"); // 출력: Response received: No
getResponse(1);    // 출력: Response received: 1

// enum과 literal
enum Status {
    Success = "SUCCESS",
    Error = "ERROR"
}

type ApiResponse = {
    status: Status;
    message: string;
}

function handleApiResponse(response: ApiResponse) {
    if (response.status === Status.Success) {
        console.log(`Success: ${response.message}`);
    } else {
        console.log(`Error: ${response.message}`);
    }
}

const successResponse: ApiResponse = {
    status: Status.Success,
    message: "Data retrieved successfully"
};

const errorResponse: ApiResponse = {
    status: Status.Error,
    message: "Failed to retrieve data"
};

handleApiResponse(successResponse); // 출력: Success: Data retrieved successfully
handleApiResponse(errorResponse);   // 출력: Error: Failed to retrieve data
