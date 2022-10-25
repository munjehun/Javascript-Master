// import increase123 from "./counter.js";
// export하는 이름과 다르게 import를 해와도 그 이름으로 이 모듈에서 쓰면 오류 안남.

import { increase as increase123, getCount } from "./counter.js";
// export를 여러개 한다면 중괄호로 골라서 받아올 수 있다. 이 모듈에서 다른 이름으로 쓰려면 as ~ 로 변경가능.

// console.log(count);
increase123();
increase123();
increase123();
// console.log(count);

console.log(getCount());
