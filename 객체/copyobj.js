// 객체와 원시타입의 근본적인 차이중 하나는 객체는 참조에 의해 저장되고 복사된다는 것입니다.
// 원시값 (문자열 숫자 불린)은 값 그대로 저장 할당 되고 복사되는 반면에 말이죠.

// 객체는 객체가 저장되어있는 메모리 주소인 객체에 대한 참조 값이 저장됩니다.
// 객체는 복사되지않고 객체의 참조값만 복사가 됩니다.

let user = {
  name : "huemang"
};

let admin = user; // 참조값을 복사함.

admin.name = 'pete'; // admin 참조 값에 의해 변경
console.log(user.name); // pete가 출력됨

let a = {};
let b = a; // 참조에 의한 복사

console.log(a == b); // true , 두 변수는 같은 객체를 참조
console.log(a === b); // true

let c = {};
let d = {}; // 독립된 두 객체

console.log(c == d); // false , 각각 독립된 객체이기 때문에 거짓이 반환

let user2 = {
  name : "Hope",
  age : 17
}

let clone = {}; // 새로운 빈 객체

// 빈 객체에 user 프로퍼티 전부를 복사해 넣습니다.
for(let key in user){
  clone[key] = user[key];
}

clone.name = "HM";
console.log(user.name); // Hope 바뀌지않습니다.

//Object.assign 메서드를 사용한 병합
// Object.assign(dest, [src1 , src2...])
// dest는 목표로 하는 객체입니다. sr1 , sr2 .. 는 복사하고자 하는 객체입니다.
let user3 = { name : "HuemangKim" };

let permission1 = {canView : true};
let permission2 = {canEdit : true};

// permission1,2 의 프로퍼티를 user로 복사합니다.
Object.assign(user3, permission1, permission2);

// now user = { name : "HuemangKim", canView : true, canEdit: true}

// 목표 객체의 동일한 프로퍼티 값을 가지고있다면 덮어씌워집니다.

let clone2 = Object.assign({}, user);
// user에 있는 모든 프로퍼티가 빈 배열에 복사되고 그 변수에 할당됨.


let Myuser = {
  name : "KimHope",
  sizes : {
    height : 188,
    width : 52
  }
};

alert( user.sizes.height); // 182

let clone3 = Object.assign({},user);

console.log(user.sizes === clone3.sizes); // true

// user와 clone3은 sizes를 공유합니다.
user.sizes.width++; // 한 객체에서 프로퍼티를 변경합니다.
console.log(clone.sizes.width); // 51 다른 객체에서 변경 사항을 확인 할 수 있습니다.

