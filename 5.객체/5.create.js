// const apple = {
//   name: "apple",
//   display: function () {
//     console.log(`${this.name}:🍎`); //여기서 this는 본인이 속한 객체
//   },
// };
// const orange = {
//   name: "orange",
//   display: function () {
//     console.log(`${this.name}:🍊`);
//   },
// };

//특정한 템플릿에 맞게 객체를 쉽게 만들어 줄 수 있는 생성자 함수를 이용하면
//정해진 틀 안에서 원하는 객체를 만들 수 있다.

// 📌📌📌생성자 함수 (대문자로 시작)
function Fruit(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
  // return this; (생략 가능)
}

const apple = new Fruit("apple", "🍎");
const orange = new Fruit("orange", "🍊");

console.log(apple); //Fruit { name: 'apple', emoji: '🍎', display: [Function (anonymous)] }
console.log(orange); //Fruit { name: 'orange', emoji: '🍊', display: [Function (anonymous)] }
console.log(apple.name);
console.log(apple.emoji);
