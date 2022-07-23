// 셋은 중복을 허용하지 않는 값을 모아놓은 특별한 컬렉션 입니다.
// 셋에 키가 없는 값이 저장됩니다.

// new Set(iterable) - 셋을 만듭니다. 이터러블 객체를 전달받으면 그 안의 값을 복사해 셋에 넣어줍니다
// set.add(value) - 값을 추가하고 셋 자신을 반환합니다.
// set.delete(value) - 값을 제거합니다. 호출 시점에 셋 내에 값이 있어서 제거에 성공하면 true, 아니면 false 를 반환합니다.
// set.has(value) - 셋 내에 값이 존재하면  true, 아니면 false를 반환합니다.
// set.clear() - 셋을 비웁니다.
// set.size - 셋에 몇 개의 값이 있는지 세줍니다.

// 예시로 방문자 방명록을 만든다고 가정해 봅시다. 한 방문자가 여러 번 방문해도 방문자를 중복해서 기록하지 않겠다고 결정했습니다.
// 즉 한 방문자는 단 한번만 기록되어야 합니다.

// 이때 적합한 자료구조가 셋입니다

let set = new Set();

let john = {name : "John"};
let pete = {name : "Pete"};
let mary = {name : "Mary"};

// 어떤 고객은 여러 번 방문할 수 있습니다.
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);

// 셋에는 유일무이한 값만 저장됩니다.
console.log(set.size); // 3

for(let user of set){
  console.log(user.name); // John Pete Mary
}

/*
맵과 셋에 반복 작업을 할 땐, 해당 컬렉션에 요소나 값을 추가한 순서대로 반복 작업이 수행됩니다.
따라서 이 두 컬렉션은 정렬이 되어있지 않다고 할 수 없습니다. 그렇지만 컬렉션 내 요소나 값을 재 정렬하거나 (배열에서 인덱스를 이용해 요소를 가져오는 것처럼)
숫자를 이용해 특정 요소나 값을 가지고 오는 것은 불가능합니다
 */