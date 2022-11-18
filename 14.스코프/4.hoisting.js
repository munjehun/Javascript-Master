// 함수의 호이스팅은 함수의 선언문 전에 함수 호출이 가능하게 해줌.

print();

function print() {
  console.log("Hello");
}

// 함수와 달리 변수(let, const)와 클래스는 선언만 호이스팅이 되고, 초기화는 안된다.
// 초기화(할당) 전에 변수에 접근하면 컴파일(빌드) 🚫에러 발생

console.log(hi); //🚫ReferenceError: Cannot access 'hi' before initialization (초기화 전에는 접근 불가)
let hi = "hi";
let func1 = () => {}; // 표현식 함수도 접근 불가

const cat = new Cat(); //🚫ReferenceError: Cannot access 'Cat' before initialization
class Cat {}

let x = 1;
{
  console.log(x); //🚫ReferenceError: Cannot access 'x' before initialization
  let x = 2;
}
