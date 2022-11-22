// 내부 정보를 은닉하고 공새 함수를 통한 데이터 조작을 위해 사용
// 캡슐화와 정보은닉

// 클래스 private 필드 또는 메소드 사용과 동일 =>옛날에는 private 클래스가 없어서 클로저를 사용했다.

function makeCounter() {
  let count = 0; //count 를 숨기면서 데이터 조작 가능
  function increase() {
    count++;
    console.log(count);
  }
  return increase;
}

const increase = makeCounter();
increase();
increase();
increase();

// private 클래스와 같다.
class Counter {
  #count = 0; //private
  increase() {
    this.#count++;
    console.log(this.#count);
  }
}
const counter = new Counter();
counter.increase();
counter.increase();
counter.increase();
