const fruits = ["🍌", "🍓", "🍇", "🍓"];

// 배열을 빙글빙글 돌면서 원하는 것을 할 때

// for문
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//forEach 함수
fruits.forEach(function (value, index, array) {
  console.log("-------------------------");
  console.log(value);
  console.log(index);
  console.log(array);
});
/*
-------------------------
🍌
0
[ '🍌', '🍓', '🍇', '🍓' ]
-------------------------
🍓
1
[ '🍌', '🍓', '🍇', '🍓' ]
-------------------------
🍇
2
[ '🍌', '🍓', '🍇', '🍓' ]
-------------------------
🍓
3
[ '🍌', '🍓', '🍇', '🍓' ]
*/

// 많이 쓰이는 value만
fruits.forEach((value) => console.log(value));
/*
🍌
🍓
🍇
🍓
*/

// 조건에 맞는 아이템을 찾을 때
const item1 = { name: "🥔", price: 2 };
const item2 = { name: "🍘", price: 3 };
const item3 = { name: "🍥", price: 1 };
const products = [item1, item2, item3, item2];

// 💯 find : 제일 먼저 조건에 맞는 아이템을 반환
let found = products.find((value) => value.name === "🥔");
console.log(found); //{ name: '🥔', price: 2 }

// 💯 findIndex : 제일 먼저 조건에 맞는 아이템의 인덱스를 반환
found = products.findIndex((value) => value.name === "🥔");
console.log(found); //0

// 💯 filter : 조건에 맞는 아이템을 새로운 배열로 전부 반환
found = products.filter((item) => item.name === "🍘");
console.log(found); //[ { name: '🍘', price: 3 }, { name: '🍘', price: 3 } ]

// some : 배열의 아이템들이 부분적으로 조건(콜백함수)에 맞는지 확인
found = products.some((item) => item.name === "🥔"); //배열중에 하나라도 있으면 true 반환
console.log(found); //true

// every : 배열의 아이템이 전부 조건(콜백함수)에 맞는지 확인
found = products.every((item) => item.name === "🥔"); //배열중 전부 조건에 맞으면 true 반환
console.log(found); //false

//---------------------------------------------------------------------------------------

const nums = [1, 2, 3, 4, 5];

// map
let result = nums.map((item) => [1, 2]);
console.log(result); //[ [ 1, 2 ], [ 1, 2 ], [ 1, 2 ], [ 1, 2 ], [ 1, 2 ] ]

// flatmap : map의 결과가 배열로 중첩될 때 쫙 펴줌
result = nums.flatMap((item) => [1, 2]);
console.log(result); //[ 1, 2, 1, 2, 1,2, 1, 2, 1, 2 ]

// 활용
result = ["asd", "zxc"].map((item) => item.split(""));
console.log(result); //[ [ 'a', 's', 'd' ], [ 'z', 'x', 'c' ] ]

result = ["asd", "zxc"].flatMap((item) => item.split(""));
console.log(result); //[ 'a', 's', 'd', 'z', 'x', 'c' ]
