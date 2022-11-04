// Fetch API

//Fetch API는 네트워크 통신을 포함한 리소스 취득을 위한 인터페이스가 정의

//fetch()를 불러들이는 경우, 취득할 리소스를 반드시 인수로 지정하지 않으면 안됩니다.
//읽어들인 뒤, fetch()는 Promise객체를 반환합니다.
//리퀘스트가 성공하든 실패하든 해당 리퀘스트 통신에 대한 Response (en-US)객체가 취득됩니다.

fetch("http://example.com/movies.json")
  .then((response) => response.json()) //json() : 서버로 부터 받은 JSON데이터를 Object 형태로 변환 & Promise로 반환.
  .then((data) => console.log(data));

/*
!자격 증명을 포함한 요청 전송

브라우저가 요청을 전송할 때 자격 증명을 포함하도록 하려면 fetch() 메서드에 전달하는 init 객체에
 credential: 'include'를 추가하세요. 동일 출처와 교차 출처 요청 모두에 사용할 수 있습니다.

fetch('https://example.com', {
  credentials: 'include',
});

참고: credentials: 'include'를 추가한 경우, Access-Control-Allow-Origin에 와일드카드를 사용할 수 없습니다. 
자격 증명을 포함하려는 경우에는 반드시 정확한 출처를 지정해야 합니다. 
CORS 해제 확장 프로그램을 사용하더라도 와일드카드를 지정한 요청은 실패할 것입니다.

👇👇👇

credentials에 true 넣으면 Access-Control-Allow-Origin 에 와일드카드 사용 불가 ⛔️⛔️⛔️
*/
