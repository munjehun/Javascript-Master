// 배열의 함수들

// 배열 자체를 변경하는지, 새로운 배열을 반환하는지
const fruits = ["🍌", "🍎", "🍇", "🍑"];

// 💯 특정 아이템의 위치를 찾을 때
console.log(fruits.indexOf("🍎")); // 1

// 💯 특정 아이템이 배열에 있는지 확인
console.log(fruits.includes("💛")); //false

// 💯 배열에 추가 - 제일 뒤
let length = fruits.push("🍍"); //배열 자체를 수정, ❗️push는 길이를 리턴❗️
console.log(fruits); //[ '🍌', '🍎', '🍇', '🍑', '🍍' ]
console.log(length); //5

// 배열에 추가 - 제일 앞
length = fruits.unshift("🍈"); //배열 자체를 수정, ❗️unshift는 길이를 리턴❗️
console.log(fruits); //[ '🍈', '🍌', '🍎', '🍇', '🍑', '🍍' ]
console.log(length); //6

// 💯 제거 - 제일 뒤
let lastItem = fruits.pop(); //배열 자체를 수정, ❗️pop은 제거한 마지막 아이템 리턴❗️
console.log(fruits); //[ '🍈', '🍌', '🍎', '🍇', '🍑' ]
console.log(lastItem); //🍍

// 제거 - 제일 앞
lastItem = fruits.shift(); //배열 자체를 수정, ❗️shift는 제거한 첫번째 아이템 리턴❗️
console.log(fruits); //[ '🍌', '🍎', '🍇', '🍑' ]
console.log(lastItem); //🍈

// 💯 중간에 추가 또는 삭제
const deleted = fruits.splice(1, 1);
//배열 자체를 수정, splice(삭제 시작 위치, 삭제 갯수, 추가할 아이템)
console.log(fruits); //[ '🍌', '🍇', '🍑' ]
console.log(deleted); //[ '🍎' ] 삭제한 배열 리턴
fruits.splice(1, 0, "🍧", "🍦");
console.log(fruits); //[ '🍌', '🍧', '🍦', '🍇', '🍑' ]

// 💯 잘라진 새로운 배열을 만듦
let newArr = fruits.slice(0, 2);
console.log(newArr); //[ '🍌', '🍧' ]
console.log(fruits); //[ '🍌', '🍧', '🍦', '🍇', '🍑' ]
newArr = fruits.slice(1);
console.log(newArr); //[ '🍧', '🍦', '🍇', '🍑' ]
newArr = fruits.slice(-1);
console.log(newArr); //[ '🍑' ]

// 여러 배열을 붙여줌
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr1); //[ 1, 2, 3 ]
console.log(arr2); //[ 4, 5, 6 ]
console.log(arr3); //[ 1, 2, 3, 4, 5, 6 ]

// 순서 거꾸로
const arr4 = arr3.reverse();
console.log(arr4); //[ 6, 5, 4, 3, 2, 1 ]

// 중첩 배열을 하나의 배열로 쫙 펴기
let arr = [
  [1, 2, 3],
  [4, [5, 6]],
];
console.log(arr.flat()); //[ 1, 2, 3, 4, [ 5, 6 ] ]
console.log(arr.flat(2)); //[ 1, 2, 3, 4, 5, 6 ]
arr = arr.flat(2);

// 특정한 값으로 배열 채우기
// fill(채우려는 문자, 시작 인덱스, 끝 인덱스 (전까지))
arr.fill(1);
console.log(arr); //[ 1, 1, 1, 1, 1, 1 ]

arr.fill("a", 2);
console.log(arr); //[ 1, 1, 'a', 'a', 'a', 'a' ]

arr.fill("b", 3, 5);
console.log(arr); //[ 1, 1, 'a', 'b', 'b', 'a' ]

// 💯 배열을 문자열로 합하기
let text = arr.join();
console.log(text); //1,1,a,b,b,a
text = arr.join(" | ");
console.log(text); //1 | 1 | a | b | b | a
text = arr.join("");
console.log(text); //11abba
