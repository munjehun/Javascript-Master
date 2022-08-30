console.log(new Date()); //2022-08-29T14:35:37.669Z 현재 시간 출력

//타임존 때문인지 날짜는 하루 당겨서 반환
console.log(new Date("Jun 5, 2022")); //2022-06-04T15:00:00.000Z
console.log(new Date("2016-3-10")); //2016-03-09T15:00:00.000Z
console.log(new Date("2016-3-1")); //2016-02-29T15:00:00.000Z

const now = new Date();
now.setFullYear(2023); //2023년으로 설정
now.setMonth(10); // 0이 1월 ~ 11이 12월
console.log(now.getFullYear());
console.log(now.getDate());
console.log(now.getDay()); // 0:일요일 ~ 6:토요일
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());

console.log(now.toString()); //Wed Nov 29 2023 23:45:21 GMT+0900 (대한민국 표준시)
console.log(now.toDateString()); //Wed Nov 29 2023
console.log(now.toTimeString()); //23:45:21 GMT+0900 (대한민국 표준시)
console.log(now.toLocaleString("en-US")); //11/29/2023, 11:46:18 PM
console.log(now.toLocaleString("kr-KR")); //2023. 11. 29. 오후 11:46:18
