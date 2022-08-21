//  Object literal {key : value}

// key - 문자, 숫자, 문자열, 심볼
// value - 원시값, 객체(함수)

let apple = {
  name: "apple",
  "hello-bye": "🖐",
  0: 1,
  ["hello-bye"]: "🖐",
};

// 속성, 데이터 접근방법
console.log(apple.name); //마침표 표기법 dot notation
console.log(apple["name"]);
console.log(apple[0]); //대괄호 표기법 braket notation
console.log(apple["hello-bye"]);

// 속성 추가
apple.emoji = "🍎";
console.log(apple.emoji); //🍎

// 속성 삭제
delete apple.emoji;
console.log(apple.emoji); //undefined
