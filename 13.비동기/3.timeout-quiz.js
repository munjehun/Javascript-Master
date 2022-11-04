// 주어진 second(초)이 지나면 callback 함수를 호출.
// 단, second이 0보다 작으면 에러 던지기!
function runInDelay(callback, second) {
  if (!callback) throw new Error("callback 함수를 제대로 입력하세요!"); //문제엔 없지만 callback도 에러 넣기
  if (!second || second < 0) throw new Error("시간을 양수로 입력하세요!");

  setTimeout(callback, second * 1000);
}

//앱이 크래쉬나면 안되니까 try catch문으로 실행
try {
  runInDelay(() => console.log("콜백함수 실행"), -1);
} catch (error) {
  console.log(error);
}
