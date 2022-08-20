function add(a, b) {
  return a + b;
}

const sum = add;
//함수명을 어딘가에 할당하는 것은 함수가 가리키고 있는 메모리 주소를 복사해서 할당하는 것과 같다.

console.log(sum(2, 4)); // 6
console.log(add(2, 4)); // 6
