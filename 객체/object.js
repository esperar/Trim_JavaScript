let user = { // 객체
  name : "John",
  age : 17,
  isAdmin : false
};

console.log(user.name); // John

delete user.age; // user.age 삭제

user.name = 'Hope';

console.log(user.name); // Hope

//set
user["hope"] == true;

//get
alert(user["hope"]) // true

let key = "hope";
// user["hope"] = true와 같은 역할
user[key] = true;

let key2 = prompt("사용자의 어떤 정보를 얻고 싶으신가요?","name");
// key의 접근 방법은 대괄호 표기법으로만 접근이 가능
alert(user.key2); //undefined
alert(user[key2]); // hope prompt에 hope를 입력했다면

let fruit = prompt("어떤 과일을 구매하시겠습니까 ?","apple");

let bag = {
  [fruit] : 5, // 변수 fruit 에서 프로퍼티 이름을 동적으로 받아 옵니다.
}

console.log(bag.apple); // 5
// fruit에 apple이 할당 되었다면 , 5가 출력됩니다.
// [fruit] 는 프로퍼티 이름을 변수 fruit에서 가져오겠다는 의미입니다.
// 사용자가 프롬프트 상자에 apple을 입력했다면 bag엔 { apple : 5 }가 할당됩니다.

let fruit2 = prompt("어떤 과일을 구매하시겠습니까?","apple");
let bag2 = {};

//변수 fruit을 사용해 프로퍼티 이름을 만든다.
bag[fruit] = 5;

let fruit3 = 'apple';
let bag = {
  [fruit + "Computer"] : 5 // bag.appleComputers = 5
};
