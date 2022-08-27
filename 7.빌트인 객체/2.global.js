// 글로벌 함수 : 글로벌적으로 사용할 수 있는 함수
console.log(globalThis); // 윈도우에서는 this

// 노드에서 사용하는 글로벌 객체들
console.log(this);
console.log(Infinity);
console.log(NaN);
console.log(undefined);

eval("const num = 2; console.log(num)");
console.log(isFinite(1)); //무한유무
console.log(parseFloat("12.23")); //실수로 변환
console.log(parseInt(12.33)); //정수로 변환

// URL (URI) 은 아스키 문자로만 구성되어야 함 (한글❌, 특수문자❌)
const URL = "http://제훈넷.com";

const encoded = encodeURI(URL);
console.log(encoded); //http://%EC%A0%9C%ED%9B%88%EB%84%B7.com

const decoded = decodeURI(encoded);
console.log(decoded); //http://제훈넷.com

// 전체 URL이 아닌 부분적인 URL은 Component 사용
const part = "제훈넷.com";
console.log(encodeURIComponent(part)); //%EC%A0%9C%ED%9B%88%EB%84%B7.com
