// 논리 연산자

// && 그리고
// || 또는

// 단축 평가 : 표현식을 평가하는 도중에 평가 결과가 확정된 경우 나머지 평가 과정을 생략하는 것.

const obj1 = { name: "🐹" };
const obj2 = { name: "🐶", owner: "jehun" };
if (obj1 && obj2) console.log("둘 다 true!"); //둘 다 값이 있으므로 true!

let result = obj1 && obj2;
console.log(result); //{ name: '🐶', owner: 'jehun' }

result = obj1 || obj2;
console.log(result); //{ name: '🐹' }

// 활용 예
// 조건이 truthy일 때 && 무언가를 해야 할 경우
// 조건이 falshy일 때 || 무언가를 해야 할 경우

function changeOwner(animal) {
  if (!animal.owner) {
    throw new Error("주인이 없어");
  }
  animal.owner = "바뀐 주인!";
}
function makeNewOwner(animal) {
  if (animal.owner) {
    throw new Error("주인이 있어");
  }
  animal.owner = "새로운 주인!";
}

obj1.owner && changeOwner(obj1);
obj2.owner && changeOwner(obj2);
console.log(obj1);
console.log(obj2);

obj1.owner || makeNewOwner(obj1);
obj2.owner || makeNewOwner(obj2);
console.log(obj1);
console.log(obj2);

// null 또는 undefined인 경유를 확인할 때
let item;
const price = item && item.price;
console.log(price); //undefined

// 기본값을 설정
function print(message) {
  const text = message || "Hello";
  console.log(text);
}
print(); //Hello
