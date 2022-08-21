// 함수 내부에서 외부로부터 주어진 인자값 변경은 💩💩💩
// 상태 변경이 필요한 경우에는 새로운 상태(오브젝트, 값)를 만들어서 반환해야 함.
// 원시값 - 값에 의한 복사
// 객체값 - 참조에 의한 복사(메모리 주소)

//1. 원시값 함수내에서 변경
function display(num) {
  num = 5; //num이라는 지역변수에 할당하고 변경! 그러나 이것도 좋지않은 코드.
  console.log(num);
}

const value = 4;
display(value); //5
console.log(value); //4 ==>원본값은 안바뀜!

//2. 오브젝트값 함수내에서 변경
function displayObj(obj) {
  obj.name = "Lily"; //❌❌❌참조의 값을 변경하기 때문에 원본값도 변경됨!!❌❌❌
  console.log(obj);
}
const jehun = { name: "Jehun" };
displayObj(jehun); //Lily
console.log(jehun); //Lily 💩

//대안
function changeName(obj) {
  //함수명부터 이름 변경하는 느낌 주기!
  return { ...obj, name: "Bob" }; // 반환할 때 새로운 오브젝트 만들기!
}
