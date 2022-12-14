// ๐ฏ ์์ฑ์ ํจ์ : ํน์ ํ ํํ๋ฆฟ์ ๋ง๋ ๊ฐ์ฒด๋ฅผ ๋ง๋ค์ด์ฃผ๋ ํจ์

// const apple = {
//   name: "apple",
//   display: function () {
//     console.log(`${this.name}:๐`); //์ฌ๊ธฐ์ this๋ ๋ณธ์ธ์ด ์ํ ๊ฐ์ฒด
//   },
// };
// const orange = {
//   name: "orange",
//   display: function () {
//     console.log(`${this.name}:๐`);
//   },
// };

// => ๋น์ทํ ๊ฐ์ฒด์ธ๋ฐ ํ๋ํ๋ ๋ง๋ค๊ธฐ ๊ท์ฐฎ๋ค!

//ํน์ ํ ํํ๋ฆฟ์ ๋ง๊ฒ ๊ฐ์ฒด๋ฅผ ์ฝ๊ฒ ๋ง๋ค์ด ์ค ์ ์๋ ์์ฑ์ ํจ์๋ฅผ ์ด์ฉํ๋ฉด
//์ ํด์ง ํ ์์์ ์ํ๋ ๊ฐ์ฒด๋ฅผ ๋ง๋ค ์ ์๋ค.

// ๐๐๐์์ฑ์ ํจ์ (๋๋ฌธ์๋ก ์์)
function Fruit(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
  // return this; (์๋ต ๊ฐ๋ฅ)
}

const apple = new Fruit("apple", "๐"); // this = apple
const orange = new Fruit("orange", "๐"); //this = orange

console.log(apple); //Fruit { name: 'apple', emoji: '๐', display: [Function (anonymous)] }
console.log(orange); //Fruit { name: 'orange', emoji: '๐', display: [Function (anonymous)] }
console.log(apple.name);
console.log(apple.emoji);
