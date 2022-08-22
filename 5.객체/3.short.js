//객체에서 키와 밸류의 값이 같다면 하나만 적어도 된다!

const x = 0;
const y = 0;
const coordinate = { x, y }; //{ x: x, y: y }; 와 같다!
console.log(coordinate); //{ x: 0, y: 0 }

function makeobj(name, age) {
  return {
    name,
    age,
  };
}
