'use strict';

// Promise is a JS object for asynchronus operation 
// state : pending > fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created , the executor runs automatically.
const promise = new Promise((resolve , reject) => {
  // doing some heavy work (network , read files)
  console.log('doing something...');
  setTimeout(() => {
    // resolve('hope');
    reject(new Error('no network'));
  },2000)
})

// 2. Consumers : then , catch , finally
promise.then((value) => { // promise 에서 전달된 값을 받음
  console.log(value); // hope 
})
.catch(error => { // catch를 이용해 실패한 에러를 받아옴
  console.log(error); 
})
.finally(() => {
  console.log('finally'); // 성공하든 실패하든 상관없이 어떠한 기능을 마지막으로 실행하고 싶을때 사용 finally
});

// 3. Promise chaining

const fetchNumber = new Promise((resolve , reject) => {
  setTimeout(() => resolve(1) , 1000);
});

fetchNumber.then( num => num * 2)
.then(num => num * 3)
.then(num => {
  return new Promise((resolve , reject) => {
    setTimeout(() => resolve(num - 1), 1000);
  })
})
.then(num => console.log(num));