//  Object literal : 중괄호 안에 key와 value를 넣어 객체를 만드는 방법 {key : value}

// key - 문자, 숫자, 문자열, 심볼
// value - 원시값, 객체(함수)

let x = 1,
  y = 2;
let apple = {
  name: "apple",
  "hello-bye": "🖐",
  0: 1,
  ["hello-bye"]: "🖐",
  x: x,
  y, //프로퍼티 값으로 변수를 사용하는 경우 프로퍼티 키와 변수명이 같을 때, 프로퍼티 키 생략 가능
};

// 속성, 데이터 접근방법
// 마침표 표기법 dot notation
console.log(apple.name);

// 대괄호 표기법 braket notation => 키 값에 특수문자나 빈 칸 있을 때 사용. 💯대괄호 안 따옴표 쓰기!!
console.log(apple["name"]);
console.log(apple[0]);
console.log(apple["hello-bye"]);
console.log(apple.y); //2

// 속성 추가
apple.emoji = "🍎";
console.log(apple.emoji); //🍎

// 속성 삭제
delete apple.emoji;
console.log(apple.emoji); //undefined
