// 동등 비교 관계 연산자 (Equality operator)

// == 같다
// != 같지않다
// === 타입까지 같음
// !== 값고 타입이 다름

console.log(2 == "2"); //true
console.log(2 === "2"); //false
console.log(true == 1); //true
console.log(true === 1); //false

console.clear();

const obj1 = {
  name: "js",
};

const obj2 = {
  name: "js",
};

console.log(obj1 == obj2); //false (메모리에 다른 참조값이 들어가있기 때문)
let obj3 = obj2;
console.log(obj2 == obj3); //true (메모리에 같은 참조값이 들어가있기 때문)
