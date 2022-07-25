// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  const result = fruits.join(); // join() : 배열의 있는 모든 값을 스트링으로 만든다
  console.log(result);
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const result = fruits.split(','); // 괄호안에 문자를 기준으로 나누어 배열로 만듬
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse(); // 배열의 값의 순서를 거꾸로 만든다.
  console.log(result); 
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  array.slice(2,5); // 배열의 특정한 부분을 리턴한다. 첫번째 수 부터 두번째 수 전까지만 반환
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  const result = students.find(function(student){
    return student.score === 90;
  });

  console.log(result); 
}

// Q6. make an array of enrolled students
{
  const result = students.filter((student) => student.enrolled); // 콜백함수가 true인 아이템만 모아서 배열을 만들어 전달
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map((student) => student.score); // 배열의 요소 하나하나를 다른 것으로 변환
  console.log(result); // 정수형 배열로 변환됨
}

// Q8. check if there is a student with the score lower than 50
{
  const result = students.some((student) => student.score < 50); // 배열의 요소중에서 콜백함수가 리턴이 true가 되는지를 확인
  console.log(result);
}

// Q9. compute students' average score
{
  const result = students.reduce((prev , curr) => {
    return prev + curr.score;
  },0); // 배열안에 들어있는 모든 요소들 마다 호출 << 어떤 값을 누적할때 씀

  console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students.map(student => student.score);
  result.join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students.map(student => student.score).sort((a,b) => a - b).join();
  // sort((a,b) => a-b) a에서 b의 값을 뺀 후에 부호가 - 되면 a가 더 작다는걸 간주해 정렬한다 
}