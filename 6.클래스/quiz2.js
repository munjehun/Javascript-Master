/*
정직원과 파트타임 직원을 나타낼 수 있는 클래스 만들기

직원들의 정보 : 이름, 부서 이름, 한 달 근무시간;
매달 직원들의 정보를 이용해서 한 달 월급을 계산할 수 있다.
정직원 : 시급 10000원
파트타임 직원 : 시급 8000원
*/
// 👇 내가 짠 코드 (get이용)
class Employee {
  constructor(name, department, workTime) {
    this.name = name;
    this.department = department;
    this.workTime = workTime;
  }
  get pay() {
    return this.workTime * 10000;
  }
}

class FullTime extends Employee {}
class PartTime extends Employee {
  get pay() {
    return this.workTime * 8000;
  }
}

const jehun = new FullTime("jehun", "service", 120);
console.log(jehun);
console.log(jehun.pay);
const jiyeon = new PartTime("jiyeon", "sale", 60);
console.log(jiyeon);
console.log(jiyeon.pay);

// 👇 엘리님 코드 (static, super 이용)
class Employee {
  constructor(name, department, workTime, payRate) {
    this.name = name;
    this.department = department;
    this.workTime = workTime;
    this.payRate = payRate;
  }
  pay() {
    return this.workTime * this.payRate;
  }
}

class FullTime extends Employee {
  static #PAY_RATE = 10000;
  constructor(name, department, workTime) {
    //super = 부모클래스의 생성자 프로퍼티 (자식 클래스에서 생성자를 추가,수정할때 적어줘야 한다)
    super(name, department, workTime, FullTime.#PAY_RATE);
  }
}
class PartTime extends Employee {
  static #PAY_RATE = 8000;
  constructor(name, department, workTime) {
    super(name, department, workTime, PartTime.#PAY_RATE);
  }
}

const jehun = new FullTime("jehun", "service", 120);
console.log(jehun);
console.log(jehun.pay());
const jiyeon = new PartTime("jiyeon", "sale", 60);
console.log(jiyeon);
console.log(jiyeon.pay());
