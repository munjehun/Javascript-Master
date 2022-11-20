// 프로토타입을 베이스로 한 객체지향 프로그래밍

function Animal(name, emoji) {
  this.name = name;
  this.emoji = emoji;
}

Animal.prototype.printName = function () {
  console.log(`${this.name} ${this.emoji}`);
};

// 강아지
function Dog(name, emoji, owner) {
  // super(name, emoji)
  Animal.call(this, name, emoji); //부모의 것을 부름
  this.owner = owner; //나머지는 직접 지정
}
// Dog의 프로토타입을 Object가 아니라 Animal로 변경
Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.play = () => {
  console.log("같이 놀자아~");
};

const dog1 = new Dog("콩이", "🐕", "제훈");

// 호랑이
function Tiger(name, emoji) {
  Animal.call(this, name, emoji);
}

// Tiger의 프로토타입을 Object가 아니라 Animal로 변경
Tiger.prototype = Object.create(Animal.prototype);

Tiger.prototype.hunt = () => {
  console.log("사냥//");
};

const tiger1 = new Tiger("어흥이", "🐅");

// 상속도 확인 : instanceof
console.log(dog1 instanceof Dog); //true
console.log(dog1 instanceof Animal); //true
console.log(dog1 instanceof Tiger); //false
console.log(tiger1 instanceof Dog); //false
console.log(tiger1 instanceof Animal); //true
console.log(tiger1 instanceof Tiger); //true
