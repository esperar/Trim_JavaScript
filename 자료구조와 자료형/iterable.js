// iterable 객체 : 배열을 일반화한 객체

let range = {
  from : 1,
  to : 5
};

// 1. for .. of 최초 호출 시 , Symbol.iterator가 호출됩니다.
range[Symbol.iterator] = function(){
  // Symbol.iterator는 이터레이터 객체를 반환합니다
  // 2. 이후 for..of 는 반환된 이터레이터 객체만을 대상으로 동작하는데, 이때 다음 값도 정해집니다.
  return {
    current: this.from,
    last : this.to,
    //3. for ..of 반복문에 의해 반복마다 next() 가 호출 됩니다.
    next() {
      // 4. next() 는 값을 객체 형태로 반환해야 합니다.
      if(this.current <= this.last){
      return { done : false , value : this.current++};
      } else {
        return {done : true};
      }
    }
  };
};

for(let num of range){
  alert(num); // 1 ,then 2 ,3, 4, 5,
}

// Array.from 메서드
// 범용 메서드 Array.from는 이터러블이나 유사 배열을 받아 진짜 array를 만든다
// 이 과정을 거치면 이터러블이나 유사 배열에 메서드를 사용할 수 있다.

let arrayLike = {
  0 : 'hello',
  1 : 'world',
  length : 2
};

Array.from(arrayLike); // ['hello' , 'world']

let arr = Array.from(arrayLike); // ['hello' , 'world'] 배열이 되어 이터러블 객체도 된다.
for(let item of arr) {};

// 문자열도 이터러블이 된다

for(let char of "test"){
  console.log(char); // t e s t
}