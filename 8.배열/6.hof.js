const fruits = ["π", "π", "π", "π"];

// λ°°μ΄μ λΉκΈλΉκΈ λλ©΄μ μνλ κ²μ ν  λ

// forλ¬Έ
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//forEach ν¨μ
fruits.forEach(function (value, index, array) {
  console.log("-------------------------");
  console.log(value);
  console.log(index);
  console.log(array);
});
/*
-------------------------
π
0
[ 'π', 'π', 'π', 'π' ]
-------------------------
π
1
[ 'π', 'π', 'π', 'π' ]
-------------------------
π
2
[ 'π', 'π', 'π', 'π' ]
-------------------------
π
3
[ 'π', 'π', 'π', 'π' ]
*/

// λ§μ΄ μ°μ΄λ valueλ§
fruits.forEach((value) => console.log(value));
/*
π
π
π
π
*/

// μ‘°κ±΄μ λ§λ μμ΄νμ μ°Ύμ λ
const item1 = { name: "π₯", price: 2 };
const item2 = { name: "π", price: 3 };
const item3 = { name: "π₯", price: 1 };
const products = [item1, item2, item3, item2];

// π― find : μ μΌ λ¨Όμ  μ‘°κ±΄μ λ§λ μμ΄νμ λ°ν
let found = products.find((value) => value.name === "π₯");
console.log(found); //{ name: 'π₯', price: 2 }

// π― findIndex : μ μΌ λ¨Όμ  μ‘°κ±΄μ λ§λ μμ΄νμ μΈλ±μ€λ₯Ό λ°ν
found = products.findIndex((value) => value.name === "π₯");
console.log(found); //0

// π― filter : μ‘°κ±΄μ λ§λ μμ΄νμ μλ‘μ΄ λ°°μ΄λ‘ μ λΆ λ°ν
found = products.filter((item) => item.name === "π");
console.log(found); //[ { name: 'π', price: 3 }, { name: 'π', price: 3 } ]

// some : λ°°μ΄μ μμ΄νλ€μ΄ λΆλΆμ μΌλ‘ μ‘°κ±΄(μ½λ°±ν¨μ)μ λ§λμ§ νμΈ
found = products.some((item) => item.name === "π₯"); //λ°°μ΄μ€μ νλλΌλ μμΌλ©΄ true λ°ν
console.log(found); //true

// every : λ°°μ΄μ μμ΄νμ΄ μ λΆ μ‘°κ±΄(μ½λ°±ν¨μ)μ λ§λμ§ νμΈ
found = products.every((item) => item.name === "π₯"); //λ°°μ΄μ€ μ λΆ μ‘°κ±΄μ λ§μΌλ©΄ true λ°ν
console.log(found); //false

//---------------------------------------------------------------------------------------

const nums = [1, 2, 3, 4, 5];

// map
let result = nums.map((item) => [1, 2]);
console.log(result); //[ [ 1, 2 ], [ 1, 2 ], [ 1, 2 ], [ 1, 2 ], [ 1, 2 ] ]

// flatmap : mapμ κ²°κ³Όκ° λ°°μ΄λ‘ μ€μ²©λ  λ μ« ν΄μ€
result = nums.flatMap((item) => [1, 2]);
console.log(result); //[ 1, 2, 1, 2, 1,2, 1, 2, 1, 2 ]

// νμ©
result = ["asd", "zxc"].map((item) => item.split(""));
console.log(result); //[ [ 'a', 's', 'd' ], [ 'z', 'x', 'c' ] ]

result = ["asd", "zxc"].flatMap((item) => item.split(""));
console.log(result); //[ 'a', 's', 'd', 'z', 'x', 'c' ]
