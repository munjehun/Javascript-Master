// 불리언 타입
let 참 = true;
let 거짓 = false;
console.log(참);
console.log(거짓);

//활용 예
let isFree = true;
let isActivated = false;
console.log(isFree);

console.clear();
//Falshy 거짓인 값
console.log(!!0); //느낌표 2개를 붙이면 true 나 false값으로 변환!!
console.log(!!-0);
console.log(!!'');
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);

//Truthy 참인 값
console.log(!!1);
console.log(!!-1);
console.log(!!'text');
console.log(!!{});
console.log(!!Infinity);
