function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 🥚`);
}
function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
}
function getChicken() {
  return Promise.reject(new Error("can not find 🐓"));
}

// function makeFriEgg() {
//   return getChicken()
//     .catch(() => "🐔")
//     .then((chicken) => fetchEgg(chicken))
//     .then((egg) => fryEgg(egg))
//     .then((meal) => {
//       console.log(meal);
//       return meal;
//     })
//     .catch((error) => console.log(error));
// }

// 👇👇👇 VSCode에서 자동으로 async await 함수로 바꿔주는 기능!

async function makeFriEgg() {
  try {
    let chicken;
    try {
      chicken = await getChicken();
    } catch {
      chicken = "🐔";
    }
    const egg = await fetchEgg(chicken);
    const meal = await fryEgg(egg);
    return meal;
  } catch (error) {
    return console.log(error);
  }
}

//내가 쓴 코드
async function makeFriEgg1() {
  const chicken = await getChicken().catch((i) => "🐔");
  const egg = await fetchEgg(chicken);
  return fryEgg(egg);
}

makeFriEgg().then(console.log);
makeFriEgg1().then(console.log);
