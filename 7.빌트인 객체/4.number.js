const num1 = 123;
const num2 = new Number(123);
console.log(typeof num1); //number
console.log(typeof num2); //object (이렇게 만드는건 메모리 낭비)

console.log(Number.MAX_VALUE); //1.7976931348623157e+308
console.log(Number.MIN_VALUE); //5e-324
console.log(Number.MAX_SAFE_INTEGER); //9007199254740991
console.log(Number.MIN_SAFE_INTEGER); //-9007199254740991
console.log(Number.NaN); //NaN
console.log(Number.NEGATIVE_INFINITY); //-Infinity
console.log(Number.POSITIVE_INFINITY); //Infinity

// 사용 예제
if (num1 < Number.MAX_VALUE) {
}
if (Number.isNaN(num1)) {
}

// 지수 표기법 (매우 크거나 작은 숫자를, 10의 n승으로 표기)
const num3 = 103;
console.log(num3.toExponential()); //1.03e+2 = 1.03 * 10^2

// 반올림하여 문자열로 변환
const num4 = 1234.12;
console.log(num4.toFixed()); //toFixed()안에 인자로 수를 넣으면 그 수만큼 소수점 자릿수 출력.
console.log(num4.toString());
