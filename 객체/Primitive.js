// ToPrimitive
// 특수 객체 메서드를 사용하면 숫자형이나 문자형으로 형 변환을 원하는 대로 조절할 수 있다.
let num = Number(obj);

// 수학연산 (이항 덧셈 연산을 제외함)
let n = +obj; // 
let delta = data1 = data2;
// 크고작음 비교
let grater = user1 > user2;

// Symbol.toPrimitive
// 이 심볼은 아래와 같이 목표로 하는 자료형(hint)를 명명하는데 사용

obj[Symbol.toPrimitive] = function(hint){
  // 반드시 원시 값 반환
  // hint는 string, number , default 중 하나가 될 수 있다.
};

let user = {
  name : "Hope",
  money : 1000,

  [Symbol.toPrimitive](hint) {
    console.log(`hint : ${hint}`);
    return hint == "string" ? `{name : ${this.name}}` : this.money;
  }
};

console.log(user); // hint : string -> {name : "Hope"}
console.log(+user); // hint : number -> 1000
console.log(user + 500) // hint : default -? 1500

// toString 은 문자열 반환 , valueOf 는 객체 자신을 반환
console.log(user.valueOf() === user); // true