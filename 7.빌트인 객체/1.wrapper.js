// 래퍼 객체 (Wrapper Object) : 원시값을 필요에 따라서 관련된 빌트인 객체로 변환
// ex) number 원시타입 => number 객체, string 원시타입 => string 객체

const number = 123; // number 원시타입
console.log(number.toString()); // 원시타입이 Number 객체로 감싸짐.
console.log(number); // number 원시타입

const text = "text";
console.log(text); // String 문자열 원시타입
console.log(text.length); // String 객체로 감싸짐
console.log(text.trim());
