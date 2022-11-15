{
  const x = 1;
  {
    const y = 2;
    console.log(x); //자식 블럭은 부모 블럭의 변수를 참조할 수 있다.
  }
  console.log(x);
  // console.log(y); //❌
}

const text = "global"; //전역 변수(글로벌 변수), 전역 스코프(글로벌 스코프)
{
  const text = "inside block1"; //지역 변수(로컬 변수), 지역 스코프(로컬 스코프)
  {
    console.log(text); //가까운 블록부터 참조할 변수를 찾는다. => inside block1
  }
}
