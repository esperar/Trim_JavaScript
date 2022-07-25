// JSON

// 1. Object to JSON
// stringify()
let json = JSON.stringify(true);
console.log(json); // true

json = JSON.stringify(['apple','banana']);
console.log(json); // 배열들이 string이 됨
// 객체가 들어와도 객체 전부가 string이 됨
// 두번째 키로 원하는 프로퍼티만 골라서 변환 가능 stringify(... , ['key'])


// 2. JSON to Object
// parse(json)
const obj = JSON.parse(json);
console.log(obj); // stringify로 변했던 object를 다시 object 형으로 변환

// 객체를 json으로 변환하고 다시 객체로 변환해 다른 변수에 담으면 첫 객체안에있던 메서드는 사용 불가 이점 유의

