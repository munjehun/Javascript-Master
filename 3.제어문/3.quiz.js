// 퀴즈!
// num의 숫자가 짝수이면 👍, 홀수이면 👎 을 출력
let num = undefined;

// if
if (num % 2 == 0) {
  console.log("👍");
} else {
  console.log("👎");
}

// ternary
num % 2 == 0 ? console.log("👍") : console.log("👎");

let emoji = num % 2 == 0 ? "👍" : "👎";
console.log(emoji);

console.log(num % 2);
