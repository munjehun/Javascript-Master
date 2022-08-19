// while(조건) { }
// 조건이 false가 될 때까지 { } 코드를 반복 실행

let num = 3;
while (num >= 0) {
  console.log(num);
  num--;
}

let isActive = true;
let i = 0;
while (isActive) {
  console.log("나 아직 살아 있다구우우~~!");
  if (i == 10) {
    break;
  }
  i++;
}

// do while 문
do {
  console.log(i);
  i++;
} while (i < 15);
// 1. do 코드 일단 한 번은 실행!
// 2. while문 조건식에 false가 될 때까지 do코드 실행!
