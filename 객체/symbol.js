// symbol 은 유일한 식별자를 만들고 싶을 때 사용한다.
// Symbol() 을 사용하면 심볼값을 만들 수 있다.

let id = Symbol("id"); // symbol id 에는 "id" 라는 별명을 붙임

let id1 = Symbol("id");
console.log(id1 === id); // false
// 고유한 값이기 때문에 설명이 동일한 심볼을 여러개 만들어도 각 심볼값은 다르다.

//symbol 은 암시적으로 문자열로 바뀌지않는다
// console.log(id1) error

console.log(id1.toString()); // 직접 문자열로 바꾸어 줘야 출력이 가능하다.

// symbol.description 프로퍼티를 이용하면 설명만 보여주는 것도 가능하다.

console.log(id1.description); // "id"

// 심볼을 이용하면 숨김 프로퍼티를 만들 수 있다. 숨김 프로퍼티는 외부 코드에서 접근이 불가능하고 값도 덮어쓸 수 없는 프로퍼티다

let user = {
  name : "John"
};

let id2 = Symbol("id");

user[id2] = 1;

console.log(user[id]); 

//user.id2 = 1 이라고 했다면 user.id2 = 2; 라고 했을 때 값이 덮어씌워진다.

// 객체 리터럴로 심볼을 만드는 경우, 대괄호를 사용해 심볼형 키를 만들어야 한다.
let id3 = Symbol("id");

let user2 = {
  name : "Hope",
  [id] : 123 // "id" : 123 은 안됨 심볼 id 키가 아니라 문자열 "id" 키가 때문이다.
};

// 심볼은 for in에서 배제된다. Object.keys(user2) 에서도 배제가 된다. 
// 심볼형 프로퍼티 숨기기라는 원칙 덕분에 외부스크립트나 라이브러리는 심볼형 키를 가진 프로퍼티에 접근하지 못한다.
// 그런데 Object.assign은 키가 심볼인 프로퍼티를 배제하지 않고 객체 내 모든 프로퍼티를 복사한다.

let clone = Object.assign({},user2);

console.log(clone[id]); // 123

// 같은 심볼이 같은 개체를 가리키기를 원할 때가 있다. 그래서 전역심볼이라는 것이 있다.
// 레지스트리 안에 있는 심볼을 읽거나, 새로운 심볼을 생성하려면 Symbol.for(key) 를 사용하면 된다.
// 이 메서드를 호출하면 이름이 key인 심볼을 반환한다. 조건에 맞는 심볼이 없으면 새로운 심볼을 만들어 레지스트리 안에 저장한다
let id4 = Symbol.for("id4"); // 심볼이 존재하지 않으면 새로운 심볼을 만든다

// 동일한 이름을 이용해 심볼을 다시 읽는다.
let idAgain = Symbol.for("id4");

console.log(id4 === idAgain); // true

// 전역 심볼을 찾을 때 사용되는 Symbol.for(key) 에 반대되는 메서드도 있다. Symbol.keyFor(sym) 를 사용하면 이름을 얻을 수 있다.

// 이름을 이용해 심볼을 찾음
let sym = Symbol.for("name");
let sym2 = Symbol.for("id4");

// 심볼을 이용해 이름을 찾음.
console.log(Symbol.keyFor(sym)); // name
console.log(Symbol.keyFor(sym2)); //id

// Symbol.keyFor 는 전역 심볼 레지스트리를 뒤져 해당 심볼의 이름을 얻어냅니다. 전역 심볼이 아닌 심볼에겐 사용할 수 없습니다
// 전역 심볼이 아닌 심볼에게 사용하면 undefined를 반환합니다.
// 전역 심볼이 아닌 모든 심볼은 description 프로퍼티가 있기때문에 이름을 얻고싶으면 description 프로퍼티를 사용하면 됩니다.

// 시스템 심볼
// 자바스크립트 내부에서 사용되는 심볼입니다. 시스템 심볼을 잘 활용하면 객체를 미세 조정할 수 있습니다
// 잘 알려진 시스템 심볼
// Symbol.hasIntance
// Symbol.isConcatSpreadable
// Symbol.iterator
// Symbol.toPrimitive

// 객체가 어떻게 원시형으로 변환되는지 알기 위해선 Symbol.toPrimitive 에 대해 알아야하는데 자세한 내용은 그다음에 다루겠습니다.