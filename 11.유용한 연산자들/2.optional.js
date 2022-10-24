// 옵셔널 체이닝 연산자
// ES 11 (2020)

// 단축평가 - null 또는 undefined인 경유를 확인할 때
let item;
const price = item && item.price;
console.log(price); //undefined

// 옵셔널 체이닝
let item1;
const price1 = item1?.price;
console.log(price1); //undefined

// 예제
let obj = { name: "🐱", owner: { name: "jehun" } };
function ownerName(obj) {
  // const ownerName = obj && obj.owner && obj.owner.name;
  const ownerName = obj?.owner?.name;
  console.log(ownerName);
}
ownerName(); //undefined
