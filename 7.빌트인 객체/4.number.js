const num1 = 123;
const num2 = new Number(123);
console.log(typeof num1); //number
console.log(typeof num2); //object (이렇게 만드는건 메모리 낭비)

console.log(Number.MAX_VALUE); //1.7976931348623157e+308 : 쓸 수 있는 가장 큰 수
console.log(Number.MIN_VALUE); //5e-324 : 쓸 수 있는 가장 작은 수
console.log(Number.MAX_SAFE_INTEGER); //9007199254740991 : 정수에서 쓸 수 있는 가장 큰 수
console.log(Number.MIN_SAFE_INTEGER); //-9007199254740991 : 정수에서 쓸 수 있는 가장 작은 수
console.log(Number.NaN); //NaN
console.log(Number.NEGATIVE_INFINITY); //-Infinity
console.log(Number.POSITIVE_INFINITY); //Infinity

// 사용 예제
if (num1 < Number.MAX_VALUE) {
}
if (Number.isNaN(num1)) {
}

// 지수 표기법 (매우 크거나 작은 숫자를 표기, 10의 n승으로 표기)
const num3 = 103;
console.log(num3.toExponential()); //1.03e+2 = 1.03 * 10^2

// 반올림
const num4 = 1234.12;
console.log(num4.toFixed()); //toFixed()안에 인자로 수를 넣으면 그 수만큼 소수점 자릿수 출력.
console.log(num4.toFixed(1));
console.log(num4.toFixed(2));

console.log(Math.round(num4)); //1234 (문자열 아니고 Number 타입)

console.log(num4.toPrecision(6)); //1234.12
console.log(num4.toPrecision(5)); //1234.1
console.log(num4.toPrecision(4)); //1234

// Epsilon
console.log(Number.EPSILON); // 0과 1 사이에서 나타낼 수 있는 가장 작은 수
const num = 0.1 + 0.2 - 0.2;
console.log(num); //0.10000000000000003 2진수로 계산하기 때문에 오차 발생
// => 실수끼리 계산하면 예상과 미묘한 차이가 있을 수 있다! (그럴땐 오차범위로 엡실론 사용하기)

function isEqual(a, b) {
  return a === b;
}
console.log(isEqual(1, 1)); //같은 수다.
console.log(isEqual(num, 0.1)); //다른 수다.
