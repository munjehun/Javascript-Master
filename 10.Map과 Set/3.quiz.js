// 퀴즈 1 - 주어진 배열에서 중복을 제거 하라 🎈 set이 아닌 배열 만들기!
const fruits = ["🍌", "🍎", "🍇", "🍌", "🍎", "🍑"];
//  ['🍌', '🍎', '🍇', '🍑']

console.log(new Set(fruits)); //Set(4) { '🍌', '🍎', '🍇', '🍑' } ❌❌❌
console.log([...new Set(fruits)]); //[ '🍌', '🍎', '🍇', '🍑' ]

// 퀴즈 2 - 주어진 두 세트의 공통된 아이템만 담고 있는 세트 만들어라
const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);

const set3 = new Set(set1 && set2);
console.log(new Set(set1 && set2)); //Set(3) { 1, 2, 3 }

function findIntersection(set1, set2) {
  const array = [...set1].filter((i) => set2.has(i));
  return new Set(array);
}
console.log(findIntersection(set1, set2)); //Set(3) { 1, 2, 3 }
