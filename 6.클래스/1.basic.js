// 객체를 쉽게 만들 수 있는 템플릿

// 생성자 함수 (고전적인 방법)
function Fruit1(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
  // return this; (생략 가능)
}

// 클래스 class
class Fruit {
  // constructor = 생성자 : new 키워드로 객체를 생성할 때 호출되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  // 객체 안에서 사용되는 멤버함수는 따로 빼서 작성. function 안적음. 이름 적고 바로 애로우 펑션
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

// apple은 Fruit 클래스의 인스턴스다.
const apple = new Fruit("apple", "🍎");
const orange = new Fruit("orange", "🍊");
console.log(apple); //Fruit { display: [Function (anonymous)], name: 'apple', emoji: '🍎'}
console.log(orange); //Fruit { display: [Function (anonymous)],  name: 'orange', emoji: '🍊'}

// obj는 객체이고, 그 어떤 클래스의 인스턴스도 아니다.
const obj = { name: "jehun" };
