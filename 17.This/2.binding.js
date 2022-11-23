// this 바인딩

// 자바, C#, C++ 대부분의 객체지향 프로그래밍 언어에서 this는 항상 자신의 인스턴스 자체를 가리킴!
// 정적으로 인스턴스가 만들어지는 시점에 this가 결정됨!

// 하지만, 자바스크립트에서는 누가 호출하나에 따라 this가 달라짐!
// 즉, this는 호출하는 사람(caller)에 의해 동적으로 결정됨!

function Cat(name) {
  this.name = name;
  this.printName = function () {
    console.log(`고양이의 이름 출력~ ${this.name}`);
  };
}

function Dog(name) {
  this.name = name;
  this.printName = function () {
    console.log(`강아지의 이름 출력~ ${this.name}`);
  };
}

const cat = new Cat("냥냥");
const dog = new Dog("멍멍");
cat.printName();
dog.printName();

// this는 호출하는 사람(caller)에 의해 동적으로 결정됨!
dog.printName = cat.printName;
dog.printName(); //고양이의 이름 출력~ 멍멍 => Cat의 함수를 사용하더라도 Dog의 name이 사용됨!

function printOnMonitor(printName) {
  console.log("출력 준비~");
  printName();
}

printOnMonitor(cat.printName); //고양이의 이름 출력~ undefined => 호출자에 따라 this가 변경되기 때문
