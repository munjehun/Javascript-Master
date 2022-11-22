function loop() {
  const array = [];
  // var와 let의 차이점 : var는 블록 스코프가 없고 함수 스코프만 있기 때문에 함수 내에서 하나의 변수로만 남아있는다.
  // for (var i = 0; i < 5; i++) {
  for (let i = 0; i < 5; i++) {
    array.push(function () {
      console.log(i);
    });
  }
  return array;
}

const array = loop();
array.forEach((func) => func());
