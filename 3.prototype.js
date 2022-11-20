// const dog1 = { name: "콩이", emoji: "🐕" };
// const dog2 = { name: "숙자", emoji: "🐩" };

function Dog(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  // 인스턴스 레벨의 함수 : 모든 객체에 함수가 들어가 있는 메모리 낭비
  // this.printName = () => {
  //   console.log(`${this.name}, ${this.emoji}`);
  // };
}

// 프로토타입 레벨의 함수 : 객체 자체에는 함수가 없지만 호출할 수 있다.
Dog.prototype.printName = function () {
  console.log(`${this.name} ${this.emoji}`);
};

const dog1 = new Dog("콩이", "🐕");
const dog2 = new Dog("숙자", "🐩");

console.log(dog1, dog2);
dog1.printName();
dog2.printName();

// 오버라이딩
// 인스턴스 레벨에서(자식) 동일한 이름으로 함수를 재정의 하면 (오버라이딩하면)
// 프로토타입 레벨의(부모) 함수의 프로퍼티는 가려진다 (섀도잉 됨)
dog1.printName = function () {
  console.log("Hi!!!");
};
dog1.printName(); // Hi!!!
