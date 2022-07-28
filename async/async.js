// async & await
// clear style of using promise :)

// 1. async
async function fetchUser() { // async라는 키워드를 함수 앞에 쓰면 바로 실행됨 (비동기 처리)
   // do newwork request in 10 secs....
  return 'hope';
}

const user = fetchUser();
user.then(console.log());
console.log(user);

// 2. await
// delay가 끝날때까지 기다려.
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve , ms));
}

async function getApple() {
  await delay(1000);
  return 'apple';
}

async function getBanana() {
  await delay(1000);
  return 'banana';
}

async function pickFruit() {
  const applePromise = getApple(); // 병렬적으로 실행하게 함
  const bananaPromise = getBanana();

  const apple = await applePromise;
  const banana = await bananaPromise;

  return `${apple} + ${banana}`;
}

pickFruit().then(console.log);

// 3. useful Promise APIs
function pickAllFruits() {
  return Promise.all([getApple() , getBanana()]).then(fruits => fruits.join(' + '));
}
pickAllFruits().then(console.log);

function pickOnlyOne(){
  return Promise.race([getApple() , getBanana()]);
}

pickOnlyOne().then(console.log);