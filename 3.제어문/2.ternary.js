// 삼항 조건 연산자 Ternary Operator
// 조건식 ? 참인 경우 : 거짓인 경우

let fruit = "a";

if (fruit === "apple") {
  console.log("🍎");
} else {
  console.log("🍖");
}
// 는
fruit === "apple" ? console.log("🍎") : console.log("🍖");
// 과 같다.

// 조건에 따라 변수에 어떤 것을 할당할 것인지도 정할 수 있다.
let emoji = fruit === "apple" ? "🍎" : "🍖";
console.log(emoji);
