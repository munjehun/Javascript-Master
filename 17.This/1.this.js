/*
글로벌 컨텍스트의 this
 - 노드 : 모듈
 - 브라우저 : Window
*/

// 노드 JS에서 ~
console.log(this); //{}

const x = 0;
module.exports.x = x;
console.log(this); //{ x: 0 }

console.log(globalThis); //전역 객체
// globalThis.setTimeout();
// setTimeout();

// 브라우저에서 ~
this == globalThis; //Window

console.clear();

/*
함수 내부에서의 this
 - 엄격모드에서는 undefined
 - 느슨한 모드에서는 globalThis
*/
function fun() {
  console.log(this);
}
fun(); // globalThis 출력 됨 => 함수 내부에 this가 없으니까

/*
생성자 함수 or 클래스 안에서 this = 앞으로 생성될 인스턴스 자체
*/
function Cat(name) {
  this.name = name;
  this.printName = function () {
    console.log(this.name);
  };
}

const cat1 = new Cat("냐옹");
const cat2 = new Cat("냐아옹");
cat1.printName(); //냐옹
cat2.printName(); //냐아옹
