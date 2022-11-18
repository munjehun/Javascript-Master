// 스코프 : 변수를 참조할 수 있는 유효한 범위, 식별자(변수, 함수, 클래스 이름)가 유효한 범위
// 식별자가 선언된 위치에 따라 스코프가 결정됨.

// 코드 블럭 : { }, if(){ }, for(){ }, function(){ } 등

// 블럭 외부에서는 블럭 내부의 변수 참조 ❌❌❌
// 블럭 내부에서는 블럭 외부의 변수 참조 ⭕️⭕️⭕️
{
  const a = "a";
  console.log(a);
}
console.log(a); //❌

// 함수 외부에서는 함수 내부의 변수 참조 ❌❌❌
function print() {
  const message = "Hello World";
  console.log(message);
}
console.log(message); //❌

// 함수 외부에서는 함수의 매개변수 참조 ❌❌❌
function sum(a, b) {
  console.log(a, b);
}
console.log(a, b); //❌
