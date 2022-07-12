let double = n => n * 2;
// let double = function(n) { return n * 2 } 과 거의 동일

alert(double(3)); // 6


// 인수가 하나도 없을 땐 괄호를 비워놓으면 됩니다. 다만 이 때 괄호를 생략할 수 없습니다.
let sayHi = () => alert("hi");
sayHi();


// 함수 표현식과 같은 방법으로 사용 가능
 
let age = prompt("나이를 알려주세요");

let welcome = (age < 18) ? 
  () => alert("잼민이") :
  () => alert("잼민이아님");

  welcome();