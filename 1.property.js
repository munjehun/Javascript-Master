const dog = { name: "콩이", emoji: "🐶" };

console.log(Object.keys(dog)); //[ 'name', 'emoji' ]
console.log(Object.values(dog)); //[ '콩이', '🐶' ]
console.log(Object.entries(dog)); //[ [ 'name', '콩이' ], [ 'emoji', '🐶' ] ]

// 특정 키가 있는지 확인
console.log("name" in dog); //true
console.log(dog.hasOwnProperty("name")); //true

// 오브젝트의 각각의 프로퍼티는, 프로퍼티 디스크립터(설명자) 라고 하는 객체로 저장됨.
const des = Object.getOwnPropertyDescriptors(dog);
console.log(des);
/*
{
  name: { value: '콩이', writable: true, enumerable: true, configurable: true },
  emoji: { value: '🐶', writable: true, enumerable: true, configurable: true }
}
*/

//디스크립터 수정
Object.defineProperty(dog, "name", {
  value: "블루",
  writable: false, //값 업데이트 불가
  enumerable: false, //열거 불가
  configurable: false, // 키 삭제등 수정 불가
});

console.log(Object.entries(dog)); //[ [ 'emoji', '🐶' ] ]
