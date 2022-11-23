// 자바스크립트의 함수는 만능
// 함수처럼 사용, 생성자 함수로 사용 (클래스)
// 하지만, 이걸 위해서 불필요한 무거운 프로토타입(많은 데이터를 담고 있는 객체) 생성

const dog = {
  name: "Dog",
  play: function () {
    //객체 안에서 함수 표현식을 사용하는 것은 좋지 않다.
    console.log("논다멍");
  },
};
dog.play();

const obj = new dog.play(); //일반 생성자 함수로도 사용할 수 있기 때문에 함수 내부에 더 무거운 프로토타입을 가지고 있다.
console.log(obj);

// ES6
const cat = {
  name: "cat",
  play() {
    // 객체의 메서드 (오브젝트에 속한 함수)
    console.log("냐옹");
  },
};
cat.play();
// const obj1 = new cat.play(); //🚫생성자 함수로 사용❌

/**
 * 화살표 함수의 특징
 * 1. 문법이 깔끔함
 * 2. 생성자 함수로 사용이 불가능 (무거운 프로토타입을 만들지❌)
 * 3. 함수 자체 arguments 객체 갖고있지 ❌
 * 4. this에 대한 바인딩이 정적으로 결정됨
 *    - 함수에서 재일 근접한 상위 스코프의 this에 정적으로 바인딩 됨
 */
function sum(a, b) {
  console.log(arguments);
}
sum(1, 2); //[Arguments] { '0': 1, '1': 2 }

const add = (a, b) => {
  console.log(arguments); //arrow 함수 외부의 arguments를 참조만 함
};
add(1, 2); //함수를 감싸고 있는(전역) 객체(이 경우엔 노드)의 arguments를 출력

const printArrow = () => {
  console.log(this); //{} : Arrow 함수를 감싸고 있는 스코프(이 경우엔 노드의 글로벌 모듈)의 this 정보 출력
};
printArrow();
cat.printArrow = printArrow; //Arrow 함수 바인딩은 정적 바인딩이기 때문에 글로벌 객체( {} ) 할당
cat.printArrow(); //{}
