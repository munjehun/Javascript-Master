// 퀴즈 !
// 1.문자열의 모든 캐릭터를 한 자씩 출력하라.
const text = "Hello World!";
for (let i = 0; i < text.length; i++) {
  console.log(text[i]);
}

// 2.사용자들의 id를 잘라내 각각의 id를 배열로 보관
const ids = "user1, user2, user3, user4";
console.log(ids.split(", "));

// 3.1초에 한 번씩 시간을 출력! setInterval 사용!
const log = () => {
  console.log(new Date());
};
setInterval(log, 1000);
setInterval(() => {
  console.log(new Date().toLocaleString("kr-KR"));
}, 1000);
