//export default : 다른 모듈에서 쓸 수 있도록 대표로 하나만 export

//export를 하나만 하는게 아닌 경우

export let count = 0; //변수도 가능! 가급적이면 getCount처럼 캡슐화해서 사용 권장.

export function increase() {
  count++;
  console.log(count);
}

export function getCount() {
  return count;
}
