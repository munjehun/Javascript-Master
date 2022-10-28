function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("🍌");
    }, 1000);
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("🍎");
    }, 3000);
  });
}

function getOrange() {
  return Promise.reject(new Error("오렌지 없다!!"));
}

// 바나나와 사과 한 번에 리턴하기
getBanana()
  .then((banana) => getApple().then((apple) => [banana, apple])) //각각의 리턴값을 하나의 배열에 담아 리턴
  .then(console.log);

// 위의 방법으로는 총 시간의 합(4초) 만큼 걸린다.
// Promise.all : 병렬적으로 한 번에 모든 Promise들을 실행! (3초 소요)
Promise.all([getBanana(), getApple()]) //
  .then((fruits) => console.log("all :", fruits)); //fruits는 각 함수의 결괏값의 배열

//Promise.race : 가장 먼저 실행되는 Promise 하나만 리턴!
Promise.race([getBanana(), getApple()]) //
  .then((fruit) => console.log("race :", fruit));

//에러 있을 경우
Promise.all([getBanana(), getApple(), getOrange()])
  .then((fruits) => console.log("all-error :", fruits))
  .catch(console.log);

//수행 성공 여부 알려면
Promise.allSettled([getBanana(), getApple(), getOrange()])
  .then((fruits) => console.log("all-settle :", fruits))
  .catch(console.log);
