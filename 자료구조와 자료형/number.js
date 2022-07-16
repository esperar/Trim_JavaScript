let billion = 1e9; // 10억 . 1 과 9개의 0

let ms = 1e-6; // 1에서 왼쪽으로 6번 소수점 이동

// toString(base)
// 이 메서드는 base 진법으로 num을 표현한 후, 이를 문자형으로 변환해 반환합니다.

let num = 255;
console.log(num.toString(16)); // ff
console.log(num.toString(2)); // 11111111

//base 는 2에서 36까지 쓸 수 있는데, 기본값은 10입니다.

// 어림수 구하기
// Math.floor 소수점 첬째 자리에서 내림 3.1 > 3 , -1.1 > -2 가 됨
// Math.ceil 소수점 첫째 자리에서 올림 3.1 은 4, -1.1 > -1 이 됨
// Math.round 소수점 첫째 자리에서 반올림. 3.1은 3 , 3.6 > 4가 됨
// Math.trunc 소수부를 무시 3.1 > 3 -1.1 > -1

let num2 = 1.23456;
// 소수점 두 번째 자리 숫자까지만 남기고 싶은 경우, 숫자에 100또는 100보다 큰 10의 거듭제곱 수를 곱한 후
// 원하는 어림수 내장 함수를 호출하고 처음 곱한 수를 다시 나누면 됩니다.
console.log(Math.floor(num * 100) / 100); // 1.23456 > 123.456 > 123 > 1.23

// 소수점 n 번째 수 까지 어림수를 구한 후 이를 문자형으로 변환해주는 메서드는 toFixed(n) 입니다
// toFixed는 Math.round와 유사하게 가장 가까운 값으로 버림 혹은 올림을 해줍니다.
let sum = 12.34;
console.log(num.toFixed(1)); // "12.3";

// 주의할 점은 이 메서드의 반환 값이 문자열이라는 것입니다. 소수부의 길이가 인수보다 작으면 끝에 0이 추가됩니다.
let sum1 = 12.34;
console.log(sum1.toFixed(5)); // "12.34000"

// parseInt , parseFloat 두 함수는 불가능할 때까지 문자열에서 숫자를 읽습니다

console.log(parseInt("100px")); // 100
console.log(parseFloat("12.5em")); // 12.5
console.log(parseInt('12.3')); // 12
console.log(parseFloat('12.3.4')) // 12.3 두 번째 점에서 숫자 읽기를 멈춥니다.

// 읽을 수 있는 숫자가 없을 땐 NaN을 반환합니다
console.log(parseInt("a1122")); //NaN

// Math.random() 0 ~ 1 사이 난수를 반환 1은 제외
// Math.max(a , b , c) 최댓값반환 / Math.min(a,b,c) 최솟값 반환
// Math.pow(n,power) n을 power한 만큼 거듭 제곱함