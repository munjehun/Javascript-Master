/*Spread 연산자, 전개구문
모든 Iterable은 Spread 될 수 있다.
순회가 가능한 모든 것들은 촤르르륵 펼쳐질 수 있다.
func(...iterable)
[...iterable]
{...obj}

ES2018에 추가됨
*/

function add(a, b, c) {
  return a + b + c;
}

const nums = [1, 2, 3, 4, 5, 6, 7];
console.log(add(...nums));

function sum(first, second, ...nums) {
  console.log(nums);
}
sum(...nums); //[ 3, 4, 5, 6, 7 ]

// concat()을 대체
const fruits1 = ["🍊", "🍇"];
const fruits2 = ["🍉", "🍓"];

let arr = fruits1.concat(fruits2);
console.log(arr); //[ '🍊', '🍇', '🍉', '🍓' ]

arr = [...fruits1, ...fruits2];
console.log(arr); //[ '🍊', '🍇', '🍉', '🍓' ]

// 객체에서도 사용가능
const jh = { name: "jh", age: 20, home: { address: "home" } };
const updated = { ...jh, job: "s/w engineer" };

jh.home.address = "school"; // => updated의 값도 바뀜
jh.home = "school"; // => jh의 값만 바뀜

console.log(jh); //{ name: 'jh', age: 20 }
console.log(updated); //{ name: 'jh', age: 20, job: 's/w engineer' }
