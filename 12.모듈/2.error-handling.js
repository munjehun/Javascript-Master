function readFile(path) {
  throw new Error("파일 경로를 찾을 수 없어"); //에러나면 다음 코드로 진행하지 않고 앱이 크래쉬 됨. 콘솔창에 에러 메세지
  return "파일 내용";
}

function processFile(path) {
  const content = readFile(path);
  const result = "처리 " + content;
  return result;
}

const result = processFile("경로");
console.log(result);

// try catch finally : 앱이 크래쉬 나는 것을 방지
function readFile1(path) {
  throw new Error("파일 경로를 찾을 수 없어");
  return "파일 내용";
}

function processFile1(path) {
  let content;
  try {
    content = readFile1(path);
  } catch (error) {
    console.log(error);
    content = "기본 내용";
  } finally {
    console.log("성공하든 실패하든 마지막으로 리소스를 정리할 수 있음");
  }
  const result = "처리 " + content;
  return result;
}

const result1 = processFile1("경로");
console.log(result1);
