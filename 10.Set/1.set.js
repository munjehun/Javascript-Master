// Set
const set = new Set([1, 2, 3]);
console.log(set); //Set(3) { 1, 2, 3 }

// set. => 가능한 메서드들 나옴

// 사이즈 확인
console.log(set.size); //3

// 특정 원소 존재여부 확인
console.log(set.has(2)); //true
console.log(set.has(6)); //false

// 순회
set.forEach((i) => console.log(i));

for (let i of set) {
  console.log(i);
}

// 원소 추가
set.add(5);
console.log(set); //Set(4) { 1, 2, 3, 5 }
console.log([...set]); // [ 1, 2, 3, 5 ]
// 💯💯💯 중복 불가!!!!! 💯💯💯

//원소 삭제
set.delete(5);
console.log(set); //Set(3) { 1, 2, 3 }

//전부 삭제
set.clear();
console.log(set); //Set(0) {}

// 오브젝트 세트
const obj1 = { name: "🍊", price: 5 };
const obj2 = { name: "🍍", price: 3 };
const objs = new Set([obj1, obj2]);
console.log(objs); //Set(2) { { name: '🍊', price: 5 }, { name: '🍍', price: 3 } }

// 퀴즈
obj1.price = 10;
objs.add(obj1);
console.log(objs); //(얕은 복사) Set(2) { { name: '🍊', price: 10 }, { name: '🍍', price: 3 } }

// 퀴즈
const obj3 = { name: "🍍", price: 3 };
objs.add(obj3); //obj2와 같은 값을 할당한 변수를 넣으면 어떻게 될까? obj3가 들어갈까?
console.log(objs); //obj2와 obj3는 각각 다른 참조값을 가지므로 추가된다!
// Set(3) {{ name: '🍊', price: 10 },{ name: '🍍', price: 3 },{ name: '🍍', price: 3 }}

obj3.price = 12; //obj2의 price도 바뀔까??
console.log(objs); //ㄴㄴ obj3의 price만 바뀐다.
// Set(3) {{ name: '🍊', price: 10 },{ name: '🍍', price: 3 },{ name: '🍍', price: 12 }}
