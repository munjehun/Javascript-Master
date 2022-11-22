// 클로저 : 자신이 생성될 때의 렉시컬 환경(Lexical environment)을 기억하는 함수
// 자유변수 : 클로저에 의해 참조되는 외부함수의 변수

const text = "hello";
function func() {
  console.log(text);
}

func();

function outer() {
  const x = 0;
  function inner() {
    console.log(`inside inner : ${x}`);
  }
  // return inner(); ❌ 콘솔로그 하는 것을 리턴하는 게 아니라 inner함수 자체를 리턴해야 하므로
  return inner;
}
const func1 = outer();
func1();
