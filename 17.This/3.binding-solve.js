// 정적 바인딩 방법
function Cat(name) {
  this.name = name;
  // 2. arrow 함수 사용 : arrow 함수는 렉시컬 환경에서의 this를 기억!
  // arrow 함수 밖에서 제일 근접한 스코프의 this를 가리킴
  this.printName = () => {
    console.log(`고양이의 이름 출력~ ${this.name}`);
  };

  // 1. bind 함수 이용하여 수동적으로 바인딩
  // this.printName = this.printName.bind(this);
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

dog.printName = cat.printName;
dog.printName(); //고양이의 이름 출력~ 냥냥

function printOnMonitor(printName) {
  console.log("출력 준비~");
  printName();
}

printOnMonitor(cat.printName); //고양이의 이름 출력~ 냥냥
