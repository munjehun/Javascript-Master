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
    }, 3000);
  });
}

function getOrange() {
  return Promise.reject(new Error("μ€λ μ§ μλ€!!"));
}

// λ°λλμ μ¬κ³Ό ν λ²μ λ¦¬ν΄νκΈ°
getBanana()
  .then((banana) => getApple().then((apple) => [banana, apple])) //κ°κ°μ λ¦¬ν΄κ°μ νλμ λ°°μ΄μ λ΄μ λ¦¬ν΄
  .then(console.log);

// μμ λ°©λ²μΌλ‘λ μ΄ μκ°μ ν©(4μ΄) λ§νΌ κ±Έλ¦°λ€.
// Promise.all : λ³λ ¬μ μΌλ‘ ν λ²μ λͺ¨λ  Promiseλ€μ μ€ν! (3μ΄ μμ)
Promise.all([getBanana(), getApple()]) //
  .then((fruits) => console.log("all :", fruits)); //fruitsλ κ° ν¨μμ κ²°κ΄κ°μ λ°°μ΄

//Promise.race : κ°μ₯ λ¨Όμ  μ€νλλ Promise νλλ§ λ¦¬ν΄!
Promise.race([getBanana(), getApple()]) //
  .then((fruit) => console.log("race :", fruit));

//μλ¬ μμ κ²½μ°
Promise.all([getBanana(), getApple(), getOrange()])
  .then((fruits) => console.log("all-error :", fruits))
  .catch(console.log);

//μν μ±κ³΅ μ¬λΆ μλ €λ©΄
Promise.allSettled([getBanana(), getApple(), getOrange()])
  .then((fruits) => console.log("all-settle :", fruits))
  .catch(console.log);
