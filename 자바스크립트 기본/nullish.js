// nullish 병합 연산자를 사용하면 짧은 문법으로 여러 피연산자 중 그 값이 '확정되어있는' 변수를 찾을 수 있습니다.
let firstName = null;
let lastName = null;
let nickName = "바이올렛";

// null 이나 undefined이 아닌 첫 번째 피연산자.
alert(firstName ?? lastName ?? nickName ?? "익명의 사용자"); // 바이올렛

// ?? 와 ||의 차이
// || 는 첫번째 truthy 값을 반환
// ?? 는 첫번째 정의된 값을 반환.

let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0