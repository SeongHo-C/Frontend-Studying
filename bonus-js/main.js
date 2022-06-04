// 데이터가 가장 작은 단위의 아이들 number, string, boolean, null, undefined
// 이외에는 모두 object
let number = 2;
let number2 = number;
console.log(number);
console.log(number2);

number2 = 3;

console.log(number);
console.log(number2);

// object
// const object 주소는 변경 불가능, 가리키고 있는 값은 변경 가능
const obj = {
  name: 'ellie',
  age: 5,
};

console.log(obj.name);

let obj2 = obj;
console.log(obj2.name);

obj.name = 'james';
console.log('------');
console.log(obj.name);
console.log(obj2.name);

let a = 2;
a = 5;
a = 9;

// const num = 2;
// num = 4; 불가능

// 함수 최종 정리
const num = 1;
const num2 = 2;
const result = num + num2;

const num3 = 1;
const num4 = 2;
const result2 = num + num2;

// 반복되는 일 수행(함수로 정의한다.)
function add(num1, num2) {
  return num1 + num2;
}

function print() {
  console.log('print');
}

print();
// const sum = add(3, 4);
// console.log(sum);

// // function도 object임.
// // 이름은 함수를 가리키고 있는 주소를 가지고 있음.
// const doSomething = add;

// const result3 = doSomething(2, 3);
// console.log(result3);

function divide(num1, num2) {
  return num1 / num2;
}
function surprise(operator) {
  const result = operator(3, 4); // add(3, 4)
  console.log(result);
}

// add 함수의 reference를 전달
// surprise(add);

surprise(divide);

// false: 0, -0, '', null, undefined 값이 없음
// true: -1, 'hello', [], 'false' 값이 있음
// [] 텅텅 비어진 배열이라도 object자체가 만들어졌으므로 true
let num5; // undefined
if (num5) {
  console.log(num5);
}

// 앞에가 true 이면 뒤에가 실행
num5 && console.log(num5);

let obj3 = {
  name: 'ellie',
};

if (obj3) {
  console.log(obj3.name);
}

// 위에랑 동일하지만 더 간결한 코드
obj3 && console.log(obj3.name);

// 클래스와 콜백함수
class Counter {
  // 생성자
  constructor(runEveryFiveTimes) {
    this.counter = 0;
    this.callback = runEveryFiveTimes;
  }

  increase() {
    this.counter++;
    console.log(this.counter);
    if (this.counter % 5 === 0) {
      this.callback && this.callback(this.counter);
      // if (this.callback) {
      //   this.callback(this.counter);
      // }
    }
  }
}

// 콜백함수
function printSomething(num) {
  console.log(`'yo! ${num}`);
}
function alertNum(num) {
  alert(`'yo! ${num}`);
}

const printCounter = new Counter(printSomething);
const alertCounter = new Counter(alertNum);

printCounter.increase();
