//객체 안에는 value값에 함수도 담을 수 있다!

const apple = {
  name: "apple",
  display: function () {
    console.log(`${this.name}:🍎`); //여기서 this는 본인이 속한 객체
  },
};

apple.display(); //apple:🍎
