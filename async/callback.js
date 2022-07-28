'use strict';

// Asynchrounus callback
function printWithDelay(print, timeout){
  setTimeout(print,timeout);
}

// Synchronous call back
function printImmediately(print){
  print();
}

console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');

printImmediately(() => console.log('hello'));

printWithDelay(() => console.log('async callback'), 2000);

// Callback Hell example

class UserStorage {
  loginUser(id , password, onSuccess , onError){
    setTimeout(() => {
      if(
        (id === 'huemang' && password === '123456') ||
        (id === 'hope' && password === '060206')
      ){
        onSuccess(id);
      } else{
        onError(new Error('not found'));
      }
    }, 2000);
  }

  getRoles(user, onSuccess , onError){
    setTimeout(() => {
      if(user === 'huemang'){
        onSuccess({name : 'huemang' , role : 'admin'});
      } else {
        onError(new Error('no access'));
      }
    } , 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt('아이디를 입력하세요');
const password = prompt ('비번을 입력');

userStorage.loginUser(id , password, (user) => {
  userStorage.getRoles(user, userWithRole => {
    alert('로그인이 되었습니다.');
  },
  error => {
    console.log(error);
  })
}, (error) => {
  console.log(error);
});