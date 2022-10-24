// Nullish Coalescing Operator
// ES 11 (2020)

// ?? null, undefined 인 경우에만 설정
// || falshy한 경우 설정(할당) 0, ''
let num = 0;
console.log(num || "-1"); //-1 👉 0을 falshy한 값이라고 판단해서 -1리턴!
console.log(num ?? "-1"); //0 👉 0이 null이나 undefined가 아니기 때문에 0 리턴!
