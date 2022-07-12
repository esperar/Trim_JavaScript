// 객체는 사용자 , 주문 등과 같이 실제 존재하는 개체를 표현하고자 할 때 생성됩니다.
let user = {
  name : "gihwan",
  age : 17,
  sayIntroduce() {
    console.log("안녕하세요 저는 이기환");
    console.log(this.name); // gihwan this 키워드를 사용하면 객체에 접근 가능
  }
};
// 객체도 특정한 행동을 할 수 있습니다. 그것이 메서드입니다.

user.sayHi = function() {
  console.log("안녕하세요");
};

user.sayHi(); // 안녕하세요 !

// 자바스크립트의 this는 다른 프로그래밍 언어의 this와 동작 방식이 다름
// this는 모든 함수에 사용할 수 있음

let user1 = { name : "Hope" };
let admin = { nmae : "Huemang" };

function sayName(){
  console.log(this.name);
}

user1.f = sayName;
admin.f = sayName;

user1.f(); // Hope (this == user1)
admin.f(); // Huemang (this == admin)

admin['f'](); // Admin 점과 대괄호는 동일하게 동작

// 화살표 함수는 일반 함수와 달리 고유한 this를 가지지 않습니다. 화살표 함수에서 this를
// 참조하면 화살표 함수가 아닌 평범한 외부 함수에서 this값을 가져옵니다

let user2 = {
  firstName : "보라",
  sayHello(){
    let arrow = () => console.log(this.firstName);
    arrow();
  }
};

user.sayHello(); // 보라