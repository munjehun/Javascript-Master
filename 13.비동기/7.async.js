function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("π");
    }, 1000);
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("π");
    }, 2000);
  });
}

function getOrange() {
  return Promise.reject(new Error("μ€λ μ§ μλ€!!"));
}

// λ°λλμ μ¬κ³Ό ν λ²μ λ¦¬ν΄νκΈ°

function fetchFruits() {
  return getBanana().then((banana) =>
    getApple().then((apple) => [banana, apple])
  );
}

fetchFruits().then(console.log);

//π―π―π― λΉλκΈ° μ½λλ₯Ό λκΈ°μ μΌλ‘ async, await

async function fetchFruits1() {
  const banana = await getBanana(); //banana ν λΉ λλλ©΄
  const apple = await getApple(); //apple ν λΉ λλλ©΄
  return [banana, apple]; //λ¦¬ν΄
}

fetchFruits1().then(console.log);
