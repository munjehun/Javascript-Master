// 증가 & 감소 연산자 Increment & Decrement Operator

let a = 0;
console.log(a); // 0

a++; // a = a + 1;
console.log(a); // 1

a--; // a = a - 1;
console.log(a); // 0

//📌주의
// a++ 필요한 연산을 하고, 그 뒤에 값을 증가시킴
// ++a 값을 먼저 증가하고, 필요한 연산을 함

a = 0;

console.log(a++); //0 => 할당을 먼저 하고 +1 (for문에서 i++을 하는 이유!)
console.log(a); //1
console.log(++a); //2 => +1을 먼저 하고 할당
console.log(a); //2
