// 클래스를 베이스로 한 객체지향 프로그래밍으로 변경 (Animal, Tiger, Dog)

class Animal {
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  printName() {
    console.log(`${this.name} ${this.emoji}`);
  }
}

// 강아지
class Dog extends Animal {
  // constructor(name, emoji) {
  //   super(name, emoji);
  // }
  play() {
    console.log("같이 놀자아~");
  }
}

// 호랑이
class Tiger extends Animal {
  hunt() {
    console.log("사냥//");
  }
}

const dog = new Dog("콩이", "🐕");
const tiger = new Tiger("어흥이", "🐅");
dog.printName();
tiger.printName();
dog.play();
tiger.hunt();

// 상속도 확인 : instanceof
console.log(dog instanceof Dog); //true
console.log(dog instanceof Animal); //true
console.log(tiger instanceof Dog); //false
console.log(tiger instanceof Animal); //true

// 결론 : 클래스로 하면 훨씬 간단하다!
