// 조건문 Conditional Statement

// if(조건) { }
// if(조건) { } else { }
// if(조건1) { } else if (조건2) { } else { }

let fruit = "a";

if (fruit === "apple") {
  console.log("🍎");
} else if (fruit === "orange") {
  console.log("🍊");
} else {
  console.log("🍖");
}

if (null) {
  //0, false, null, undefined, '' =>거짓이므로 조건문 실행 안 됨!
  console.log("출력하면 안됨!");
}
