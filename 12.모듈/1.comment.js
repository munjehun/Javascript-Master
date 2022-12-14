// 주석
// 한 줄 짜리 주석을 작성할 때 씀
// TODO(제훈) : 해야 할 일 작성

/**
 * 주석은 코드 자체를 설명하는 것이 아니라
 * 왜(WHY)와 어떻게(HOW)를 설명하는 것이 좋음
 * (단, 정말 필요한 경우에만)
 */

// 외부에서 많이 쓰이는 함수 API인 경우 JSDoc을 사용 : 함수 위에서 *주석 사용
/**
 * 주어진 두 인자를 더한 값을 반환
 * @param {*} a 숫자1
 * @param {*} b 숫자2
 * @returns 숫자1과 숫자2를 더한 값
 */
function add(a, b) {
  return a + b;
}
