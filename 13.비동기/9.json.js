// JSON : Javascript Object Notation (자바스크립트 객체 표기법)
// 서버와 클라이언트간의 HTTP 통신을 위한 오브젝트 형태의 텍스트 포맷

// JSON.stringify(object) : JSON화
// JSON.parse(JSON) : object화

const jehun = {
  name: "jehun",
  age: 20,
  eat() {
    console.log("eat");
  },
};

// 💯 직렬화 Serializing : 객체를 문자열(JSON)로 변환
const json = JSON.stringify(jehun);

console.log(jehun); //{ name: 'jehun', age: 20, eat: [Function: eat] }
console.log(json); //{"name":"jehun","age":20} ❗️ 함수는 데이터가 아니라서 JSON에 포함되지 않는다. 즉, 프로퍼티만 들어간다.

// 💯 역직렬화 Deserializing : 문자열 데이터(JSON)을 자바스크립트 객체로 변환
const obj = JSON.parse(json);

console.log(obj); //{ name: 'jehun', age: 20 }
