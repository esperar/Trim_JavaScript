// 객체 - 키가 있는 컬렉션을 저장함
// 배열 - 순서가 있는 컬렉션을 저장함
// 하지만 현실 세계를 반영하기엔 이 두 자료구조 만으론 부족해서 맵과 셋이 등장함

// 맵은 키가 있는 데이터를 저장하는 점에서 객체와 유사, 다만 맵은 키에 다양한 자료형을 허용한다는 점에 차이가있음

// new Map() 맵을 만든다
// map.set(key,value) - key를 이용해 value를 저장
// map.get(key) - key에 해당하는 값 반환 없으면 undefined 반환
// map.has(key) - key에 해당하면 true 아니면 false 반환
// map.delete(key) - key에 해당하는 값 삭제
// map.clear() - 맵 안에 모든 요소 제거
// map.size 요소의 개수를 반환

let map = new Map();

map.set('1' , 'str1'); // 문자형 키
map.set(1, 'num1') // 숫자형 키
map.set(true,'bool1'); // 불린형 키

// 객체는 키를 문자형으로 변환시킨다.
// 맵은 키의 타입을 변환시키지 않고 그대로 유지한다.

console.log(map.get(1)); // num1
console.log(map.get('1')); // str1

console.log(map.size); // 3

// 맵은 키로 객체를 허용합니다

let john = {name : "John"};

// 고객의 가게 방문 횟수를 세본다고 가정해 봅시다.
let visitsCountMap = new Map();

// john을 맵의 키로 사용하겠습니다.
visitsCountMap.set(John,123);
console.log(visitsCountMap.get(john)); // 123

// 객체를 키로 사용할 수 있다는 점은 맵의 가장 중요한 기능중 하나입니다.
// 객체에는 문자열 키를 사용할 수 있습니다. 하지만 객체 키는 사용할 수 없습니다.

// 다음 세 가지 메서드를 사용하여 맵의 각 요소에 반복 작업을 할 수 있습니다.
// map.keys() - 각 요소의 키를 모은 반복 가능한 이터러블 객체를 반환합니다.
// map.values() - 각 요소의 값을 모은 이터러블 객체를 반환합니다.
// map.entires() - 요소의 [키, 값]을 한 쌍으로 하는 이터러블 객체를 반환합니다.

let recipeMap = new Map([
  ['cucumber',500],
  ['tomatoes',350],
  ['onion',50]
]);

for(let vegetable of recipeMap.keys()){
  console.log(vegetable); // cucumber , tomatoes , onion
}

for(let amount of recipeMap.values()){
  console.log(amount); // 500 350 50
}

for(let entry of recipeMap){
  alert(entry); // cucumber, 500 ...
}

// 맵은 값이 삽입된 순서대로 순회를 실시합니다 객체가 프로퍼티 순서를 기억하지 못하는 것과는 다릅니다.

// 각 요소가 키-값 쌍인 배열이나 이터러블 객체를 초기화 용도로 맵에 전달해 새로운 맵을 만들 수 있습니다.

let map1 = new Map([
  ['1' , 'str1'],
  [1,'num1'],
  [true,'bool1']
]);

console.log(map1.get('1')); // str1

// 평범한 객체를 가지고 맵을 만들고싶다면 Object.entries를 활용해야합니다.
// 이 메서드는 키 값 쌍을 요소로 가지는 배열을 반환합니다.

let obj = {
  name : 'huemang',
  age : 17
};

let map2 = new Map(Object.entries(obj));

console.log(map.get('name')) // huemang


// 반대로 객체를 맵으로 바꾸는 방법은 Object.fromEntries 를 사용하면 됩니다.

let prices = Object.fromEntries([
  ['banana',1],
  ['orange',2],
  ['meat',4],
]);

// now prices = {banana : 1, orange : 2, meat : 4}

console.log(prices.orange); //2

let map3 = new Map();
map.set('banana',1);
map.set('orange',2);
map.set('meat',4);

let obj2 = Object.fromEntries(map.entries()); // 맵을 일반 객체로 변환

