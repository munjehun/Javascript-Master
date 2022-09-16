// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]

function replace(a) {
  let input = Array.from(a); //💯 Array.from() = 같은 배열을 새로 하나 만들기!
  let result = input.map((i) => {
    return i == "🍓" ? (i = "🥝") : i;
  });
  console.log(result);
}
replace(["🍌", "🍓", "🍇", "🍓"]);

// 😈😈😈 퀴즈2
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2

function count(a, b) {
  let count = a.filter((i) => i == b).length;
  console.log(count);
}

function count2(a, b) {
  console.log(a.join("").split(b).length - 1);
}

// 💯💯💯💯💯
function count3(a, b) {
  console.log(
    a.reduce((count, value) => {
      //count로 시작해서 if문을 거치고 다시 count를 리턴! => 다음 인자로 if문 반복
      if (value == b) {
        count++;
      }
      return count;
    }, 0)
  );
}
count(["🍌", "🥝", "🍇", "🥝"], "🥝");
count2(["🍌", "🥝", "🍇", "🥝"], "🥝");
count3(["🍌", "🥝", "🍇", "🥝"], "🥝");

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

function match(a, b) {
  let answer = [];
  a.forEach((i) => {
    b.some((item) => item == i) ? answer.push(i) : null;
  });
  console.log("3번 답 ", answer);
}

function match2(a, b) {
  let answer = a.filter((i) => b.includes(i));
  console.log("3번 답 ", answer);
}

match(["🍌", "🥝", "🍇"], ["🍌", "🍓", "🍇", "🍓"]);
match2(["🍌", "🥝", "🍇"], ["🍌", "🍓", "🍇", "🍓"]);

// 퀴즈4
// 5초과의 숫자들의 평균
const nums = [3, 16, 5, 25, 4, 34, 21];

let overFive = nums
  .filter((i) => i > 5)
  .reduce((a, b, _, array) => a + b / array.length, 0);
//💯💯💯💯💯 reduce()의 인자로 (초기값, 최근값, 인덱스, 받은 배열) 을 넣을 수 있다!! 안쓰는 것은 '_'로 처리! 💯💯💯💯💯
console.log(overFive);
