function a() {
  for (let i = 0; i < 100000000000; i++);
  return 1;
}
function b() {
  return a() + 1;
}
function c() {
  return b() + 1;
}

console.log("시작했다!");
const result = c();
console.log(result);

// c() => b() => a() => b() => c() 순으로 콜스택에 쌓여서 실행되고 사라진다.
