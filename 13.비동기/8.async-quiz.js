function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => π₯`);
}
function fryEgg(egg) {
  return Promise.resolve(`${egg} => π³`);
}
function getChicken() {
  return Promise.reject(new Error("can not find π"));
}

// function makeFriEgg() {
//   return getChicken()
//     .catch(() => "π")
//     .then((chicken) => fetchEgg(chicken))
//     .then((egg) => fryEgg(egg))
//     .then((meal) => {
//       console.log(meal);
//       return meal;
//     })
//     .catch((error) => console.log(error));
// }

// πππ VSCodeμμ μλμΌλ‘ async await ν¨μλ‘ λ°κΏμ£Όλ κΈ°λ₯!

async function makeFriEgg() {
  try {
    let chicken;
    try {
      chicken = await getChicken();
    } catch {
      chicken = "π";
    }
    const egg = await fetchEgg(chicken);
    const meal = await fryEgg(egg);
    return meal;
  } catch (error) {
    return console.log(error);
  }
}

//λ΄κ° μ΄ μ½λ
async function makeFriEgg1() {
  const chicken = await getChicken().catch((i) => "π");
  const egg = await fetchEgg(chicken);
  return fryEgg(egg);
}

makeFriEgg().then(console.log);
makeFriEgg1().then(console.log);
