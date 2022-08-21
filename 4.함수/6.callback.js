// 콜백 함수 : 외부로부터 주어지는 함수
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

// 전달된 action은 콜백함수.
// 전달될 당시에 함수를 호출해서 반환된 값을 전달하는 것이 아니라,
// 함수를 가리키고 있는 함수의 레퍼런스(참조값)가 전달된다.
// 그래서 함수는 고차함수 안에서 필요한 순간에 호출이 나중에 됨.
function calculator(a, b, action) {
  if (a < 0 || b < 0) {
    return;
  }
  let result = action(a, b); //action은 add나 multiply의 참조값을 전달
  console.log(result);
  return result;
}

calculator(2, 5, add); //7
calculator(2, 5, multiply); //10
calculator(-1, 5, add); //
calculator(-1, 5, multiply); //
