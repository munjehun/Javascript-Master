// Math
// static method : class 이름만으로도 사용할 수 있는 함수 <->instance method : 객체를 만들어서 접근할 수 있는 함수

// 절댓값
console.log(Math.abs(-12));
// 소수점 이하 올림
console.log(Math.ceil(1.4));
// 소수점 이하 내림
console.log(Math.floor(1.4));
// 소수점 이하 반올림
console.log(Math.round(1.4));
// 정수만 반환
console.log(Math.trunc(1.2412));

// 💯💯💯 많이 쓰이는 함수
// 최대, 최솟값
console.log(Math.max(1, 5, 3, 65));
console.log(Math.min(1, 5, 3, 65));
// 거듭제곱
console.log(Math.pow(3, 3));
console.log(3 ** 3);
// 제곱근
console.log(Math.sqrt(9));
// 랜덤한 수 반환 (0~1 사이)
console.log(Math.random());
console.log(Math.random() * 10);
console.log(Math.floor(Math.random() * 10));
