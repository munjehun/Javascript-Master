// 카운터 만들기
// 0 이상의 값으로 초기화 한 뒤, 하나씩 숫자를 증가할 수 있는 카운터 만들기
// Counter 클래스 만들기

class Counter {
  #value; //외부에서 value값 변경 못하게
  constructor(num) {
    if (isNaN(num) || num < 0) {
      this.#value = 0;
    } else {
      this.#value = num;
    }
  }
  get value() {
    return this.#value;
  }
  countUp() {
    this.#value++;
  }
}

let one = new Counter(1);
one.countUp();
one.countUp();
one.countUp();
one.countUp();
console.log(one.value);
