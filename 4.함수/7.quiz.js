// 주어진 숫자만큼 0부터 순회하는 함수 작성
// 순회하면서 주어진 특정한 일을 수행해야 함 ==>콜백함수
// 1. 5, 순회하는 숫자를 다 출력하고 싶음
// 2. 5, 순회하는 숫자의 두배값을 다 출력하고 싶음
// function iterate(max, action)

const log = (num) => {
  console.log(num);
};
const doubleAndLog = (num) => {
  console.log(num * 2);
};

function iterate(max, action) {
  for (let i = 0; i <= max; i++) {
    action(i);
  }
}

//1.
iterate(5, log);
//2.
iterate(5, doubleAndLog);
// 이렇게 해도 된다
iterate(5, (num) => console.log(num));
iterate(5, (num) => console.log(num * 2));

// 대표적인 콜백함수 : setTimeout( callback, milisecond )
setTimeout(() => {
  console.log("2초뒤 출력!");
}, 2000);
