// generator : 생성기 (값을 생성할 수 있는)

// const multiple = {
//   [Symbol.iterator]() {
//     //iterator를 실행하면
//     const max = 10;
//     let num = 0;
//     return {
//       //object 리턴
//       next() {
//         //object에는 next()가 있는데
//         return { value: num++ * 2, done: num > max };
//         //value는 +1하면서 곱하기 2하고, num이 max를 넘기면 끝낸다
//       },
//     };
//   },
// };

function* multipleGenerator() {
  //function 다음에 '*'붙여야 제너레이터 함수
  for (let i = 0; i < 10; i++) {
    yield i * 2; //yield : 호출 할 때마다 하나하나씩 실행
  }
}

const multiple = multipleGenerator();
let next = multiple.next();
console.log(next.value, next.done); //0 false

next = multiple.next();
console.log(next.value, next.done); //2 false

multiple.return(); //다음으로 넘어가지 않고 끝내버림

next = multiple.next();
console.log(next.value, next.done); //true
