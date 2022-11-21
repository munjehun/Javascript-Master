// 상속은 단 하나의 부모만 가질 수 있다.
// => 오브젝트는 단 하나의 prototype을 가리킬 수 있다. (부모는 단 하나

// Mixin = assign : 여러개의 함수들을 상속
const play = {
  play: function () {
    console.log(`${this.name} 놀아요!`);
  },
};

const sleep = {
  sleep: function () {
    console.log(`${this.name} 자요!`);
  },
};

function Dog(name) {
  this.name = name;
}

// Dog의 prototype에 play와 sleep 함수 섞기
Object.assign(Dog.prototype, play, sleep);

const dog = new Dog("콩이");
console.log(dog);
dog.play(); //콩이 놀아요!
dog.sleep(); //콩이 자요!

class Animal {}
class Tiger extends Animal {
  constructor(name) {
    super();
    this.name = name;
  }
}
Object.assign(Tiger.prototype, play, sleep);
const tiger = new Tiger("어흥이");
tiger.play(); //어흥이 놀아요!
tiger.sleep(); //어흥이 자요!
