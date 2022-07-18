// 배열 메서드를 사용해서 "라" 를 지워라
let array = ["가","라","다","마","라","사","라"];

while(array.indexOf("라") > -1){
  array.splice(array.indexOf("라"), 1);
}

console.log(array);