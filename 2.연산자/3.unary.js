// 단항 연산자
//  + (양)
//  - (음)
//  ! (부정)

let boolean = true;
console.log(boolean);
console.log(!boolean); //false
console.log(!!boolean); //true

//  (+) 숫자가 아닌 타입들을 숫자로 변환하면 어떤 값이 나오는지 확인할 수 있음
console.clear();
console.log(+false); //0
console.log(+null); //0
console.log(+""); //0
console.log(+"1"); //1
console.log(+true); //1
console.log(+"text"); // NaN
console.log(+undefined); //NaN
