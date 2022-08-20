//return을 명시하지 않으면 자동으로 return undefined를 리턴한다.
function add(a, b) {
  // return a + b;
  return undefined;
}

let result = add(1, 2);
console.log(result);

// return을 함수 중간에 넣게 되면 함수가 종료!
// 예시 : 조건이 맞지 않는 경우 함수 도입부분에서 함수를 일찍이 종료함!
function print(num) {
  if (num > 23) {
    return; // return만 있으면 함수를 끝내겠다는 뜻!
  }
  console.log(num);
}
print(24);
