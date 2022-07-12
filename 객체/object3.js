// for...in 반복문
/* for in 반복문을 사용하면 객체의 모든 키를 순회 가능합니다. (for(;;)와는 다름) 
for (key in object) { 각 프로퍼티 키를 이용하여 본문 실행 } */

let user = {
  name : 'Hope',
  age : 17,
  isAdmin : true
};

for(let key in user){
  // 키
  alert( key ); // name, age , isAdmin
  // 키에 해당하는 값
  alert(user[key]); // John , 17 , true
}

// for in 안의 변수를 자유롭게 선언해도 된다. key가 아닌 fruit 이런식으로 말이다.

// 객체의 순서 배열에서 숫자라면 번호순으로 정렬이된다. 그렇기 때문에
// 만약 숫자형이지만 순서대로 배열을 쌓고싶다면 앞에 +를 붙이는게 좋다.

let codes = {
  "+49" : "독일",
  "+41" : "스위스",
  "+44" : "영국",
  "+1" : "미국"
};

for(let code in codes){
  console.log(+code); // 49, 41, 44, 1
}