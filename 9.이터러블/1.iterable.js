/*
iterator : 반복자
iterable : 반복 가능한

Iterable 하다는 것은 순회가 가능하다는 것!
[Symbol.iterator]() : Iterator;
 👆 심볼 정의를 가진 객체나, 특정한 함수가 Iterator를 리턴한다는 것은 순회 가능한 객체이다!
순회가 가능하면 for.. of, spread 를 사용할 수 있다.*/

const array = [1, 2, 3];

for (const item of array) {
  console.log(item);
}
// ==> for (let i of arrray){}

const iterator = array.values();
console.log(iterator.next()); //{ value: 1, done: false }
console.log(iterator.next().value); //2
console.log(iterator.next().value); //3
console.log(iterator.next().value); //undefined
console.log(iterator.next().done); //true
while (true) {
  const item = iterator.next();
  if (item.done) break; //true면 끝내기
  console.log(item.value);
}

// Iterable 하지 않은 것은 for.. in 사용가능
const obj = { 0: 1, 1: 2 };

for (const item in obj) {
  console.log(item); //key를 출력
}
