// 예제 1
function add(num1, num2) {
  console.log("function");
  return num1 + num2;
}

console.log(add(1, 2));

// 예제 2
let lastName = "김";
let firstName = "지수";
let lastName2 = "박";
let firstName2 = "철수";

function fullName(lastName, firstName) {
  console.log(`${lastName} ${firstName}`);
}

fullName(lastName, firstName); //김 지수
fullName(lastName2, firstName2); // 박 철수
