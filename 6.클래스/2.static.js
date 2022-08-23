// static 정적 프로퍼티, 메서드

class Fruit {
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  // 클래스 레벨의 메서드(함수)
  static MAX_FRUITS = 4;
  static makeRandomFruit() {
    // 클래스 레벨의 메서드에서는 this를 참조할 수 없음
    return new Fruit("banana", "🍌");
  }

  // 인스턴스 레벨의 메서드(함수)
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

//인스턴스 레벨의 프로퍼티와 메서드는 꼭! 생성된 인스턴스를 통해서 접근하고 호출할 수 있다!
const apple = new Fruit("apple", "🍎");
apple.display(); //⭕️⭕️⭕️
console.log(Fruit.name); //❌❌❌

//클래스 레벨의 프로퍼티와 메서드는 클래스객체 자체로 접근,호출할 수 있다!
console.log(Fruit.MAX_FRUITS); //⭕️⭕️⭕️

//

// 📌 또한 클래스 레벨의 프로퍼티나 메서드는 인스턴스의 내용에 나타나지 않는다.
