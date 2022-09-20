// 0부터 10이하까지 숫자의 2배를 순회하는 이터레이터(반복자) 만들기
//  [Symbol.iterator]():Iterator{ next(): {value, done}};
const multiple = {
  [Symbol.iterator]() {
    //iterator를 실행하면
    const max = 10;
    let num = 0;
    return {
      //object 리턴
      next() {
        //object에는 next()가 있는데
        return { value: num++ * 2, done: num > max };
        //value는 +1하면서 곱하기 2하고, num이 max를 넘기면 끝낸다
      },
    };
  },
};

for (const num of multiple) {
  console.log(num);
}
