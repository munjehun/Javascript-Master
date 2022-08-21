const obj = {
  name: "제훈",
  age: 20,
};

// 코딩하는 시점에, 정적으로 접근 확정
obj.name;
obj.age;

// 📌동적으로 접근 => 대괄호 표기법 사용

// 1.전달되는 값에 따라 key값을 찾음.
function getValue(obj, key) {
  return obj[key];
}
console.log(getValue(obj, "name")); //제훈

// 2.전달되는 값에 따라 key값, value값 추가
function addKey(obj, key, value) {
  obj[key] = value;
}
addKey(obj, "job", "baeksu");
console.log(obj); //{ name: '제훈', age: 20, job: 'baeksu' }

// 3. 전달되는 값에 따라 삭제
function deleteKey(obj, key) {
  delete obj[key];
}
deleteKey(obj, "job");
console.log(obj); //{ name: '제훈', age: 20 }
