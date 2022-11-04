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
    }, 2000);
  });
}

function getOrange() {
  return Promise.reject(new Error("오렌지 없다!!"));
}

// 바나나와 사과 한 번에 리턴하기

function fetchFruits() {
  return getBanana().then((banana) =>
    getApple().then((apple) => [banana, apple])
  );
}

fetchFruits().then(console.log);

//💯💯💯 비동기 코드를 동기적으로 async, await

async function fetchFruits1() {
  const banana = await getBanana(); //banana 할당 끝나면
  const apple = await getApple(); //apple 할당 끝나면
  return [banana, apple]; //리턴
}

fetchFruits1().then(console.log);
