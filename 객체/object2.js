// 매개변수를 받아 객체로 만들어 리턴하는 함수
function makerUser(name, age){
  return {
    name, // name : name 과 같음
    age : 30, // 한 객체에서 프로퍼티와 단축 프로퍼티를 함께 사용하는 것도 가능.
  };
}

let user = makeUser("Hope", 17);
console.log(user.name); //hope

// 객체 프로퍼티엔 이름 제약사항이 없습니다. 
// 예약어를 키로 사용해도 괜찮습니다.
let obj = {
  for: 1,
  let : 2,
  return : 3
};

console.log(obj.for + obj.let + obj.return); // 6

let obj2 = {
  0 : "test" // "0" : "test"와 동일함
};
// 숫자 0은 문자열 "0"으로 변환되기 떄문에 두 명령어는 같은 프로퍼티에 접근한다.
console.log(obj["0"]); // test
console.log(obj[0]); // test

// 특별 대우를 받는 이름이 존재합니다.
// 바로 , __proto__

let obj3 = {};
obj.__proto__ = 5; // 숫자를 할당합니다.
alert(obj.__proto__); // [object Object] - 숫자를 할당했지만 객체가 되었습니다.
// 원시값 5를 할당했는데 무시되었습니다.
// 프로토타입 상속에서 자세히 다루도록 하겠습니다.

let person = { name : "huemang", age : 17};
console.log(user.noSuchProperty === undefined); // true : 프로퍼티가 존재하지 않음을 의미 undefined이랑 비교하니까

// 이렇게 undefined과 비교하는 것 이외에도 연산자 in을 사용하면 프로퍼티 존재여부 확인가능
// "key" in obj

let key = "age";
console.log(key in user); // true
console.log("name" in user); // true

// in을 쓰는이유는 객체안에 임의로 undefined를 할당했을때 구별하기 어렵기때문에
// in을 사용하여 제대로 유무를 확인할 수 있습니다.
// (하지만 보통은 빈 값은 undefined이 할당되지않고 null이 할당되있습니다 이부분 주의)

