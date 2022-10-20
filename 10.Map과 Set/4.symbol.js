// Symbol 심벌
// 유일한 키를 생성할 수 있음 🔑

const map = new Map();
const key1 = "key";
const key2 = "key";
map.set(key1, "Hello"); // == map.set('key','Hello')
console.log(map.get(key2)); //== map.get('key')
console.log(key1 === key2); //true

// 심벌 사용시
const key3 = Symbol("key");
const key4 = Symbol("key");
map.set(key3, "Hello");
console.log(map.get(key4)); //undefined
console.log(key3 === key4); //false

//전역 심벌 레지스트리 (Global Symbol Registry) : 다른 변수에 같은 심벌을 할당
const k1 = Symbol.for("key");
const k2 = Symbol.for("key");
console.log(k1 === k2); //true

console.log(Symbol.keyFor(k1)); //전역 심벌 레지스트리로 만든 심벌의 정보 가져올 수 있다. (key)
console.log(Symbol.keyFor(key3)); //undefined

// 사용방법 : 문자열이라도 유니크한 값을 정할 때 사용
