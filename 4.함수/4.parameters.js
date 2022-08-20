// 매개변수의 기본값은 undefined
// 매개변수의 정보는 함수 내부에서 접근이 간으한 arguments 객체에 저장됨

function add(a = 1, b = 2) {
  // 매개변수 기본값 (값 안넣으면) Default Parameters a = 1, b = 2
  // 매개변수에 값을 넣으면 넣은 값으로 적용!
  console.log(a);
  console.log(b);
  console.log(arguments);
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
  return a + b;
}
add(1, 2, 3); /*
1
2
[Arguments] { '0': 1, '1': 2, '2': 3 }
1
2
3*/
