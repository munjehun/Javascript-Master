function runInDelay(second) {
  //성공과 실패했을 경우, 두 개의 인자를 받는다.
  return new Promise((resolve, reject) => {
    if (!second || second < 0) {
      reject(new Error("second가 0보다 작음"));
    }
    setTimeout(resolve, second * 1000);
  });
}

/*
runInDelay(2)
.then(필요한 일 수행)
.catch(에러 처리)
.finally(최종 무조건 호출!)
*/

try {
  runInDelay(() => console.log("타이머 완료!"), -1);
} catch (error) {
  console.log(error);
}

//👇👇👇

runInDelay(2)
  .then(() => console.log("콜백함수 실행")) //resolve 부분
  .catch((error) => console.log(error))
  .finally(() => console.log("끝났다!"));
