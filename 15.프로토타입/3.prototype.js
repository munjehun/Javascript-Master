// const dog1 = { name: "μ½©μ΄", emoji: "π" };
// const dog2 = { name: "μμ", emoji: "π©" };

function Dog(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  // μΈμ€ν΄μ€ λ λ²¨μ ν¨μ : λͺ¨λ  κ°μ²΄μ ν¨μκ° λ€μ΄κ° μλ λ©λͺ¨λ¦¬ λ­λΉ
  // this.printName = () => {
  //   console.log(`${this.name}, ${this.emoji}`);
  // };
}

// νλ‘ν νμ λ λ²¨μ ν¨μ : κ°μ²΄ μμ²΄μλ ν¨μκ° μμ§λ§ νΈμΆν  μ μλ€.
Dog.prototype.printName = function () {
  console.log(`${this.name} ${this.emoji}`);
};

const dog1 = new Dog("μ½©μ΄", "π");
const dog2 = new Dog("μμ", "π©");

console.log(dog1, dog2);
dog1.printName();
dog2.printName();

// μ€λ²λΌμ΄λ©
// μΈμ€ν΄μ€ λ λ²¨μμ(μμ) λμΌν μ΄λ¦μΌλ‘ ν¨μλ₯Ό μ¬μ μ νλ©΄ (μ€λ²λΌμ΄λ©νλ©΄)
// νλ‘ν νμ λ λ²¨μ(λΆλͺ¨) ν¨μμ νλ‘νΌν°λ κ°λ €μ§λ€ (μλμ λ¨)
dog1.printName = function () {
  console.log("Hi!!!");
};
dog1.printName(); // Hi!!!
