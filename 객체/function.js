function User(name) {
  this.name = name;
  this.isAdmin = false;

  this.sayHi = function () {
    console.log("제 이름은" + this.name + "입니다.");
  };
}

let user = new User("Huemnag");

console.log(user.name); // Huemang
console.log(user.isAdmin); // false;

let hope = new User("hope");
hope.sayHi(); // 제 이름은 hope 입니다.

function BigUser(){
  this.name = '이기환';
  return { name : '박주홍 '}; // << this가 아닌 새로운 객체 반환
}

console.log( new BigUser().name); // 박주홍

// 리턴에 아무것도 없으면 이기환을 반환

