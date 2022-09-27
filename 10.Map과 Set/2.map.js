const map = new Map([
  //배열의 형식으로 프로퍼티 설정
  ["key1", "🍎"], //값을 따옴표로 씌우지 않으면 변수로 인식
  ["key2", "🍌"],
]);
console.log(map); //Map(2) { 'key1' => '🍎', 'key2' => '🍌' }

// 사이즈 확인
console.log(map.size); //2

// 💯💯💯 key를 이용해 찾고 더하고 빼고 💯💯💯

//존재하는지 확인
console.log(map.has("key1")); //true

//순회
map.forEach((value, key) => console.log(key, value)); /*
key1 🍎
key2 🍌*/
console.log(map.keys()); //[Map Iterator] { 'key1', 'key2' }
console.log(map.values()); //[Map Iterator] { '🍎', '🍌' }
console.log(map.entries()); //[Map Entries] { [ 'key1', '🍎' ], [ 'key2', '🍌' ] }

//찾기
console.log(map.get("key1")); //🍎
console.log(map.get("key2")); //🍌
console.log(map.get("key3")); //undefined

//추가
map.set("key3", "🥝");
console.log(map); //Map(3) { 'key1' => '🍎', 'key2' => '🍌', 'key3' => '🥝' }

//삭제
map.delete("key3");
console.log(map); //Map(2) { 'key1' => '🍎', 'key2' => '🍌' }

//전부 삭제
map.clear();
console.log(map); //Map(0) {}

//객체와 차이점 : 사용가능한 함수가 다르다.
const key = { name: "milk", price: 10 };
const milk = { name: "milk", price: 10, description: "맛있는 우유" };

const obj = { [key]: milk };
console.log(obj); //  { '[object Object]': { name: 'milk', price: 10, description: '맛있는 우유' } }
console.log(obj[key]); //{ name: 'milk', price: 10, description: '맛있는 우유' }

const map2 = new Map([[key, milk]]);
console.log(map2); // { { name: 'milk', price: 10 } => { name: 'milk', price: 10, description: '맛있는 우유' } }
console.log(map2.get(key)); //{ name: 'milk', price: 10, description: '맛있는 우유' }
