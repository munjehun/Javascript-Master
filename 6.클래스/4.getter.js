// 접근자 프로퍼티 (Accessor Property) : 클래스의 변수처럼 보이지만 실제로는 함수

class Student {
  constructor(성, 이름) {
    this.성 = 성;
    this.이름 = 이름;
  }
  get fullName() {
    //함수지만 속성에 가까운 것은 get을 붙여서 속성에 접근하듯이 접근할 수 있다.
    return `My name is ${this.성} ${this.이름}.`;
  }
  set fullName(value) {
    console.log(value);
  }
}

const jehun = new Student("문", "제훈");
// console.log(jehun.fullName()); //My name is 문 제훈.
console.log(jehun.fullName);
console.log(jehun.성); //문
student.fullName = "김철수";
