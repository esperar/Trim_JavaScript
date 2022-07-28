// Callback Hell example

class UserStorage {
  loginUser(id , password){
    return new Promise((resolve , reject) => {
      setTimeout(() => {
        if(
          (id === 'huemang' && password === '123456') ||
          (id === 'hope' && password === '060206')
        ){
          resolve(id);
        } else{
          reject(new Error('not found'));
        }
      }, 2000);
    })
    
  }

  getRoles(user){
    return new Promise((resolve , reject) => {
      setTimeout(() => {
        if(user === 'huemang'){
          resolve({name : 'huemang' , role : 'admin'});
        } else {
          reject(new Error('no access'));
        }
      } , 1000);
    });
  }
}

const userStorage = new UserStorage();
const id = prompt('아이디를 입력하세요');
const password = prompt ('비번을 입력');

userStorage.loginUser(id , password).then(userStorage.getRoles)
.then(user => alert(`로그인이 되었습니다.`))
.catch(console.log);
