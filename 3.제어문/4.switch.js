// 조건문 Conditional Statement
// Switch
// 특정한 범위 안의 값에 대해 특정한 일을 해야 하는 경우

let day = 8; // 0:월요일, 1:화요일 ... 6:일요일
let dayName;
if (day === 0) {
  dayName = "월요일";
} else if (day === 1) {
  dayName = "화요일";
} else if (day === 2) {
  dayName = "수요일";
} else if (day === 3) {
  dayName = "목요일";
} else if (day === 4) {
  dayName = "금요일";
} else if (day === 5) {
  dayName = "토요일";
} else if (day === 6) {
  dayName = "일요일";
}

switch (day) {
  case 0:
    dayName = "월요일";
    break; //case마다 break를 걸어줘야 한다!
  case 1:
    dayName = "화요일";
    break;
  case 2:
    dayName = "수요일";
    break;
  case 3:
    dayName = "목요일";
    break;
  case 4:
    dayName = "금요일";
    break;
  case 5:
    dayName = "토요일";
    break;
  case 6:
    dayName = "일요일";
    break;
  default: //위의 case 중 해당하는 것이 없을 때! 일종의 else 문.
    console.log("해당하는 요일이 없음!");
}
console.log(dayName);

let condition = "bad"; // okay, good ->좋음, bad ->나쁨
let text;
switch (condition) {
  case "good":
  case "okay":
    text = "좋음";
    break; // 여러가지 case가 하나의 결과를 원하면 묶어서 break처리.
  case "bad":
    text = "나쁨";
    break;
}
console.log(text);
