/*구조분해 할당
데이터 뭉치(그룹화)를 쉽게 만들 수 있다.
*/

//예시 1
const fruits = ["🥭", "🥝", "🍍", "🍒"];
const [first, second, ...others] = fruits;
console.log(first); //🥭
console.log(second); //🥝
console.log(others); //[ '🍍', '🍒' ]

//예시 2
const point = [1, 2, 8];
const [x, y, z = 0] = point; //point에 매칭되는 값(8)이 있으면 매칭우선, 없으면 지정값 할당
console.log(x);
console.log(y);
console.log(z);

//예시 3
function createEmoji() {
  return ["apple", "🍎"];
}
const [title, emoji] = createEmoji(); //어떤 함수가 리턴하는 값에도 사용 가능
console.log(title); //apple
console.log(emoji); //🍎

// 💯 객체의 구조분해 할당
const jh = { name: "jh", age: 20, job: "s/w engineer" };
function display({ name, age, job }) {
  //객체의 key값을 직접 인자로 넣는다. (props 쓸 때 사용)
  console.log("이름", name);
  console.log("나이", age);
  console.log("직업", job);
}
display(jh);

const { name, age, job, pet = "강아지" } = jh; //구조분해 할당하면서 즉석에서 추가 가능
console.log(name);
console.log(age);
console.log(job);
console.log(pet); //강아지
