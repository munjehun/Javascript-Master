// 동결! Object.freeze : 추가 ❌, 삭제 ❌, 쓰기 ❌, 속성 재정의 ❌

const jehun = { name: "제훈" };
const dog = { name: "콩이", emoji: "🐶", owner: jehun };

Object.freeze(dog);
dog.name = "해피";
dog.age = 3;
delete dog.name;

console.log(dog); //freeze를 했기 때문에 수정 안됨!

// ❗️ 단, 얕은 freeze = 참조하는 객체는 얼리지 않음
jehun.name = "쩨훈";
console.log(dog); //{ ~~ owner: { name: '쩨훈' } }

// 밀봉! Object.seal : 값의 수정 ✅, 추가 ❌, 삭제 ❌, 속성 재정의 ❌
const cat = { ...dog };
Object.seal(cat);

cat.name = "나비";
delete cat.emoji;

console.log(cat); //{ name: '나비', emoji: '🐶', owner: { name: '쩨훈' } }

// 확장 금지! Object.preventExtensions : 추가 ❌
const tiger = { name: "호랭이" };
Object.preventExtensions(tiger);
tiger.name = "호래래랭이";
delete tiger.name;
tiger.age = 1; //❌

console.log(tiger); //{}

// 동결, 밀봉, 확장금지 확인
console.log(Object.isFrozen(dog)); //true
console.log(Object.isSealed(cat)); //true
console.log(Object.isExtensible(tiger)); //false
