// Bubbling up

function a() {
  throw new Error("error!!!!");
}

function b() {
  try {
    a();
  } catch (error) {
    console.log("생각해보니 이 에러는 내가 잡을 수 없을 것 같군!");
    throw error; //다시 에러 던지기
  }
}

function c() {
  b();
}

try {
  c();
} catch (error) {
  console.log("잡았다 에러놈!");
}
console.log("끝!");
