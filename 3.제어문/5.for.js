// 반복문 Loop Statement
// for(변수 선언문; 조건식; 증감식){ }

/* 실행순서 : 
1. 변수 선언문
2. 조건식의 값이 참이면 { } 코드블럭을 수행
3. 증감식을 수행
4. 조건식이 거짓이 될때까지 2번과 3번 반복
*/

for (let i = 0; i < 5; i += 2) {
  console.log(i);
}
/*
0
2
4*/

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(i, j);
  }
}
/*
0 0
0 1
0 2
1 0
1 1
1 2
2 0
2 1
2 2*/

// 무한루프 💩 조건식이 끝나지 않을 때

// 반복문 제어 : continue, break;
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    console.log("i가 드디어 5가 되었다!");
    continue; //이 밑에 있는 코드들은 실행 안하고 넘어감!
    break; //for문을 끝내버림!
  }
  console.log(i);
}
/*
0
1
2
3
4
i가 드디어 5가 되었다!
6
7
8
9*/
