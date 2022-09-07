const fruits = ["🍌", "🍎", "🍇", "🍑"];

// 배열에 추가, 삭제 좋지 않은 방법 🚫
fruits[5] = "🍅"; //인덱스로 추가하기❌
console.log(fruits);
//[ '🍌', '🍎', '🍇', '🍑', <1 empty item>, '🍅' ] 실수할 수 있다!

fruits[fruits.length] = "🍒"; //length를 이용해 배열의 마지막에 추가⭕️
console.log(fruits); //[ '🍌', '🍎', '🍇', '🍑', <1 empty item>, '🍅', '🍒' ]

delete fruits[1]; // delete + 인덱스로 삭제❌
console.log(fruits);
//[ '🍌', <1 empty item>, '🍇', '🍑', <1 empty item>, '🍅', '🍒' ]
// 인덱스 1이 비어있는 상태로 남아있게 된다!
