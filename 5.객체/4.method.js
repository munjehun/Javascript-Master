//객체 안에는 value값에 함수도 담을 수 있다!

//ES5
const apple = {
  name: "apple",
  display: function () {
    console.log(`${this.name}:🍎`); //여기서 this는 본인이 속한 객체
  },
};

apple.display(); //apple:🍎

//ES6
const orange = {
  name: "orange",
  display() {
    console.log(`${this.name}:🍊`);
  },
};

orange.display(); //orange:🍊

// ES6의 축약식 정의 메서드는 약간 다르게 동작.
