// var 의 특징 💩💩💩

// - 일반 코딩 방식과 어긋나서 개발하면서 멘붕옴
// - 코드의 가독성과 유지보수성이 좋지 않음

// 1️⃣ 변수 선언하는 키워드 없이 선언 & 할당이 가능. 👉 선언인지 재할당인지 구분 어려움.
something = "💩";
console.log(something);

// 2️⃣ 변수의 중복 선언이 가능 (let, const는 중복 선언하는 즉시 에러 표시)
var poo = "💩";
var poo = "💩";

let pooo = "💩";
// let pooo = "💩"; //SyntaxError: Identifier 'pooo' has already been declared

// 3️⃣ 블록 레벨의 스코프 안됨
var apple = "사과";
{
  var apple = "🍎";
  {
    var apple = "🍏";
  }
}
console.log(apple); // 🍏

// 4️⃣ 함수 레벨 스코프만 지원
function example() {
  var dog = "🐶";
}
console.log(dog); //ReferenceError: dog is not defined
