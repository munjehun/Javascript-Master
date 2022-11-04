function fetchEgg(chicken) {
  return Promise.resolve(`${chicken}=>🥚`);
}
function fryEgg(egg) {
  return Promise.resolve(`${egg}=>🍳`);
}
function getChicken() {
  return Promise.reject(new Error("에러!!"));
  // return Promise.resolve(`🥬=>🐔`);
}

// fetchEgg("🐔").then((egg) => console.log(egg));

getChicken()
  .catch((error) => {
    console.log(error);
    return "🐔";
  })
  .then((e) => fetchEgg(e))
  .then((e) => fryEgg(e)) // 💯 단축 가능!
  .then((e) => console.log(e))
  .catch((error) => console.log(error));

// 👇👇👇 이렇게 생략 가능!

getChicken()
  .catch(() => "🐔")
  .then(fetchEgg)
  .then(fryEgg)
  .then(console.log)
  .catch(console.log);
