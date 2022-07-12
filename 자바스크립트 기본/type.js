let value= true
console.log(typeof value); // boolean

value = String(value);// value를 string으로 "true"가 저장.

let str = "123";
alert(typeof str); // string

let num = Number(str); // 문자열 "123" >> 123 으로 변환

// 0 , null , undefined , NaN == false
// 그 외 true

console.log(Boolean(1)); // true
console.log(Boolean(0)); // false

console.log(Boolean("hello")); // true
console.log(Boolean("")); // false 빈문자열