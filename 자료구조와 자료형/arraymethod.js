let fruits = ["사과" , "오랜지" , "배"];
console.log(fruits.pop()); // 배열에서 "배" 제거하고 요소를 얼럿창에 띄웁니다.

console.log(fruits); // 사과, 오렌지

// push

fruits.push("배");

console.log( fruits ) // 사과 오랜지 배

console.log(fruits.shift())// 배열에서 사과를 제거하고 사과를 띄움

// 배열 앞에 요소를 더해줌
fruits.unshift('사과');

console.log(fruits); // 사과 오렌지 배