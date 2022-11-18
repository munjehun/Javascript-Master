// 엄격 모드 strict mode
// 리액트와 같은 프레임워크 사용시 기본적으로 엄격 모드

"use strict"; //느슨한 모드(sloppy mode) 해제
// - 기존에는 조용히 무시되던 에러들을 발생시킨다.
// - 자바스크립트 엔진의 최적화 작업을 어렵게 만드는 실수들을 바로잡는다.
// 등등

const array = [1, 2, 3];
for (let num of array) {
  //⭕️
  console.log(num);
}

for (num of array) {
  //❌
  console.log(num); //ReferenceError: num is not defined
}

// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
