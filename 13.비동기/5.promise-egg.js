function fetchEgg(chicken) {
  return Promise.resolve(`${chicken}=>π₯`);
}
function fryEgg(egg) {
  return Promise.resolve(`${egg}=>π³`);
}
function getChicken() {
  return Promise.reject(new Error("μλ¬!!"));
  // return Promise.resolve(`π₯¬=>π`);
}

// fetchEgg("π").then((egg) => console.log(egg));

getChicken()
  .catch((error) => {
    console.log(error);
    return "π";
  })
  .then((e) => fetchEgg(e))
  .then((e) => fryEgg(e)) // π― λ¨μΆ κ°λ₯!
  .then((e) => console.log(e))
  .catch((error) => console.log(error));

// πππ μ΄λ κ² μλ΅ κ°λ₯!

getChicken()
  .catch(() => "π")
  .then(fetchEgg)
  .then(fryEgg)
  .then(console.log)
  .catch(console.log);
