// 함수 선언문 function name() { }
function add1(a, b) {
  return a + b;
}

// 함수 표현식 const name = function() { }
// 함수를 선언하면서 변수에 할당! 메모리에 할당!
let add2 = function (a, b) {
  return a + b;
};

// 화살표 함수 const name = () => { }
let add3 = (a, b) => {
  return a + b;
};

let add4 = (a, b) => a + b; //값만 리턴하는 함수라면 return, 중괄호 안적어도 됨

// 함수 표현식은 선언된 다음부터 사용이 가능한 반면,
// 선언식은 호이스팅이 되기 때문에 선언되기 전에 호출해도 사용 가능.

// ➕ IIFE ( Immediately Invoked Function Expressions) : 함수 선언문 즉시 실행
(function run() {
  console.log("➕");
})();
