// 배열 생성 방법
let array = new Array(2);
console.log(array); //[ <2 empty items> ]

array = new Array(2, 3, 4);
console.log(array); //[ 2, 3, 4 ]

array = [3, 4, 5];
console.log(array); //[ 3, 4, 5 ]

array = Array.from("text");
console.log(array); //[ 't', 'e', 'x', 't' ]

// 일반적으로 배열은 동일한 메모리 크기를 가지며, 연속적으로 이어져 있어야 함.
// 하지만 자바스크립트의 배열은 연속적으로 이어져있지 않고,
// ❗️오브젝트(객체)와 비슷하다❗️

// 자바스크립트의 배열은 일반적인 배열의 동작을 흉내낸 특수한 객체!
// 이걸 보완하기 위해 타입이 정해져 있는 타입 배열이 있음

// 객체로 배열 만들기
array = Array.from({
  0: "안",
  1: "녕",
  length: 3,
});
console.log(array); //[ '안', '녕', undefined ]
