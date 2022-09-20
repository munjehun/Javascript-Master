const prop = {
  name: "Button",
  styles: {
    size: 20,
    color: "black",
  },
};

//객체에서 color를 받아와서 출력하도록 만들기
function changeColor({ styles: { color } }) {
  console.log(color);
  //🚫 console.log(styles); styles는 color를 구조분해할당하기 위해 넣었기 때문에 적용❌
}

changeColor(prop);
