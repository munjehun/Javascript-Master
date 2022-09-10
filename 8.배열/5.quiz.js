// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]

function replace(a) {
  let input = Array.from(a); //💯 Array.from() = 같은 배열을 새로 하나 만들기!
  for (let i = 0; i < input.length; i++) {
    if (input[i] == "🍓") {
      input[i] = "🥝";
    }
  }
  console.log(input);
}
replace(["🍌", "🍓", "🍇", "🍓"]);

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2

function count(a, b) {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] == b) {
      count += 1;
    }
  }
  console.log(count);
}
function count2(a, b) {
  console.log(a.join("").split(b).length - 1);
}
count(["🍌", "🥝", "🍇", "🥝"], "🥝");
count2(["🍌", "🥝", "🍇", "🥝"], "🥝");

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

function match(a, b) {
  let answer = [];
  for (let i = 0; i < a.length; i++) {
    if (b.includes(a[i])) {
      answer.push(a[i]);
    }
  }
  console.log(answer);
}

match(["🍌", "🥝", "🍇"], ["🍌", "🍓", "🍇", "🍓"]);
