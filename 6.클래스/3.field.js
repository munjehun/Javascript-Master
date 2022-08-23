// 접근 제어자 - 캡슐화 (외부에서 객체 내부가 보이지 않도록)
// 📌 private(#), public(기본), protected
// 📌 #field는 외부에서 접근이 불가능!
class Fruit {
  #name;
  #emoji;
  #type = "과일"; //📌인스턴스를 만들때 초기화 돼야 한다면 생성자밖에 적어준다.
  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }
  #display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

const apple = new Fruit("apple", "🍎");
console.log(apple);
// Fruit {} => 객체 내부에 아무것도 안보임
apple.#name = "orange"; //🚫에러남 (접근불가)
apple.display(); //🚫에러남 (접근불가)
