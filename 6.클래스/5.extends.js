// class Tiger {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log("먹자!");
//   }
//   sleep() {
//     console.log("잔다!");
//   }
// }

// class Dog {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log("먹자!");
//   }
//   sleep() {
//     console.log("잔다!");
//   }
//   play() {
//     console.log("놀자!");
//   }
// }

class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log("먹자!");
  }
  sleep() {
    console.log("잔다!");
  }
}

// 상속받은 클래스 그냥 쓰기
class Tiger extends Animal {}
const 호랭이 = new Tiger("노랑");
console.log(호랭이); //Tiger { color: '노랑' }
호랭이.eat(); //먹자!
호랭이.sleep(); //잔다!

// 📌 상속받은 클래스 확장
class Dog extends Animal {
  constructor(color, ownerName) {
    super(color); //super = 부모클래스의 생성자 프로퍼티 (자식 클래스에서 생성자를 추가,수정할때 적어줘야 한다)
    this.ownerName = ownerName;
  }
  //추가하려는 메서드만 추가하면 된다.
  play() {
    console.log("논다!");
  }
  // 오버라이딩 overriding (부모클래스 메서드 덮어씌우기(수정))
  eat() {
    super.eat(); //부모클래스의 eat 메서드
    console.log("와구와구");
  }
}
const 댕댕이 = new Dog("흰둥이", "제훈");
console.log(댕댕이); //Dog { color: '흰둥이', ownerName: '제훈' }
댕댕이.eat(); //먹자!
// 와구와구
댕댕이.sleep(); //잔다!
댕댕이.play(); //논다!
