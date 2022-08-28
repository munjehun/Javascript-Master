const text = "Hello World!";
console.log(text);
console.log(text.length);

console.log(text[0]);
console.log(text[1]);
console.log(text[2]);
console.log(text.charAt(0));
console.log(text.charAt(1));
console.log(text.charAt(2));

// 특정 문자열 찾기
console.log(text.indexOf("o")); //처음부터 시작해 처음 발견하는 위치 반환
console.log(text.lastIndexOf("o")); //뒤부터 시작해 처음 발견하는 위치 반환

// 특정 문자열 포함 여부
console.log(text.includes("dd"));
console.log(text.includes("or"));

// 특정 문자열 시작 & 끝 여부
console.log(text.startsWith("h")); //대소문자 가린다.
console.log(text.endsWith("!"));

// 대문자화, 소문자화
console.log(text.toUpperCase());
console.log(text.toLowerCase());

// 특정 위치의 문자열 가져오기
console.log(text.substring(0, 4)); //0 ~ 3 번째 문자열 반환 (Hell)
console.log(text.substring(-2));
console.log(text.slice(0, 4));
console.log(text.slice(-2));

// 빈칸 제거
const space = "                  space       ";
console.log(space.trim()); //'space'

// 💯 split : 구분자 단위로 잘라서 배열로 전환
const longText = "get to the, point!";
console.log(longText.split(" ")); //[ 'get', 'to', 'the,', 'point!' ]
console.log(longText.split(" ", 2)); //[ 'get', 'to' ]
console.log(longText.split(", ", 2)); //[ 'get to the', 'point!' ]
